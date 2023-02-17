import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <>
      <Helmet>
        <title>Menu</title>
      </Helmet>
      <Link to="/" className="link__home">
        <FiArrowLeft size={30} className="icon-home" />
        <p className="text-home">Back to Home</p>
      </Link>
      <main>
        <section className="menu section">
          <div className="title__menu">
            <h2>our menu</h2>
            <div className="underline__menu"></div>
          </div>
          <Categories categories={categories} filterItems={filterItems} />
          <Menu items={menuItems} />
        </section>
      </main>
    </>
  );
}

export default App;
