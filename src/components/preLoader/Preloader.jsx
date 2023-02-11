import React from "react";
import css from "./Preloader.module.css";
function Preloader() {
  return (
    <div className={css.wrapper}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
        alt="Loader"
      />
    </div>
  );
}

export default Preloader;
