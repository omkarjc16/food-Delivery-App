import { useState, useEffect } from "react";
import Card, { CardWithPromoted } from "./card";
import { swiggyapikey } from "../constants";
import Shimmer from "../shimmer";
import { Link } from "react-router-dom";
const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filterrestaurants, setfilterRestaurants] = useState([]);
  const [searchTxt, setsearchTxt] = useState();
  const [errorMessage, setErrorMessage] = useState("");

  const RestroWithPromo =CardWithPromoted(Card);

  useEffect(() => {
    fechdata()
  }, []);

  const filterData = (searchTxt, restaurants) => {
    const filterdata = restaurants.filter((res) => res?.info?.name.toLowerCase().includes(searchTxt.toLowerCase()))
    return filterdata;
  }
  const fechdata = async () => {
    const data = await fetch(swiggyapikey)
    const jsonData = await data.json();
    const restrodata =await jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setRestaurants(restrodata);
    setfilterRestaurants(restrodata);
  }
  return (
    <div className="flex-row overflow-hidden">
      <div className=" flex px-4 py-6 ">
        <input
        className="p-1 m-1 border border-solid border-blue-900 rounded-lg"
          type="text"
          placeholder="faviourite Restro."
          value={searchTxt}
          onChange={(e) => {
            setsearchTxt(e.target.value);
          }}></input>
        <button className=" px-2 py-1 m-2 bg-green-300 rounded-lg" onClick={
          () => {
            if (searchTxt != "") {
              const filterRestro = filterData(searchTxt, restaurants);
              setfilterRestaurants(filterRestro);
              if (filterRestro.length === 0) {
                setErrorMessage("No matches restaurant found");
              }
            } else {
              setErrorMessage("");
              // setRestaurants(restaurants);
              setfilterRestaurants(restaurants);
            }
          }
        }>search</button>
      </div>
      {errorMessage && <div className="error-container">{errorMessage}</div>}
      <div className="flex flex-wrap justify-between w-[100%]">{
        restaurants.length == 0 ? <Shimmer /> :
          filterrestaurants.map((restaurant) => {
            return (
              <Link
                to={"/ResMenu/" + restaurant?.info?.id}
                key={restaurant?.info?.id}
              >{
                restaurant?.info?.isOpen ? RestroWithPromo(<Card {...restaurant?.info}/>):(<Card {...restaurant?.info}  />)
                }
                
              </Link>
            )
          })}
      </div>
    </div>
  )
}
export default Body;
