import NotLoggedIn from "../components/NotLoggedIn";
import { useState, useEffect } from "react";
import { getOrders } from "../API";
import AddWalletButton from "../components/AddWalletButton";
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

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

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
        <DashboardChart />
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
        
          <AddWalletButton></AddWalletButton>
    </>
  );
}
 
function DashboardChart() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Statistics",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Incoming",
        data: labels.map(() => Math.random() * 1000),
        backgroundColor: "rgba(0, 168, 106, 0.5)",
      },
      {
        label: "Outgoing",
        data: labels.map(() => Math.random() * 1000),
        backgroundColor: "rgba(132, 156, 147, 0.5)",
      },
    ],
  };
  return (
    <Card style={{ width: 500, height: 350 }}>
      <Bar options={options} data={data} />
    </Card>
    
  );
}

export default Dashboard;
