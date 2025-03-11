import { useState } from "react";
import ItemList from "./ItemList";

const ResturanteCategories = ({ data }) => {

    const [showItems, setshowItems] = useState(false);

    const handleClick = () => {
        showItems ? setshowItems(false) : setshowItems(true);
    }

  return (
    <div>
      {/* Accordain Header */}
      <div className="w-6/12 mx-auto my-4  bg-gray-100 shadow-lg p-4 font-bold text-lg">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        { showItems && <ItemList items={data.itemCards} />}
      </div>

      {/* Accordain Body */}
    </div>
  );
};

export default ResturanteCategories;
