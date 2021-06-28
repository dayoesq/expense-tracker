import classes from './ExpensesList.module.scss';

import ExpenseItem from '../Expenses/ExpenseItem/ExpenseItem';

const ExpensesList: React.FC<Expenses> = props => {
  if (props.expenses.length === 0) {
    return <h2 className={classes.expensesList__fallback}>
      Found no items
    </h2>
  }

  return (
    <ul className={classes.expensesList}>
      {props.expenses.map(expense => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />))}
    </ul>
  );
};

export default ExpensesList;
