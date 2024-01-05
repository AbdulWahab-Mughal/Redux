import React, { useEffect } from "react";
import Card from "../Card/Card";
import {  fetchApi } from "../../Store/Slices/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader"

const Product = () => {
  const dispatch = useDispatch();
  let {data,status} = useSelector((state) => state.ProductReducer);
  // let {quantity,carItems} = useSelector(
  //   (state) => state.AddToCartReducerHandler
  // );
  useEffect(() => {
    dispatch(fetchApi());
  }, []);
  return (
    <>
      <section className="head d-flex justify-content-around bg-black text-bg-danger">
        <div className="col-3 fs-1">Logo</div>
        <div className="col-3 fs-4">
          {/* Cart:- <span>{quantity}</span> */}
          Cart:- <span>0</span>
        </div>
      </section>
      <section className="main">
        <div className="container">
          <div className="row">
            {status.ISLOADING ? (
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
