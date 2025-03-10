import ResCard from "./ResCard"; // defalut import
import { useEffect, useState } from "react"; // named import
import Shimmer from "./Shimmer";
import resList from "../utils/mockData";
import { Link } from "react-router";
import useOnlineStatus from "../utils/customhook/useOnlineStatus";

let DemoListJS = [
  {
    restoname: "Ranwara restaurant",
    dish: "Panner masala",
    rating: "4.0",
    avgtime: "10 Min",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6EuMRfHJAkjudmj5CCXUvB9Sy_QoGAgUPfw&s",
  },
  {
    restoname: "Arsalan restaurant",
    dish: "butter chicken masala",
    rating: "3.2",
    avgtime: "10 Min",
    img: "https://i0.wp.com/blog.petpooja.com/wp-content/uploads/2021/10/cultural-cuisine.jpg?resize=696%2C385&ssl=1",
  },
  ,
  {
    restoname: "Zam Zam restaurant",
    dish: "mashroom masala",
    rating: "4.5",
    avgtime: "10 Min",
    img: "https://tb-static.uber.com/prod/image-proc/processed_images/38c654651478967d53bf62f44ea3bacd/fb86662148be855d931b37d6c1e5fcbe.jpeg",
  },
  {
    restoname: "Star restaurant",
    dish: "biryani",
    rating: "4.8",
    avgtime: "10 Min",
    img: "https://tb-static.uber.com/prod/image-proc/processed_images/ed4e47d18739642a290001e06f5db82f/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
  },
  {
    restoname: "Malad restaurant",
    dish: "Shawarma",
    rating: "4.1",
    avgtime: "10 Min",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6EuMRfHJAkjudmj5CCXUvB9Sy_QoGAgUPfw&s",
  },
  {
    restoname: "Famous restaurant",
    dish: "chole bhature",
    rating: "3.9",
    avgtime: "10 Min",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmoaRLPY2GFQxQe0FCCiUQM9kgZ847POXTDQ&s",
  },
  {
    restoname: "Good restaurant",
    dish: "fired chicken",
    rating: "4.7",
    avgtime: "10 Min",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdWPzgJkstd0rds9qWiBde--Dw_4sB-FdGSg&s",
  },
];
const Body = () => {
  // Local State variable
  let [DemoList, setDemoList] = useState([]);
  const [filterRes, setfilterRes] = useState([]);

  let [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const APIData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await APIData.json();
    // Optional chaining
    setDemoList(
      json.data?.cards[1]?.card.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilterRes(
      json.data?.cards[1]?.card.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(json.data?.cards[1]?.card.card?.gridElements?.infoWithStyle?.restaurants);
  };

  const OnlineStatus = useOnlineStatus();

  if (OnlineStatus === false)
    return (
      <h1>Looks like you're offline ! Please check your internet connection</h1>
    );

  // conditional Rendering
  return DemoList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="Body">
      <div className="search p-4 m-4 ">
        <input
          className="border border-solid border-black p-2"
          type="text"
          placeholder="Search Your Food"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        ></input>

        <button
          className="searchBTN px-4 py-2 bg-green-100 m-4 rounded-lg"
          onClick={() => {
            const filterRestura = DemoList.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setfilterRes(filterRestura);
          }}
        >
          Search
        </button>

        <button
          className="filter-btn x-5 py-2 bg-gray-100 m-4 rounded-lg"
          onClick={() => {
            setDemoList(
              (DemoList = DemoList.filter(
                (resto) => resto.info.avgRating >= 4.5
              ))
            );
          }}
        >
          Top Rated Restuarant
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        {/* for hardcoded values... */}
        {/* <ResCard
            restoname="Tittos restaurant"
            dish="biryani"
            rating="4.4 Stars"
            avgtime="35 Min"
          /> */}

        {/* Bad practice */}
        {/* <ResCard resdata = { resList[0] }/>
          <ResCard resdata = { resList[1] }/>
          <ResCard resdata = { resList[2] }/>
          <ResCard resdata = { resList[3] }/>
          <ResCard resdata = { resList[4] }/>
          <ResCard resdata = { resList[5] }/> */}

        {/* much better way */}
        {/* using index as a key is ait-pattern (badPractice) always uiquie id */}

        {filterRes.map((restuarant) => (
          <Link
            key={restuarant.info.id}
            to={"/restaurant/" + restuarant.info.id}
          >
            <ResCard resdata={restuarant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
