import React, { useEffect, useState } from "react";
import SideBar from "../../components/sideBar/SideBar";
import css from "./HomePage.module.css";
import Stories from "./stories/Stories";
import Hrecomend from "./hrecomends/Hrecomend";
import Posts from "../homePage/posts/Posts";
import Preloader from "../../components/preLoader/Preloader";

function HomePage() {
  // const [isLoading, setLoading] = useState(true);
  // if (isLoading) return <Preloader />;
  return (
    <div className="pageContainer">
      <SideBar />
      <div className={css.content}>
        <div className={css.innerContent}>
          <Stories />
          <Posts />
        </div>
        <Hrecomend />
      </div>
    </div>
  );
}

export default HomePage;
