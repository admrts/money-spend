import "./App.css";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import Product from "./components/Product";
import Basket from "./components/Basket";
import { Grid } from "@mui/material";

function App() {
  const { productsItem } = useSelector((store) => store.product);

  return (
    <div className="App">
      <Header />
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
          gap: "10px",
        }}
      >
        {productsItem.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </Grid>

      <Basket />
    </div>
  );
}

export default App;
