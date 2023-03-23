import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "../../contexts/Auth/RequireAuth";
import Home from "../../pages/Home";
import Dashboard from "../Dashboard";
import Login from "../Login";
import Page404 from "../Page404";
import Register from "../Register";
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<RequireAuth><Login /></RequireAuth>}></Route>
      <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>}></Route>
      <Route path="/register" element={<Register />}></Route >
      <Route path="*" element={<Page404 />}></Route>
    </Routes>
  )
}

export default App
