import { Box, Grid } from "@mui/material";
import Router from "next/router";
import Pagination from "@mui/material/Pagination";
import { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import styles from "../../styles/dashboard/Products.module.css";
import MultipleFilter from "../../components/Products/multipleFilter.component";
import SearchFilter from "../../components/Products/searchFilter.component";
import AllProducts from "../../components/Products/allProducts.component";
import TopNavbar from "../../components/Nav/TopNavbar";
import MultipleFilterOpen from "../../components/Products/multipleFilteopen.component";

export default function Products() {
  const cookies = new Cookies();
  const token = cookies.get("token");
  const [products, setProducts] = useState([]);
  const [brands, setBrandsSave] = useState([]);
  const [categories, setCategoriesSave] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [brandFilter, setBrandFilter] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState(["Celulares"]);
  const items = 24;
  const totalPages = Math.ceil(products.length / items);

  function getBackend(route, setter) {
    if (token != null) {
      fetch(process.env.NEXT_PUBLIC_PRODUCTAPI + "/api/v2/filters/" + route, {
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
      fetch(
        process.env.NEXT_PUBLIC_PRODUCTAPI +
          "/api/v2/filters/" +
          route +
          "/filter",
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
          body: JSON.stringify(filters),
        }
      )
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
    setPage(1);
  }
  function setCategories(value) {
    setCategoriesSave(value.sort());
  }
  function setBrands(value) {
    setBrandsSave(value.sort());
  }
  function handleChangePage(event, page) {
    setPage(page);
  }
  function handlerChangeCategoryFilter(name) {
    var temp = [...categoryFilter];
    if (temp.indexOf(name) > -1) temp.splice(temp.indexOf(name), 1);
    else temp.push(name);
    setCategoryFilter(temp);
  }
  function handlerChangeBrandFilter(name) {
    var temp = [...brandFilter];
    if (temp.indexOf(name) > -1) temp.splice(temp.indexOf(name), 1);
    else temp.push(name);
    setBrandFilter(temp);
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
      fetch(process.env.NEXT_PUBLIC_PRODUCTAPI + "/api/v2/filters/allFilter", {
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
    if (brandFilter.length == 0 && searchQuery == "") {
      getBackend("categories", 1);
    } else {
      getBackendFiltered("categories", 1);
    }
    if (categoryFilter.length == 0 && searchQuery == "") {
      getBackend("brands", 2);
    } else {
      getBackendFiltered("brands", 2);
    }
  }, [searchQuery, brandFilter, categoryFilter]);

  useEffect(() => {
    actionFilterProducts();
  }, [searchQuery, brandFilter, categoryFilter, brands, categories]);

  useEffect(() => {}, [products]);

  useEffect(() => {}, [brands, categories]);

  return (
    <div className="container">
      <title>Productos</title>
      <TopNavbar route="profile" home={false} />
      <main>
        <Box sx={12} className={styles.content}>
          <h1 className="title">Productos</h1>

          <Pagination
            count={totalPages}
            page={page}
            onChange={handleChangePage}
            size="medium"
            className={styles.pagination}
          />
          <Grid container xs={12} spacing={1}>
            <Grid item xs={12} md={3}>
              <Box className={styles.filterBox}>
                <h3>Filtros</h3>
                <Box className={styles.filters}>
                  <Grid container xs={12} spacing={1}>
                    <Grid item xs={12}>
                      <SearchFilter
                        value={searchQuery}
                        setter={setSearchQuery}
                      />
                    </Grid>

                    <Box sx={{ display: { xs: "block", md: "none" } }}>
                      <MultipleFilter
                        list={categories}
                        name={"Categoria"}
                        value={categoryFilter}
                        setter={setCategoryFilter}
                      />
                      <MultipleFilter
                        list={brands}
                        name={"Marca"}
                        value={brandFilter}
                        setter={setBrandFilter}
                      />
                    </Box>

                    <Box sx={{ display: { xs: "none", md: "block" } }}>
                      <MultipleFilterOpen
                        list={categories}
                        name={"Categoria"}
                        value={categoryFilter}
                        setter={handlerChangeCategoryFilter}
                      />
                      <MultipleFilterOpen
                        list={brands}
                        name={"Marca"}
                        value={brandFilter}
                        setter={handlerChangeBrandFilter}
                      />
                    </Box>
                  </Grid>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={9}>
              <Grid container className={styles.products} spacing={1}>
                <AllProducts
                  products={products}
                  page={page - 1}
                  items={items}
                />
              </Grid>
            </Grid>
          </Grid>
          <Pagination
            count={totalPages}
            page={page}
            onChange={handleChangePage}
            size="medium"
            className={styles.pagination}
          />
        </Box>
      </main>
    </div>
  );
}
