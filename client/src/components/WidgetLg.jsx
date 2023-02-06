import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Category</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgCategory">Shopping</td>
          <td className="widgetLgAmount">£122.90</td>
          <td className="widgetLgDate">2 Sep 2022</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgCategory">Travel</td>
          <td className="widgetLgAmount">£1022.90</td>
          <td className="widgetLgDate">4 Jul 2022</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgCategory">Emergency Funds</td>
          <td className="widgetLgAmount">£22.90</td>
          <td className="widgetLgDate">2 Sep 2022</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgCategory">Car Finance</td>
          <td className="widgetLgAmount">£522.90</td>
          <td className="widgetLgDate">2 Sep 2022</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgCategory">Food and Groceries</td>
          <td className="widgetLgAmount">£30.90</td>
          <td className="widgetLgDate">2 Sep 2022</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
      </table>
    </div>
  );
}
