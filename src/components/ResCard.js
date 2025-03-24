import { useContext } from "react";
import UserContext from "../utils/UserContext";

const ResCard = (prop) => {
  const { resdata } = prop;

  const { loggedInUser } = useContext(UserContext);
  const { cloudinaryImageId, name, avgRating, cuisines, sla } = resdata?.info;
  // OBJ destrcturing
  // const {restoname, dish, rating, avgtime} = prop;

  return (
    <div className="rescard m-4 p-4 w-[200px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="itemImage rounded-lg"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3 className="font-bold" style={{ textAlign: "center" }}>
        {name}
      </h3>
      <h4>
        {avgRating} <br></br>
        {cuisines}
        <br /> {sla.deliveryTime} Min{" "}
      </h4>
    </div>
  );
};

// Higher Order Function
// input - Resturante Card => Resturante isopen

export const isopne = (ResCard) => {
  // function component which return some piece of JSX
  return (prop) => {
    return (
      <div>
        <label className="absolute bg-orange-200 text-black mx-2 p-1 rounded-sm font-bold">
          Open
        </label>
        <ResCard {...prop} />
      </div>
    );
  };
};

export default ResCard;
