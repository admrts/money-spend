import { moneyFormat } from "./helpers";
import { useSelector } from "react-redux";

function Header() {
  const { money, totalPrice } = useSelector((store) => store.product);
  return (
    <div className="header">
      {totalPrice > 0 && money - totalPrice !== 0 && (
        <div>You have {moneyFormat(money - totalPrice)} $ left. </div>
      )}
      {totalPrice === 0 && <div>You Have {moneyFormat(money)} $ </div>}
      {money - totalPrice === 0 && <div>{"Money is over :("}</div>}
    </div>
  );
}

export default Header;
