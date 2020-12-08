import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import ProductForm from "../components/ProductForm";
import DeleteButton from "../components/DeleteButton";

export default (props) => {
  const { id } = props;
  const [product, setProduct] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/product/" + id)
      .then((res) => {
        setProduct(res.data);
        setLoaded(true);
      });
  }, []);

  const updateProduct = (product) => {
    axios
      .put("http://localhost:8000/api/product/" + id, product)
      .then((res) => console.log(res));
  navigate("/product");
  };

  return (
    <div>
      {loaded && (
        <>
          <ProductForm
            onSubmitProp={updateProduct}
            initialTitle={product.title}
            initialDescription={product.description}
            initialPrice={product.price}
          />
          <DeleteButton productId={product._id} successCallback={() => navigate("/product")}/>
        </>
      )}
    </div>
  );
};
