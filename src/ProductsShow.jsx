import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function ProductsShow() {
  const [product, setProduct] = useState([]);
  const params = useParams();

  const handleShowProducts = () => {
    axios.get(`/products/${params.id}.json`).then((response) => {
      console.log(response.data);
      setProduct(response.data);
    });
  };

  useEffect(handleShowProducts, []);

  return (
    <div className="product-info">
      <h1>Product info</h1>
      <p className="product-name">Name: {product.name}</p>
      <p className="product-price">Price: ${product.price}</p>
      <p className="product-description">Description: {product.description}</p>
      <a href="/products" className="button2">
        Back to all products
      </a>
    </div>
  );
}
