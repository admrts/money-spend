// import React from "react";
// import { buyItem, sellItem } from "../control/productSlice";
// import { useDispatch, useSelector } from "react-redux";

// function Product({ product }) {
//   const { basket, totalPrice, money } = useSelector((store) => store.product);
//   const dispatch = useDispatch();
//   const buy = () => {
//     dispatch(buyItem(product));
//   };
//   const sell = () => {
//     dispatch(sellItem(product));
//   };

//   const checkBasket = basket.find((item) => item.id === product.id);

//   return (
//     <div>
//       <h3>{product.title}</h3>
//       <p>$ {product.price}</p>
//       <div className="actions">
//         <button disabled={!checkBasket} onClick={sell}>
//           Sat
//         </button>
//         <span>{checkBasket ? checkBasket.amount : 0}</span>
//         <button disabled={totalPrice + product.price > money} onClick={buy}>
//           Satın Al
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Product;
