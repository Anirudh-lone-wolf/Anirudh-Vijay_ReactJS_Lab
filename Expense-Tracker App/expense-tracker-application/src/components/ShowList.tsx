import { useEffect, useState } from "react";
import IDataList from "../model/IDataList";
import { getDataFromServer } from "../services/menu";
import ExpenseTracker from "./ExpenseTracker";

const ShowList = () => {
  // State variables for managing data and UI state
  const [items, setItems] = useState<IDataList[]>([]);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [total, setTotal] = useState<number | null>();
  const [error, setError] = useState<Error | null>(null);
  const [rahulTotal, setRahulTotal] = useState<number>(0);
  const [rameshTotal, setRameshTotal] = useState<number>(0);

  // Variables to track individual amounts spent by Rahul and Ramesh
  var expenseByRahul = 0;
  var expenseByRamesh = 0;

  // useEffect to fetch data from the server and update state
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const data = await getDataFromServer();
        setItems(data);
        // Calculate the total sum of prices
        setTotal(
          data.reduce((result, value) => (result = result + value.price), 0)
        );
        // Calculate individual expenditures for Rahul and Ramesh
        individualExpenses(data);
      } catch (error: any) {
        setError(error);
      }
    };
    fetchMenu();
  }, [showForm]);

  // Function to calculate individual expenditures for Rahul and Ramesh
  const individualExpenses = (data: IDataList[]) => {
    data.map((individualExpense) =>
      individualExpense.payeeName === "Rahul"
        ? (expenseByRahul = expenseByRahul + individualExpense.price)
        : (expenseByRamesh = expenseByRamesh + individualExpense.price)
    );
    setRahulTotal(expenseByRahul);
    setRameshTotal(expenseByRamesh);
  };

  const success = () => {
    setShowForm(false);
  };

  const cancel = () => {
    setShowForm(false);
  };

  return (
    <>
      <header id="page-header">Expense Tracker</header>
      <button id="Add-Button" onClick={() => setShowForm(true)}>
        Add
      </button>
      {showForm && (
        <div className="form">
          <ExpenseTracker onTrue={success} onClose={cancel}></ExpenseTracker>
        </div>
      )}
      <>
        <div className="use-inline date header-color">Date</div>
        <div className="use-inline header-color">Products Purchased</div>
        <div className="use-inline price header-color">Price</div>
        <div className="use-inline header-color">Payee</div>
      </>
      {items &&
        items.map((user, index) => (
          <div key={index}>
            <div className="use-inline date">{user.setDate}</div>
            <div className="use-inline">{user.product}</div>
            <div className="use-inline price">{user.price}</div>
            <div className="use-inline">{user.payeeName}</div>
          </div>
        ))}
      <hr />
      
      <div className="use-inline ">Total: </div>
      <span className="use-inline total">{total}</span> <br />
      <div className="use-inline ">Rahul paid: </div>
      <span className="use-inline total Rahul">{rahulTotal}</span> <br />
      <div className="use-inline ">Ramesh paid: </div>
      <span className="use-inline total Ramesh">{rameshTotal}</span> <br />
      <span className="use-inline payable">
        {rahulTotal > rameshTotal ? "Pay Rahul " : "Pay Ramesh"}
      </span>
      <span className="use-inline payable price">
        {Math.abs((rahulTotal - rameshTotal) / 2)}
      </span>
      {error && <> {error?.message} </>}
    </>
  );
};

export default ShowList;
