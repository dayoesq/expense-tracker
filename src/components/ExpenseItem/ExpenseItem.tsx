import React from 'react';
import ExpenseDate from '../ExpenseDate/ExpenseDate';

import classes from './ExpenseItem.module.scss';


const ExpenseItem: React.FC<IExpense> = props => {

  return (
    <div className={classes.expenseItem}>
      <ExpenseDate date={props.date}/>
      <div className={classes.description}>
        <h2>{props.title}</h2>
        <div className={classes.price}>{`$${props.amount}`}</div>
      </div>
    </div>
  );

};

export default ExpenseItem;
