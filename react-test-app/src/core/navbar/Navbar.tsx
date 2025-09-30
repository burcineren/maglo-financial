import { Link, BrowserRouter as Router } from "react-router-dom";
import "./Navbar.Module.css";
export default function Navbar() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/user">News</Link>
      </li>
      <li>
        <Link to="/product-list">Product</Link>
      </li>
    </ul>
  );
}
