import "./Chart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Chart() {
  const data = [
    {
      Month: "Jan",
      Amount: 0,
      Spending: 4000,
    },
    {
      Month: "Feb",
      Amount: 100,
      Spending: 3000,
    },
    {
      Month: "Mar",
      Amount: 500,
      Spending: 2000,
    },
    {
      Month: "Apr",
      Amount: 1000,
      Spending: 2780,
    },
    {
      Month: "May",
      Amount: 3000,
      Spending: 1890,
    },
    {
      Month: "Jun",
      Amount: 5000,
      Spending: 2390,
    },
    {
      Month: "Jul",
      Amount: 6000,
      Spending: 9490,
    },
    {
      Month: "Aug",
      Amount: 8000,
      Spending: 6490,
    },
    {
      Month: "Sep",
      Amount: 10000,
      Spending: 7490,
    },
    {
      Month: "Oct",
      Amount: 12000,
      Spending: 9490,
    },
    {
      Month: "Nov",
      Amount: 13000,
      Spending: 5490,
    },
    {
      Month: "Dec",
      Amount: 15000,
      Spending: 1490,
    },
  ];

  return (
    <div className="chart">
      <h3 className="chartTitle">Monthly Expenditure</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="Month" stroke="#095647" />
          <YAxis dataKey="Amount" stroke="#095647" />
          <Line type="monotone" dataKey="Spending" stroke="#095647" />
          <Tooltip />
          <CartesianGrid stroke="#e0dfef" strokeDasharray="5 5" />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
