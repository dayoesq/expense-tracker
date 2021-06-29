import { useState } from 'react';
import classes from './ExpenseForm.module.scss';

type ExpenseProps = {
  onSaveNewExpense: (data: IExpense) => void;
  onCancel: React.MouseEventHandler<HTMLButtonElement>;
};

const ExpenseForm: React.FC<ExpenseProps> = props => {
  const [formState, setFormState] = useState<IExpense
    >({
    id: '',
    title: '',
    amount: 0.00,
    date: ''
    });
  
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    props.onSaveNewExpense(formState);
    setFormState({
      id: '',
      title: '',
      amount: 0.00,
      date: ''
    });
  };

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => {
      return {
        ...prevState,
        [name]: (name === 'date') ? new Date(value) : ((name === 'amount') ? parseFloat(value) : value)  
      }
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.newExpense__controls}>
        <div className={classes.newExpense__control}>
          <label htmlFor="title">Title</label>
          <input type="text" onChange={inputChangeHandler} value={formState.title} name="title" id="title"/>
        </div>
        <div className={classes.newExpense__control}>
          <label htmlFor="amount">Amount</label>
          <input type="number" min="0.01" step="0.01" value={formState.amount} onChange={inputChangeHandler} name="amount" id="amount"/>
        </div>
        <div className={classes.newExpense__control}>
          <label htmlFor="date">Date</label>
          <input type="date" min="2008-01-01" max="2021-12-31" value={formState.date} onChange={inputChangeHandler} name="date" id="date"/>
        </div>
      </div>
      <div className={classes.newExpense__actions}>
        <button type="submit" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
