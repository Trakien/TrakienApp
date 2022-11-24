import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Email_Password_Fields from "../components/Profile/Email-Password.component";
import RedirecTag from "../components/Elements/RedirectTag.component";
import Router from "next/router";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import Link from "next/link";
import style from "../styles/Elements/login.module.css";
const theme = createTheme();

const SignUp = (props) => {
  const createNotification = async (type, title, message, time) => {
    type === "success"
      ? NotificationManager.success(message, title, time)
      : NotificationManager.error(message, title, time);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    var jsondata = {
      name: data.get("firstName"),
      email: data.get("email"),
      lastName: data.get("lastName"),
      passwd: data.get("password"),
    };
    fetch(process.env.NEXT_PUBLIC_CUSTOMERAPI + "/api/v2/customers", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsondata),
    }).then((response) => {
      console.log(response);
      if (response.status === 200) {
        Router.push("/login");
      } else {
        createNotification(
          "error",
          "Error",
          "Ha ocurrido un error inesperado, vuelve a intentar mas tarde.",
          3000
        );
      }
    });
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <div>
            <NotificationContainer />
          </div>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
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
            <Avatar sx={{ m: 1, bgcolor: "#4630aa" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="Nombre"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Apellido"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
              </Grid>
              <Email_Password_Fields></Email_Password_Fields>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{ backgroundColor: "#4630aa" }}
              >
                Registrarse
              </Button>
              <RedirecTag
                info="Ya tienes una cuenta con nosotros? Ingresa"
                redirectUrl="/login"
                color="#4630aa"
              ></RedirecTag>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};
export default SignUp;
