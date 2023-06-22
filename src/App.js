// import Home from './Pages/Home/Home';
import "./App.css";
import Product from "./Components/Product/Product";
import Drawer from './Components/Header/Drawer'
// import ProductDetail from './Components/ProductDetails';
import ProductDetails from "./Components/Product/ProductDetails";
import { Routes, Route } from "react-router-dom";
import Category from "./Components/Category";

function App() {
  return (
    <>
      <Drawer/>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/product" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
