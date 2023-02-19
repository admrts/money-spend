import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotal, clearBasket } from "../control/productSlice";
import { Button } from "@mui/material";

function Basket() {
  const { totalPrice, basket } = useSelector((store) => store.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [basket, dispatch]);

  const clear = () => {
    dispatch(clearBasket());
  };

  return (
    <footer className="basket">
      <h2>Cart</h2>
      {totalPrice > 0 ? (
        <div>
          <div>
            {basket.map((item, index) => {
              return (
                <p key={index}>
                  {item.title} {"->"} {`${item.amount} piece =`}{" "}
                  {`total $ ${item.price}`}
                </p>
              );
            })}
          </div>
          <h4>Total Price {totalPrice} TL</h4>
          <Button variant="contained" color="error" onClick={clear}>
            Clear
          </Button>
          <Button variant="contained" color="success" onClick={clear}>
            Check Out
          </Button>
        </div>
      ) : (
        <div>Cart is empty.</div>
      )}
    </footer>
  );
}

export default Basket;
