import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import MainSection from "./MainSection";

const Layout = () => {
  const tienePermisoParaVerNavBar = true;

  return (
    <>
      {tienePermisoParaVerNavBar && <Navbar></Navbar>}
      <MainSection></MainSection>
      <Footer></Footer>
    </>
  );
};

export default Layout;
