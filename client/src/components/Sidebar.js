import { Link } from "react-router-dom";
import {
  FaBook,
  FaChartLine,
  FaMoneyCheckAlt,
  FaRegChartBar,
  FaBars,
  FaFileAlt,
  FaRegUser,
} from "react-icons/fa";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./ComponentStyling.css";
import { useNavigate } from "react-router-dom";

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
      icon: <FaFileAlt />,
    },
    // {
    //   path: "/Login",
    //   name: "Login",
    //   icon: <FaRegUser />,
    // },
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
          <LoginButton login={props.setUserToken} />
        )}
      </div>
      <main>{props.children}</main>
    </div>
  );
}

function LogoutButton(props) {
  const navigate = useNavigate();

  return (
    <div
      style={{
        justifyContent: "center",
        padding: "10px 5px",
        borderColor: "fff",
        borderStyle: "solid",
        borderWidth: 2,
        textAlign: "center",
        borderRadius: 15,
        width: "50%",
        margin: "15px auto",
      }}
      onClick={() => {
        props.logout(false);
        navigate("/");
      }}
    >
      Logout
    </div>
  );
}

function LoginButton(props) {
  const navigate = useNavigate();

  return (
    <div
      style={{
        justifyContent: "center",
        padding: "10px 5px",
        borderColor: "fff",
        borderStyle: "solid",
        borderWidth: 2,
        textAlign: "center",
        borderRadius: 15,
        width: "50%",
        margin: "15px auto",
      }}
      onClick={() => {
        // props.login(true);
        navigate("/Login");
      }}
    >
      Login
    </div>
  );
}

export default Sidebar;
