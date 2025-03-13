import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestsoMenu from "../utils/customhook/useRestsoMenu";
import ResturanteCategories from "./ResturanteCategories";
import { useState } from "react";

const RestsoMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestsoMenu(resId);

  const [showIndex, setshowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

  const itemCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
      ?.card?.itemCards || [];

  const categories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <h3 className="font-bold text-lg">
        {cuisines ? cuisines.join(", ") : "N/A"}
      </h3>
      <h2 className="font-bold text-lg">{costForTwoMessage}</h2>

      {categories.map((category, index) => (
        // controlled component
        <ResturanteCategories
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index == showIndex ? true : false}
          setshowIndex={() => setshowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestsoMenu;
