import React from "react";
import Header from "./header/Header";
import css from "./Post.module.css";

function Post(props) {
  return (
    <div className={css.wrapper}>
      <Header {...props} />
      <div className={css.image}>
        <img src={props.image} alt="" />
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
      <p>{props.like} отметок "Нравится"</p>
      <div className={css.text}>
        <p>
          <strong>{props.author}</strong>
          <img src="transparent.png" alt="" />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          distinctio dolore, accusamus quis animi, culpa rem, modi tempora quam
          alias officia. Ea, in! Aliquam mollitia, sint provident ratione earum
          ullam?
        </p>
      </div>
      <p className={css.comments}>
        Посмотреть все комментарии ({props.commentCount})
      </p>
      <p className={css.comments}>Добавить комментарии...</p>
      <hr />
    </div>
  );
}

export default Post;
