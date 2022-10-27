import Box from "@mui/material/Box";
import Router from "next/router";
import Pagination from "@mui/material/Pagination";
import { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import styles from "../../styles/dashboard/Products.module.css";
import MultipleFilter from "../../components/multipleFilter.component";
import SearchFilter from "../../components/searchFilter.component";
import AllProducts from "../../components/allProducts.component";

export default function Products() {
  const cookies = new Cookies();
  const token = cookies.get("token");
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [brandFilter, setBrandFilter] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState(["Celulares"]);
  const items = 25;
  const totalPages = Math.ceil(products.length / items);

  function getBackend(route, setter) {
    if (token != null) {
      fetch("http://localhost:4599/api/v2/filters/" + route, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          switch (setter) {
            case 1:
              setCategories(data);
              break;
            case 2:
              setBrands(data);
              break;
          }
        });
    } else {
      Router.push("/login");
    }
  }

  function getBackendFiltered(route, setter) {
    const brandPost = brandFilter.length > 0 ? brandFilter : brands;
    const categoryPost =
      categoryFilter.length > 0 ? categoryFilter : categories;
    if (token != null) {
      const filters = {
        search: searchQuery,
        brands: brandPost,
        categories: categoryPost,
      };
      fetch("http://localhost:4599/api/v2/filters/" + route + "/filter", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(filters),
      })
        .then((response) => response.json())
        .then((data) => {
          switch (setter) {
            case 1:
              setCategories(data);
              break;
            case 2:
              setBrands(data);
              break;
          }
        });
    } else {
      Router.push("/login");
    }
  }

  function handleChangePage(event, page) {
    setPage(page);
  }

  function actionFilterProducts() {
    const brandPost = brandFilter.length > 0 ? brandFilter : brands;
    const categoryPost =
      categoryFilter.length > 0 ? categoryFilter : categories;
    if (token != null) {
      const filters = {
        search: searchQuery,
        brands: brandPost,
        categories: categoryPost,
      };
      fetch("http://localhost:4599/api/v2/filters/allFilter", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(filters),
      })
        .then((response) => response.json())
        .then((data) => {
          setProducts(data);
        });
    } else {
      Router.push("/login");
    }
  }

  useEffect(() => {
    if (brands.length == 0 || searchQuery != "") {
      getBackend("categories", 1);
    } else {
      getBackendFiltered("categories", 1);
    }
    if (categories.length == 0 || searchQuery != "") {
      getBackend("brands", 2);
    } else {
      getBackendFiltered("brands", 2);
    }
  }, [searchQuery, brandFilter, categoryFilter]);

  useEffect(() => {
    actionFilterProducts();
  }, [searchQuery, brandFilter, categoryFilter, brands, categories]);

  useEffect(() => {}, [products]);

  useEffect(() => {
    console.log(brands);
    console.log(categories);
  }, [brands, categories]);

  return (
    <div className="container">
      <title>Products</title>
      <main>
        <Box className={styles.content}>
          <h1 className="title">Products</h1>
          <Box className={styles.filterBox}>
            <h3>Filters</h3>
            <Box className={styles.filters}>
              <SearchFilter value={searchQuery} setter={setSearchQuery} />
              <MultipleFilter
                list={categories}
                name={"Category"}
                value={categoryFilter}
                setter={setCategoryFilter}
              />
              <MultipleFilter
                list={brands}
                name={"Brand"}
                value={brandFilter}
                setter={setBrandFilter}
              />
            </Box>
          </Box>
          <Pagination
            count={totalPages}
            page={page}
            onChange={handleChangePage}
            size="large"
            className={styles.pagination}
          />
          <AllProducts products={products} page={page - 1} items={items} />
        </Box>
      </main>
    </div>
  );
}
