import React from "react";
// import img1 from "../images/Image1.png"
// import Cards from "./Cards";
import Monthly from "../MonthlyPackage/Monthly";
import Reviews from "./Reviews";
import RegularItems from "../RegularItems/RegularItems";
import Banner from "./Banner";
import ContainerBox from "./ContainerBox";

const Home = () => {
  return (
    <div className="">
      <div>
        <Banner></Banner>
        <Monthly></Monthly>
        <ContainerBox></ContainerBox>
        <Reviews></Reviews>
        <RegularItems></RegularItems>
      </div>
    </div>
  );
};

export default Home;
