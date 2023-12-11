import "./Layout.css";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

import React from "react";
import { Outlet } from "react-router-dom";

const App = () => (
  <>
    <Header />
    <main style={{ minHeight: "93vh" }}>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default App;
