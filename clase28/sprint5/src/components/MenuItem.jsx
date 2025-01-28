import React from "react";

const MenuItem = ({ item }) => {
  return (
    <article className="menu-item">
      <img src={item.img} className="photo" onClick={() => alert(item.title)} />
      <div className="item-info">
        <header>
          <h4>{item.title}</h4>
          <h4 className="price">{item.price}</h4>
        </header>
        <p className="item-text">{item.desc}</p>
      </div>
    </article>
  );
};

export default MenuItem;
