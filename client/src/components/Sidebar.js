import { Link } from "react-router-dom";
import {
  FaBook,
  FaChartLine,
  FaIcons,
  FaMoneyCheckAlt,
  FaRegChartBar,
  FaBars,
} from "react-icons/fa";
import React, { useState } from "react";
import "./App.css";
import { NavLink } from "react-router-dom";

function Sidebar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/Dashboard",
      name: "Dashboard",
      icon: <FaBook />,
    },
    {
      path: "/FinanceChart",
      name: "Finance Chart",
      icon: <FaRegChartBar />,
    },
    {
      path: "/RecentTransactions",
      name: "Recent Transactions",
      icon: <FaMoneyCheckAlt />,
    },
    {
      path: "/About",
      name: "About",
      icon: <FaChartLine />,
    },
  ];
  return (
    <div className="container">
      <div className="sidebar">
        <div className="top_section">
          <h1 className="logo">WOLLET</h1>
          <div className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeClassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div className="link_text">{item.name}</div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
}

export default Sidebar;
