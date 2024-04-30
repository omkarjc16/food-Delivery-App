import { useEffect, useState } from "react";
import { image_URL } from "../constants";
const Card = ({
  name,areaName, avgRating, cuisines,
  cloudinaryImageId
}) => {
  console.log(avgRating);
  return (
    <div className="p-2 flex-row w-[13vw] bg-slate-300 rounded-lg">
      <img className="rounded-lg" src={image_URL + cloudinaryImageId} alt="foodimg" />
      <h5 className="font-bold pb-1">{name}</h5>
      <h5 className="font-bold">{avgRating !== undefined ? avgRating + "⭐" :"1 ⭐"}</h5>
      <h5 className="font-semibold from-neutral-400 ">{cuisines.join(", ")}</h5>
      <h5 className="textcontent">{areaName}</h5>
    </div>
  );
};

export default Card;
