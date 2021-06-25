import ExpenseForm, { FormInputs } from '../ExpenseForm/ExpenseForm';
import classes from './NewExpense.module.scss';

type NewExpenseProps = {
  onAddExpense: (data: FormInputs) => {};
}

const NewExpense: React.FC<NewExpenseProps> = props => {
  const newExpenseHandler = (enteredExpense: FormInputs) => {
    const expenseData = {
      ...enteredExpense,
      id: Math.random().toString()
    }
    // console.log(expenseData);
    props.onAddExpense(expenseData);
    return expenseData;
  };
  return (
    <div className={classes.newExpense}>
      <ExpenseForm onSaveNewExpense={newExpenseHandler}/>
    </div>
  );
};

export default NewExpense;
