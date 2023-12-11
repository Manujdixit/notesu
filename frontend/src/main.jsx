import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./components/Layout/Layout.jsx";
import "./index.css";
import "./bootstrap.min.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import LandingPage from "./components/screens/Landingpage/LandingPage.jsx";
import MyNotes from "./components/screens/MyNotes/MyNotes.jsx";
import Login from "./components/screens/LoginPage/LoginPage.jsx";
import Register from "./components/screens/RegisterPage/RegisterPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<LandingPage />} />
      <Route path="/mynotes" element={<MyNotes />} />
      <Route path="/mynotes/:id" element={<MyNotes />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
