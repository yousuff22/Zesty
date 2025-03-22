import { cloudinaryImg } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-400 border-b-2 text-left"
        >
          <div className="absolute">
            <button
              className="p-1 text-white mx-8 rounded-lg bg-black shadow-lg cursor-pointer"
              onClick={() => handleAddItem(item)}
            >
              Add +
            </button>
          </div>
          <img
            src={cloudinaryImg + item.card.info.imageId}
            className="w-36 rounded-lg "
          ></img>
          <div className="py-2">
            <span>{item.card.info.name}</span>
            <span> ₹{item.card.info.price / 100}</span>
          </div>
          <p className="text-xs ">{item.card.info.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
