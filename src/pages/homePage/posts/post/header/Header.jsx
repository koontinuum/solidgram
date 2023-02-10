import React from "react";
import css from "./Header.module.css";

function Header(props) {
  return (
    <div className={css.header}>
      <div className={css.hleft}>
        <img src={props.avatar} alt="" />
        <strong>{props.author}</strong>
        <img className={css.galochka} src="transparent.png" alt="" />
        <p>• 2 ч.</p>
      </div>
      <div className={css.div}></div>
      <div className={css.hright}>
        <img src="menu-2.png" alt="" />
      </div>
    </div>
  );
}

export default Header;
