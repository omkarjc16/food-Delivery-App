import { useEffect, useState } from "react";
import { MenuApi } from "../constants";
import { useParams } from "react-router-dom";
import { RESTAURANT_TYPE_KEY, MENU_ITEM_TYPE_KEY } from "../constants";
const useResMenuData = () => {
    const [RestrorentData, setRestrorentData] = useState([]);
    const [MenuItems, setMenuItems] = useState([]);
    useEffect(() => {
        FetchMenuData();
    }, [])
    const { resId } = useParams();
    const FetchMenuData = async () => {
        try {
            const data = await fetch(MenuApi + resId)
            const json = await data.json();
            const restaurantData = json?.data?.cards?.map(x => x.card)?.
                find(x => x && x.card['@type'] === RESTAURANT_TYPE_KEY)?.card?.info || null;
            setRestrorentData(restaurantData);
            // Set menu item data
            const menuItemsData =
                json?.data?.cards
                    .find((x) => x.groupedCard)
                    ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
                        (x) => x.card?.card
                    )
                    ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY)

            // ?.map((x) => x.itemCards)
            // .flat()
            // .map((x) => x.card?.info) || [];

            // const uniqueMenuItems = [];
            // menuItemsData.forEach((item) => {
            //     if (!uniqueMenuItems.find((x) => x.id === item.id)) {
            //         uniqueMenuItems.push(item);
            //     }
            // });
            setMenuItems(menuItemsData);
        } catch (error) {
            setRestrorentData(null);
            setMenuItems([]);
        }
    }
    return { MenuItems, RestrorentData }
}

export default useResMenuData;