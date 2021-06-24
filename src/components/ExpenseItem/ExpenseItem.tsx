import React from 'react';

import classes from './ExpenseItem.module.scss';

const ExpenseItem: React.FC = () => {
  return (
    <div className={classes.expenseItem}>
      <div>March 20th 2021</div>
      <div className={classes.description}>
        <h2>Car Insurance</h2>
        <div className={classes.price}>$300.99</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
