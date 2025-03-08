const ResCard = (prop) => {
  const { resdata } = prop;
  const { cloudinaryImageId, name, avgRating, cuisines, sla} = resdata?.info;
  // OBJ destrcturing
  // const {restoname, dish, rating, avgtime} = prop;

  return (
    <div className="rescard">
      <img className="itemImage" src= {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}/>
      <h3 style={{ textAlign: "center" }}>{name}</h3>
      <h4>
        {avgRating} <br></br>
        {cuisines}
        <br /> {sla.deliveryTime} Min{" "}
      </h4>
    </div>
  );
};

export default ResCard;