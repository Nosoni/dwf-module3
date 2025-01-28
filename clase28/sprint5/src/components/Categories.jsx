import React from "react";

const Categories = ({ allCategories, actualizarMenu }) => {
  const handleOnClick = (category) => {
    actualizarMenu(category);
  };

  return (
    <div className="btn-container">
      {allCategories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            onClick={() => handleOnClick(category)}
            key={index}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
