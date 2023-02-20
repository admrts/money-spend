import React from "react";
import { buyItem, sellItem } from "../control/productSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
} from "@mui/material";

function Product({ product }) {
  const { basket, totalPrice, money } = useSelector((store) => store.product);
  const dispatch = useDispatch();
  const buy = () => {
    dispatch(buyItem(product));
  };
  const sell = () => {
    dispatch(sellItem(product));
  };

  const checkBasket = basket.find((item) => item.id === product.id);

  return (
    <Grid mx={3}>
      <Card>
        <CardMedia
          sx={{ height: 150, padding: "30px" }}
          image={product.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${product.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            variant="contained"
            color="secondary"
            disabled={!checkBasket}
            onClick={sell}
          >
            Sell
          </Button>
          <span className="pieces">
            {checkBasket ? checkBasket.amount : 0} pcs
          </span>
          <Button
            size="small"
            variant="contained"
            disabled={totalPrice + product.price > money}
            onClick={buy}
          >
            Buy
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Product;
