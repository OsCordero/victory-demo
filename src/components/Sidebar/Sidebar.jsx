import React from "react";
import items from "../../lang/sidebarItems";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul className="side-nav">
        {items.map((item) => (
          <li className="side-nav__item" key={item.text}>
            <a href="#" className="side-nav__link">
              <span>{item.text}</span>
            </a>
          </li>
        ))}
      </ul>
      <div className="legal">&copy; 2020 by ParceroWeb Team. All rights reserved.</div>
    </nav>
  );
};

export default Sidebar;
