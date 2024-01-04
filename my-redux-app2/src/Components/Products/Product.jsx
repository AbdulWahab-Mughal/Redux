import React, { useEffect } from "react";
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { GetProducts } from "../../Store/Actions/ProductAction";
import Loader from "../Loader/Loader";

const Product = () => {
  const dispatch = useDispatch();
  let { isLoading, data } = useSelector((state) => state.ProductReducerHandler);
  let {quantity,carItems} = useSelector(
    (state) => state.AddToCartReducerHandler
  );
  useEffect(() => {
    dispatch(GetProducts());
  }, []);
  return (
    <>
      <section className="head d-flex justify-content-around bg-black text-bg-danger">
        <div className="col-3 fs-1">Logo</div>
        <div className="col-3 fs-4">
          Cart:- <span>{quantity}</span>
        </div>
      </section>
      <section className="main">
        <div className="container">
          <div className="row">
            {isLoading ? (
              <Loader />
            ) : (
              data.map((products) => (
                <div className="col-4 mt-4" key={products.id}>
                  <Card products={products} />
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
