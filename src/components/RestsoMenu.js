import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestsoMenu from "../utils/customhook/useRestsoMenu";
import ResturanteCategories from "./ResturanteCategories";

const RestsoMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestsoMenu(resId);

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
    console.log(categories);

  console.log(resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <h3 className="font-bold text-lg">
        {cuisines ? cuisines.join(", ") : "N/A"}
      </h3>
      <h2 className="font-bold text-lg">{costForTwoMessage}</h2>

      {categories.map((category,index) => (
        <ResturanteCategories key={index} data={category?.card?.card} />
      ))}
    </div>
  );
};

export default RestsoMenu;
