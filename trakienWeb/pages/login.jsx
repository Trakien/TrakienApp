import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Email_Password_Fields from "../components/Profile/Email-Password.component";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import RedirecTag from "../components/Elements/RedirectTag.component";
import Cookies from "universal-cookie";
import Router from "next/router";
import Link from "next/link";
import style from "../styles/Elements/login.module.css";

const cookies = new Cookies();

const theme = createTheme();

const SignIn = (props) => {
  const [token, settoken] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    var jsondata = {
      email: data.get("email"),
      password: data.get("password"),
    };
    fetch("http://localhost:81/v2/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsondata),
    })
      .then((response) => response.json())
      .then((datas) => {
        settoken(datas.token);
        cookies.set("token", datas.token, {
          path: "/",
          expires: new Date(datas.expirationDate),
        });
        cookies.set("email", jsondata.email, {
          path: "/",
          expires: new Date(datas.expirationDate),
        });
        Router.push("/dashboard/profile");
      });
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Link href="/">
              <img
                className={style.img}
                src="/home/logoTrakien.png"
                alt="trakienLogo"
              ></img>
            </Link>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <Email_Password_Fields></Email_Password_Fields>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{ backgroundColor: "#4630aa" }}
              >
                Sign In
              </Button>
              <RedirecTag
                info="Eres nuevo? Creemos una nueva cuenta"
                redirectUrl="/signup"
                color="#4630aa"
              ></RedirecTag>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};
export default SignIn;
