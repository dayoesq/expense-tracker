import { useState } from 'react';
import classes from './ExpenseForm.module.scss';

export interface FormInputs {
  id?: string
  title?: string;
  amount?: string;
  date?: string;
}

type ExpenseProps = {
  onSaveNewExpense: (data: FormInputs) => {};
};

const ExpenseForm: React.FC<ExpenseProps> = props => {
  const [formState, setFormState] = useState<FormInputs
  >({
    id: '',
    title: '',
    amount: '',
    date: ''
  });
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    props.onSaveNewExpense(formState);
    setFormState((prevState) => {
      return {
        ...prevState,
        title: '',
        amount: '',
        date: ''
      };
    });
  };

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value
      }
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.newExpense__controls}>
        <div className={classes.newExpense__control}>
          <label htmlFor="title">Title</label>
          <input type="text" onChange={inputChangeHandler} value={formState.title} name="title" />
        </div>
        <div className={classes.newExpense__control}>
          <label htmlFor="amount">Amount</label>
          <input type="number" min="0.01" step="0.01" value={formState.amount} onChange={inputChangeHandler} name="amount" />
        </div>
        <div className={classes.newExpense__control}>
          <label htmlFor="date">Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" value={formState.date} onChange={inputChangeHandler} name="date" />
        </div>
      </div>
      <div className={classes.newExpense__actions}>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
