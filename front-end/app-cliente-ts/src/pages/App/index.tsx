import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "../../contexts/Auth/RequireAuth";
import Home from "../../pages/Home";
import Dashboard from "../Dashboard";
import Login from "../Login";
import Page404 from "../Page404";
import Register from "../Register";
import './App.css'
import UserPerfil from "../UserPerfil";
import Users from "../Users";
import PageCompany from "../Company";
import ControlMaterial from "../ControlMaterial";
import Products from "../Products";
import ProductPerfil from "../ProductPerfil";
import Ticke from "../Ticket";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RequireAuth><Home /></RequireAuth>}></Route>
      <Route path="/login" element={<RequireAuth><Login /></RequireAuth>}></Route>
      <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>}></Route>
      <Route path="/register" element={<Register />}></Route >
      <Route path="/user-perfil" element={<UserPerfil />}></Route>
      <Route path="/users" element={<Users />}></Route>
      <Route path="/company" element={<PageCompany />}></Route>
      <Route path="/control-material" element={<ControlMaterial />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/product/view/:id?" element={<ProductPerfil />}></Route>
      <Route path="/emit-ticket" element={<Ticke />}></Route>
      <Route path="*" element={<Page404 />}></Route>
    </Routes>
  )
}

export default App
