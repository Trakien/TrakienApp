import ProductCard from "../../components/productCard.component";
import Box from "@mui/material/Box";
import Router from "next/router";
import Pagination from "@mui/material/Pagination";
import { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import styles from "../../styles/dashboard/Products.module.css";
import MultipleFilter from "../../components/multipleFilter.component";
import SearchFilter from "../../components/searchFilter.component";

export default function Products() {
  const cookies = new Cookies();
  const token = cookies.get("token");
  const items = 25;
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(products.length / items);
  const [searchQuery, setSearchQuery] = useState("");
  const [brandFilter, setBrandFilter] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState([]);

  function getBackend(route, setter) {
    if (token != null) {
      fetch("http://localhost:4599/api/v2/" + route, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          switch (setter) {
            case 0:
              setProducts(data);
              setFilterProducts(data);
              break;
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
    products.map((product) => {
      if (product.brand == brand && product.category == category) {
        setFilterProducts(product);
      }
    });
  }

  function getMin(data, opt) {
    data = JSON.parse(data);
    let first = data[0];
    let minPrice = first.prices[first.prices.length - 1];
    let minUrl = first.url;
    let minName = first.name;
    data.map((unit) => {
      if (unit.prices[unit.prices.length - 1] < minPrice) {
        minPrice = unit.prices[unit.prices.length - 1];
        minUrl = unit.url;
        minName = unit.name;
      }
    });
    return opt === "price" ? minPrice : opt === "url" ? minUrl : minName;
  }

  useEffect(() => {
    getBackend("products", 0);
    getBackend("filters/categories", 1);
    getBackend("filters/brands", 2);
  }, []);

  useEffect(() => {
    actionFilterProducts();
  }, [searchQuery, brandFilter, categoryFilter]);
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
          <Box className={styles.products}>
            {filterProducts
              .slice(page * items, page * items + items)
              .map((product) => (
                <ProductCard
                  name={product.name}
                  brand={product.brand}
                  updateDates={product.updateDates.slice(1, -1).split(",")}
                  prices={getMin(product.stores, "price")}
                  url={getMin(product.stores, "url")}
                  minName={getMin(product.stores, "name")}
                  key={product.id}
                />
              ))}
          </Box>
        </Box>
      </main>
    </div>
  );
}
