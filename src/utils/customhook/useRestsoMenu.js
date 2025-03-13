import { use, useEffect, useState } from "react";
import { menuApiUrl } from "../constants";

const useRestsoMenu = (resId) => {
  const [resInfo, setresInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const Data = await fetch(menuApiUrl + resId);
    const Json = await Data.json();
    setresInfo(Json.data);
  };

  return resInfo;
};

export default useRestsoMenu;
