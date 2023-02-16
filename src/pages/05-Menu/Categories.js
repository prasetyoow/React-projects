import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container__menu">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn__menu"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
