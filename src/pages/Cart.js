import { useDispatch, useSelector } from "react-redux";
import ItemList from "../components/ItemList";
import { clearCart } from "../utils/cartSlice";

function Cart() {
  const dispatchFun = useDispatch();
  const handleClearcart = () => {
    dispatchFun(clearCart());
  };
  const cartItem = useSelector((store) => store.cart.items);

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="m-4 p-4 bg-black text-white rounded-2xl cursor-pointer"
          onClick={handleClearcart}
        >
          {" "}
          Clear Cart
        </button>
        {cartItem.length === 0 && <h1>Cart is Empty, Add Items to the Cart !!!</h1>}
        <ItemList items={cartItem} />
      </div>
    </div>
  );
}

export default Cart;
