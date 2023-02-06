import React from "react";
import SideBar from "../../components/sideBar/SideBar";
import css from "./HomePage.module.css";
import Stories from "./stories/Stories";
import Hrecomend from "./hrecomends/Hrecomend";
import Posts from "../homePage/posts/Posts";

function HomePage() {
  return (
    <div className="pageContainer">
      <SideBar />
      <div className={css.content}>
        <div className={css.innerContent}>
          <Stories />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
        </div>
        <Hrecomend />
      </div>
    </div>
  );
}

export default HomePage;
