import { createSlice } from "@reduxjs/toolkit";
const CartSlices =createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItems:(state)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            //older redux state is not mutable we needs to create seperate copy of current state and 
            //update its value and return it. in letest redux toolkit we can mutate redux state
            // state.items.length=0; //we can write either like this or
            return {items:[]}  //this will replace exesting object to this {return:[]}
        }
    }
})
export const {addItem,removeItems,clearCart} =CartSlices.actions
export default CartSlices.reducer;