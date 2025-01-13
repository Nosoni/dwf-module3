import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HolaMundo from "./HolaMundo";
import "./index.css";
import Login from "./Login";
import Layout from "./Layout";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <HolaMundo nombre="Pedro"></HolaMundo>
    <HolaMundo nombre="Maria"></HolaMundo>
    <HolaMundo nombre="Rodrigo"></HolaMundo> */}
    {/* <HolaMundo nombre={"Maria"}></HolaMundo> */}
    {/* <Login registrado={true}></Login> */}
    <Layout></Layout>
  </StrictMode>
);
