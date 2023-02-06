import React from "react";
import Header from "./header/Header";
import css from "./Post.module.css";

function Post() {
  return (
    <div className={css.wrapper}>
      <Header />
      <div className={css.image}>
        <img src="messiandron.webp" alt="" />
      </div>
      {/* Наши кнопки по типу лайка */}
      <div className={css.buttons}>
        <div className={css.icons}>
          <img src="like.png" alt="" />
          <img src="comment.png" alt="" />
          <img src="teleg.png" alt="" />
        </div>
        <div className={css.icon}>
          <img src="downl.png" alt="" />
        </div>
      </div>
      {/*Конец наших элементов кнопки*/}
      <p>32 123 123 отметок "Нравится"</p>
      <div className={css.text}>
        <p>
          <strong>leomessi</strong>
          <img src="transparent.png" alt="" />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          distinctio dolore, accusamus quis animi, culpa rem, modi tempora quam
          alias officia. Ea, in! Aliquam mollitia, sint provident ratione earum
          ullam?
        </p>
      </div>
    </div>
  );
}

export default Post;
