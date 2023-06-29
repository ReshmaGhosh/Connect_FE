import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { fetchProducts } from "../redux/slice/product";

function Product() {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  console.log(products, "products");

  return (
    <div>
      {products.map((product) => (
        <li key={product.id}>
          {product.title} - {product.price}
        </li>
      ))}
    </div>
  );
}

export default Product;
