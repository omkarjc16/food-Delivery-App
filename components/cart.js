import { useDispatch, useSelector } from "react-redux";
import FoodItems from "./foodItems";
import { clearCart } from "../Redux/reduxSlices";

const Cart =()=>{
    const dispatch =useDispatch();
    const clear =()=>{
    dispatch(clearCart())
    }
    const cartItems =useSelector((store)=>store.cart.items)
    return(
        <div className="flex flex-col items-center">
        {cartItems.length !=0?
        <>
         <div className="text-center p-4 m-4 font-bold text-lg">Cart</div>
         <button className="bg-slate-800 rounded-lg m-2 px-4 py-2 text-white text-center" onClick={()=>clear()}>Clear</button>
         <div className="w-6/12 m-auto ">
         <FoodItems foodItemData={cartItems}></FoodItems>
         </div>
         </>
         :
         <div className="flex absolute top-[50%] text-center">
         <h1 className="font-bold text-2xl">Cart is Empty</h1>
         </div>
        }
        </div>
    )
}

export default Cart;