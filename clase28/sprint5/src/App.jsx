import { useState } from "react";
import "./App.css";
import Categories from "./components/Categories";
import MenuItem from "./components/MenuItem";
import items from "./data/menu";

function App() {
  const [menuFiltered, setMenuFiltered] = useState(items);
  const allCategories = ["all", ...new Set(items.map((item) => item.category))];

  const actualizarMenu = (category) => {
    if (category === "all") {
      setMenuFiltered(items);
      return;
    }

    setMenuFiltered(items.filter((menuItem) => menuItem.category === category));
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories
          allCategories={allCategories}
          actualizarMenu={actualizarMenu}
        />
        <div className="section-center">
          {menuFiltered.map((item, index) => {
            return <MenuItem item={item} key={index} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
