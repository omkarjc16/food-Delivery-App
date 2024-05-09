import { image_URL } from "../constants";
const Card = ({
  name,areaName, avgRating, cuisines,
  cloudinaryImageId
}) => {
  return (
    <div className="p-2 flex-row w-[13vw] bg-slate-300 rounded-lg">
       <div className="relative rounded-lg overflow-hidden" style={{paddingBottom: "56.25%"}}>
        <img className="absolute top-0 left-0 w-full h-full object-cover rounded-lg" src={image_URL + cloudinaryImageId} alt="foodimg" />
      </div>
      <h5 className="font-bold pb-1">{name}</h5>
      <h5 className="font-bold">{avgRating !== undefined ? avgRating + "⭐" :"1 ⭐"}</h5>
      <h5 className="font-semibold from-neutral-400 ">{cuisines.join(", ")}</h5>
      <h5 className="textcontent">{areaName}</h5>
    </div>
  );
};

export const CardWithPromoted =(Card)=>{
  return (props)=>{
    return (
    <>
    <label className="absolute z-10 bg-green-500 font-medium text-white m-1 p-1 rounded-md" >Open</label>
    <Card {...props.props} />
    </>
    )
  }
}



export default Card;
