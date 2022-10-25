import ProductCard from "../../components/productCard.component";
import Grid from "@mui/material/Grid";
import Router from "next/router";
import Pagination from "@mui/material/Pagination";
import { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import styles from "../../styles/dashboard/Products.module.css";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import MultipleFilter from "../../components/multipleFilter.component";

export default function Products() {
  const cookies = new Cookies();
  const token = cookies.get("token");
  const items = 25;
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(products.length / items);
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState([]);
  const [category, setCategory] = useState([]);

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
  return (
    <div className="container">
      <title>Products</title>
      <main>
        <div className={styles.content}>
          <h1 className="title">Products</h1>
          <Pagination
            count={totalPages}
            page={page}
            onChange={handleChangePage}
            size="large"
            className={styles.pagination}
          />
          <Grid container spacing={3} columns={16} className={styles.separator}>
            <Grid item xs={4} className={styles.filters}>
              <h3>Filters</h3>
              <TextField
                id="search-bar"
                className="text"
                onInput={(e) => {
                  setSearchQuery(e.target.value);
                }}
                label="Search by name"
                variant="outlined"
                placeholder="Search..."
                size="small"
              />
              <IconButton type="submit" aria-label="search">
                <SearchIcon style={{ fill: "blue" }} />
              </IconButton>
              <MultipleFilter list={categories} />
            </Grid>
            <Grid item xs={12} className={styles.products}>
              {products
                .slice(page * items, page * items + items)
                .map((product) => (
                  <ProductCard
                    name={product.name}
                    updateDates={product.updateDates.slice(1, -1).split(",")}
                    prices={getMin(product.stores, "price")}
                    url={getMin(product.stores, "url")}
                    minName={getMin(product.stores, "name")}
                    key={product.id}
                  />
                ))}
            </Grid>
          </Grid>
        </div>
      </main>
    </div>
  );
}
