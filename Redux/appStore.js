import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./reduxSlices"
const AppStore =configureStore({
    reducer:{
    cart:CartReducer,
    }

});
export default AppStore;