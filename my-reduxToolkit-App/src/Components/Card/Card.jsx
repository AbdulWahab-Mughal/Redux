import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { AddToCart } from "../../Store/Actions/ProductAction";

const Card = ({products}) => {
  // const dispatch = useDispatch();
  // const { cartItems } = useSelector((state) => state.AddToCartReducerHandler);
  const { image, title, description, price } = products;
  let newDes = description.slice(0, 100);
  let newTitle = title.slice(0, 25);
  // const addToCartHandler = (products) => {
  //   let cart = cartItems.map((prod) => {
  //     return prod.id;
  //   });
  //   if (cart.includes(products.id)) {
  //     alert("This product is already added to the Cart");
  //   } else {
  //     dispatch(AddToCart(products));
  //   }
  // };
  return (
    <>
      <div className="card">
        <img src={image} className="card-img-top" alt="..." height={350} />
        <div className="card-body">
          <h5 className="card-title">{newTitle}..</h5>
          <p className="card-text">{newDes}</p>
          <p className="card-text text-center fw-bold text-primary">
            Price:- <span className=" text-danger fw-light">${price}</span>
          </p>

          <a
            href="#"
            className="btn btn-primary text-center"
            // onClick={() => {
            //   addToCartHandler(products);
            // }}
          >Add To Cart
            {/* {cartItems
              .map((prod) => {
                return prod.id;
              })
              .includes(products.id)
              ? "Product added"
              : "Add To Cart"} */}
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
