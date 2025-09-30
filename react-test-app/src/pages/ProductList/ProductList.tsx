import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../core/redux/cardSlice";

export default function ProductList() {
  const dispatch = useDispatch();
  const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Telefon" },
  ];
  return (
    <div>
      <h1>Ürünler</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h1>{product.name}</h1>
          <button onClick={() => dispatch(addToCart(product))}></button>
        </div>
      ))}
    </div>
  );
}
