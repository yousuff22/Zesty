import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { Link } from "react-router";

const RestsoMenu = () => {
  const { resId } = useParams();
  console.log(resId);
  
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    Menufetch();
  }, [resId]);

  const Menufetch = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=${resId}`
    );
    const jsonData = await data.json();
    setResInfo(jsonData?.data);
  };

  if (!resInfo) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

  const itemCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
      ?.card?.itemCards || [];

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines ? cuisines.join(", ") : "N/A"}</h3>
      <h2>{costForTwoMessage}</h2>

      <h2>Menu</h2>
      <ul>
        {itemCards.length > 0 ? (
          itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - Rs.{" "}
              {item.card.info.price ? item.card.info.price / 100 : "N/A"}
            </li>
          ))
        ) : (
          <p>No menu items available.</p>
        )}
      </ul>
    </div>
  );
};

export default RestsoMenu;
