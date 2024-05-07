import { useState } from "react";
import UseResMenuData from "../Hooks/userestarentData";
import { MenuShimmer } from "../shimmer";
import FoodItems from "./foodItems";

const Menu = () => {
  const { MenuItems, RestrorentData } = UseResMenuData();
  const [ShowMenu, SetShowMenu ] =useState(null);
  return (
    <>
      {MenuItems.length === 0 ? <MenuShimmer /> :
        <div className="w-[50%] mx-auto">
          <h1 className="self-start py-4 font-bold text-xl">{RestrorentData?.name}</h1>
          <div className="flex-row border border-solid shadow-xl shadow-slate-500  h-[20vh] rounded-2xl">
            <h2 className="pl-2 pt-2 font-semibold">{"⭐ " + (RestrorentData.avgRating ? RestrorentData.avgRating : 1) + "(" + RestrorentData.totalRatingsString + ") " + ". " + RestrorentData.costForTwoMessage}</h2>
            <h4 className="px-2 text-yellow-600">{RestrorentData?.cuisines?.join(", ")}</h4>
            <span className="px-2 text-sm">Outlet</span><span className="px-2 text-sm text-gray-500">{RestrorentData.locality}</span>
            <h4 className="px-2 pt-2  text-sm">{RestrorentData?.sla?.slaString}</h4>
          </div>
          <ul>
            {MenuItems.map((resitems,index) => (
             <MenuItem key={resitems.title} 
             resitem={resitems}
             setShowItems={index===ShowMenu?true:false} 
             SetShowMenu ={()=>SetShowMenu(index)}
             />
            ))}
          </ul>
        </div>
      }
    </>
  );
};

const MenuItem = ({resitem,setShowItems,SetShowMenu}) => {
  // const [ShowMenu,setShowMenu] =useState();
  const [Arrow,setArrow] =useState("▽");
  const ShowMenuItems =()=>{
    SetShowMenu()
    setArrow((preArrow)=>(preArrow==="▽"?"△":"▽"))
  }
  return (
    // {Header}
 <div className="p-4 my-6 border border-solid shadow-lg shadow-slate-500 rounded-md">
<div className="flex justify-between cursor-pointer" onClick={()=>{ShowMenuItems();}}>
  <span className="font-bold">{resitem.title} ({resitem.itemCards.length})</span>
  <span className="">{Arrow}</span>
  </div>
  {setShowItems && <FoodItems foodItemData ={resitem.itemCards}/>}
 </div>
  )
};

export default Menu;
