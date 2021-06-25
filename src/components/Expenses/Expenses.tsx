import React from 'react';
import Card from '../Card/Card';
import ExpenseItem from '../ExpenseItem/ExpenseItem';

import classes from './Expenses.module.scss';

const Expenses: React.FC<Expenses> = props => {
  if (props.expenses) {
    return (
      <Card className={classes.expenses}>
        {props.expenses.map(expense => (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          />
        ))}
      </Card>
    );
  }
  return null;
};

export default Expenses;
