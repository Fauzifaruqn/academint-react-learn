// import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 297.89,
      date: new Date(2022, 9, 28),
    },
    {
      id: "e2",
      title: "Toilet Paper",
      amount: 67.89,
      date: new Date(2022, 3, 14),
    },
    {
      id: "e3",
      title: "New Desk (Woodeen)",
      amount: 400,
      date: new Date(2022, 9, 28),
    },
    {
      id: "e4",
      title: "New TV",
      amount: 895.32,
      date: new Date(2021, 12, 28),
    },
  ];
  return (
    <div className="App">
      <NewExpense />
      <Expenses expenses={expenses} />
    </div>
  );

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's Get Started"),
  //   React.createElement(Expenses, { item: expenses })
  // );
};

export default App;
