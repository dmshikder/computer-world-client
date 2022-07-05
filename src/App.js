import { Route, Routes } from "react-router-dom";
import Blogs from "../src/pages/Blogs/Blogs";
import Home from "../src/pages/Home/Home";
import NotFound from "../src/pages/NotFound/NotFound";
import Products from "../src/pages/Products/Products";
import "./App.css";
import AddProduct from "./pages/AddProduct/AddProduct";
import Inventory from "./pages/Inventory/Inventory";
import Login from "./pages/Login/Login";
import RequireAuth from "./pages/Login/RequireAuth/RequireAuth";
import ManageInventories from "./pages/ManageInventories/ManageInventories";
import Register from "./pages/Register/Register";
import Footer from "./pages/Shared/Footer/Footer";
import Header from "./pages/Shared/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/inventory" element={<Inventory />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/inventory/:inventoryId"
          element={
            <RequireAuth>
              <Inventory />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manageInventories"
          element={
            <RequireAuth>
              <ManageInventories/>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/addproduct"
          element={
            <RequireAuth>
              <AddProduct/>
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
