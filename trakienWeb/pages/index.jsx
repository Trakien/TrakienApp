import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Pricing from "../components/Sections/Pricing";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer";
import { Helmet } from "react-helmet";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/landingPage/flexboxgrid.module.css";
import Purpose from "../components/Sections/Prupose";
import Cookies from "universal-cookie";
const cookies = new Cookies();
cookies.remove("token");
export default function App() {
  return (
    <div>
      <title>Trakien</title>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div>
        <TopNavbar home={true} />
        <Header />
        <Contact />
        <Services />
        <Purpose />
        <Pricing />
        <Footer />
      </div>
    </div>
  );
}
