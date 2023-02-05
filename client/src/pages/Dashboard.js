import NotLoggedIn from "../components/NotLoggedIn";
import { useState, useEffect } from "react";
import { getOrders } from "../API";
import {
  FaBook,
  FaBriefcaseMedical,
  FaCar,
  FaCoins,
  FaCommentDollar,
  FaPepperHot,
  FaPlaneDeparture,
  FaShoppingBasket,
} from "react-icons/fa";
import { Card, Space, Statistic, Table, Typography } from "antd";
import "../App.css";

function Dashboard(props) {
  return (
    <div>
      {!props.userToken ? (
        <NotLoggedIn />
      ) : (
        <DashboardDisplay
          userDetails={props.userDetails}
          setUserDetails={props.setUserDetails}
        />
      )}
    </div>
  );
}

function DashboardDisplay(props) {
  return (
    <div>
      <h1
        style={{
          color: "#095647",
          fontSize: "35px",
          marginBottom: "10px",
        }}
      >
        Dashboard
      </h1>
      <div>
        Welcome to the Wollet Dashboard!<br></br>
        <p>
          {" "}
          Your one-stop shop for tracking, managing, and budgeting your money.
        </p>
        <p>
          Here, you can view your personalised 'pots' and see how much you have
          saved for each goal. Our app generates financial accountability
          reports so you can see your progress over time. Create new 'pots' to
          save for specific goals or edit existing ones. Keep track of your
          spending by setting spending limits and receiving custom notifications
          when you reach them. Want to set up a daily, weekly, or monthly report
          summarising your 'pots'? Simply click on the "Reports" button in the
          top right corner.
        </p>
        <p>
          Don't forget to check out our personalised profile section, where you
          can set your saving goals and budgeting plans.
        </p>
      </div>
      <div className="potDiv">
        <div className="mainPot">
          <h2>
            <FaCommentDollar /> Hi, {props.userDetails.username}!
          </h2>
          <p className="balance">£{props.userDetails.balance}</p>
        </div>
      </div>
      <Space direction="horizontal">
        <DashboardCard
          icon={
            <FaShoppingBasket
              style={{
                color: "black",
                backgroundColor: "rgba(0,255,0,0.25",
                borderRadius: 12,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Shopping"}
          value={4345}
        />
        <DashboardCard
          icon={
            <FaBriefcaseMedical
              style={{
                color: "black",
                backgroundColor: "rgba(0,55,0,0.25",
                borderRadius: 12,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Emergency Funds"}
          value={2174}
        />
        <DashboardCard
          icon={
            <FaPlaneDeparture
              style={{
                color: "black",
                backgroundColor: "rgba(252,186,3,0.25",
                borderRadius: 12,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Travel Plan"}
          value={1345}
        />
        <DashboardCard
          icon={
            <FaBook
              style={{
                color: "black",
                backgroundColor: "rgba(183,112,250,0.25",
                borderRadius: 12,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Education"}
          value={5545}
        />
        <DashboardCard
          icon={
            <FaPepperHot
              style={{
                color: "black",
                backgroundColor: "rgba(151,191,222,0.25",
                borderRadius: 12,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Foods and Groceries"}
          value={3375}
        />
        <DashboardCard
          icon={
            <FaCar
              style={{
                color: "black",
                backgroundColor: "rgba(222,192,151,0.25",
                borderRadius: 12,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Car Finance"}
          value={12345}
        />
        <DashboardCard
          icon={
            <FaCoins
              style={{
                color: "black",
                backgroundColor: "rgba(222,151,157,0.25",
                borderRadius: 12,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Donation"}
          value={12345}
        />
      </Space>
      <Space>
        <RecentOrders />
      </Space>
    </div>
  );
}

function DashboardCard({ title, value, icon }) {
  return (
    <Card>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}

function RecentOrders() {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Typography.Text
        style={{
          color: "#095647",
          fontSize: "25px",
          fontWeight: "Bold",
          margin: "10px",
        }}
      >
        Recent Transactions
      </Typography.Text>
      <Table
        columns={[
          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Date",
            dataIndex: "quantity",
          },
          {
            title: "Price",
            dataIndex: "discountedPrice",
          },
        ]}
        loading={loading}
        dataSource={dataSource}
      ></Table>
    </>
  );
}

export default Dashboard;
