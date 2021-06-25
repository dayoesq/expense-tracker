import classes from './ExpenseForm.module.scss';

const ExpenseForm: React.FC = () => {
  return (
    <form>
      <div className={classes.newExpense__controls}>
        <div className={classes.newExpense__control}>
          <label htmlFor="title">Title</label>
          <input type="text" />
        </div>
        <div className={classes.newExpense__control}>
          <label htmlFor="amount">Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className={classes.newExpense__control}>
          <label htmlFor="date">Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" />
        </div>
      </div>
      <div className={classes.newExpense__actions}>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
