import "./ExpenseItem.css";
import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    // title = "Updated";
    setTitle("Updated");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate
        date={props.date}
        amount={props.amount}
        title={props.title}
      />

      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Titlte</button>
    </Card>
  );
};

export default ExpenseItem;