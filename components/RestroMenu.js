import UseResMenuData from "../Hooks/userestarentData";
const Menu =() => {
  const { MenuItems, MenueData } =UseResMenuData();
  console.log(MenueData)
  return (
    <div className="w-[100%] px-[20rem]">
      <h1 className="self-start py-4">{MenueData?.name}</h1>
      <div className="flex border border-solid shadow-xl shadow-slate-500  h-28 rounded-2xl">
      <h2 className="p-4">{MenueData.avgRating}</h2>
      </div>
      <h4>{MenueData?.cuisines?.join(", ")}</h4>
      <ul>
        {
        MenuItems.map((resitems) => (
        <li key={resitems?.id}>{resitems?.name + " -   Rs."}{resitems.price != NaN ? resitems.price : "Not available"}</li>
        ))}
      </ul>
    </div>
  )
}
export default Menu;