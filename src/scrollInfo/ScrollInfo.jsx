import React from "react";
import css from "../scrollInfo/ScrollInfo.module.css";
function ScrollInfo() {
  return (
    <div className="postsContainer">
      <div className="lines">
        <div className="line1">
          <img src="messi.jpg" alt="" />
          <p>leomessi</p>
          <div className="transparent">
            <img src="transparent.png" alt="" />
          </div>
        </div>
        <div className="line2">
          <img src="menu-2.png" alt="" />
        </div>
      </div>
      <img src="messiandron.webp" alt="" />
      <div className="lines2">
        <div className="lin1">
          <img src="like.png" alt="" />
          <img src="comment.png" alt="" />
          <img src="teleg.png" alt="" />
        </div>
        <div className="lin2">
          <img src="downl.png" alt="" />
        </div>
      </div>
      <p>12 123 123 отметок "Нравится"</p>
      <div className="text">
        <p>
          <b>leomessi</b>
          La Victoria está en la Mente. Una larga tradición artesanal
          construyendo baúles fotografiada por @annieleibovitz para
          @louisvuitton.
        </p>
      </div>
    </div>
  );
}
export default ScrollInfo;
