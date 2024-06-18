import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// Importação das páginas
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Layout from "./pages/Layout";
import Aula from "./pages/Aula";

// Definindo os elementos de rota
const element = createRoutesFromElements(
    <>
    <Route path="*" element={<ErrorPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route element={<Layout />}>
        <Route index path="/" element={<HomePage />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<Product />} />
        <Route path="aula" element={<Aula />} />
    </Route>
    </>
);

// Criando o roteador do Browser
export const router = createBrowserRouter(element);
