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
import { NavLink } from "react-router-dom";
import "./ComponentStyling.css";

function Sidebar(props) {
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
      name: "About Wollet",
      icon: <FaChartLine />,
    },
  ];
  return (
    <div className="container">
      <div className="sidebar">
        <div className="top_section">
          <Link to="/">
            <h1 className="logo" style={{ color: "#fff" }}>
              WOLLET
            </h1>
          </Link>
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
        {props.userToken ? (
          <LogoutButton logout={props.setUserToken} />
        ) : (
          <p></p>
        )}
      </div>
      <main>{props.children}</main>
    </div>
  );
}

function LogoutButton(props) {
  return (
    <div
      style={{
        justifyContent: "center",
        padding: "10px 5px",
        borderColor: "fff",
        borderStyle: "solid",
        borderWidth: 1,
        textAlign: "center",
        borderRadius: 15,
        width: "50%",
        margin: "15px auto",
      }}
      onClick={() => {
        props.logout();
      }}
    >
      Logout
    </div>
  );
}

export default Sidebar;
