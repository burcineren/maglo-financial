import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserForm from "./pages/UserForm/UserForm";
import ToDoForm from "./pages/TodoList/TodoForm";
import Navbar from "./core/navbar/Navbar";
import NewsFeed from "./pages/ProductList/ProductList";
import ProductList from "./pages/ProductList/ProductList";

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<ToDoForm />} />
          <Route path="/user" element={<UserForm />} />
          <Route path="/product-list" element={<ProductList />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
