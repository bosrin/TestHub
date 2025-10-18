import React from "react";
import { data } from "../restApi.json";

const Menu = () => {
  return (
    <section className="menu" id="menu">
      <div className="container">
        {/* Heading Section */}
        <div className="heading_section">
          <h1 className="heading">POPULAR DISHES</h1>
          <p>
            Explore our most popular dishes, crafted with fresh ingredients
            and exceptional flavors to delight your taste buds.
          </p>
        </div>

        {/* Dishes List */}
        <div className="dishes_container">
          {data[0].dishes.map((element) => (
            <div className="card" key={element.id}>
              <img src={element.image} alt={element.title} />
              <h3>{element.title}</h3>
              <button>{element.category}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
