import { FoodItemsImgURL } from "../constants";
import { useState } from "react";
import Dummy from "../Assets/Dummy.png"
const FoodItems = ({ foodItemData }) => {
    const [buttonTxt, setButtonTxt] = useState("Add");
    const [buttonStyle, setButtonStyle] = useState("bg-green-700");
    const toggleButton = () => {
        setButtonTxt((prevTxt) => (prevTxt === "Add" ? "Remove" : "Add"));
        setButtonStyle((prevStyle) => (prevStyle === "bg-green-700" ? "bg-red-700" : "bg-green-700"));
    };
    return (
        <div>
            {
                foodItemData.map((item) => (
                    <div key={item.card.info.id} className="flex flex-row justify-between border-gray-200 border-b-2 p-4 mt-8">
                        <div className="flex flex-col relative w-[60%]">
                            <h1 className="font-bold">{item.card.info.name}</h1>
                            <h2 className="font-semibold">{"₹" + (item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100)}</h2>
                            <h4 className="text-gray-500">{item.card.info.description ? item.card.info.description : ""}</h4>
                        </div>
                        <div className="flex flex-col w-[20%] justify-evenly items-center">
                            <img className="relative w-[100%] object-cover rounded-xl" src={item.card.info.imageId ? FoodItemsImgURL + item.card.info.imageId : Dummy} alt="foodimg" />
                            <button className={`p-2 rounded-lg text-white w-[50%] ${buttonStyle}`} onClick={toggleButton}>
                                {buttonTxt}
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default FoodItems;