import React from "react";
import css from "./Hrecomend.module.css";
import Header from "../posts/post/header/Header";

function Hrecomend(props) {
  return (
    <div className={css.recomendation}>
      <div className={css.div}>
        <img
          src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTldpQXR6DZk8jQ9UAXoAvLP0lGoEMjGXu1iLGH0OBf16lIVb0h"
          alt=""
        />
        <p>Da Winci228</p>
        <a href="">Переключиться</a>
      </div>
      <div className={css.div1}>
        <p>Рекомендации для вас</p>
        <a href="">Все</a>
      </div>
    </div>
  );
}

export default Hrecomend;
