import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../../utils/cartSlice";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

     const onlineStatus = useOnlineStatus();

      if(onlineStatus === false){
    return <h1>Looks like you're offline! Check Internet Connectivity</h1>
   }

    const dispatch = useDispatch();

    const handleClearCart = () => {
    dispatch(clearCart());

    }
    return(
        <div className="text-center m-4 p-4 " >
            <h1 className="font-bold text-2xl">Cart</h1>
            <div className="w-6/12 m-auto">
            <button className="m-2 p-2 bg-black text-white rounded-lg hover: cursor-pointer" onClick={handleClearCart}>Clear Cart</button>
            {cartItems.length === 0 && <h1>Cart is Empty . Add Items to the Cart!</h1>}
                <ItemList items={cartItems} />
            </div>
        </div>
    )

}
export default Cart;