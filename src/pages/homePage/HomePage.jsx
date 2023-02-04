import React from "react";
import SideBar from "../../components/sideBar/SideBar";
import csstyles from "./HomePage.module.css";
import ScrollInfo from "../../scrollInfo/ScrollInfo";

function HomePage() {
  return (
    <div className="pageContainer">
      <SideBar />
      <ScrollInfo />
    </div>
  );
}

export default HomePage;
