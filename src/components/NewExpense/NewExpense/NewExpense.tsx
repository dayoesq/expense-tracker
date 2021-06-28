import ExpenseForm from '../ExpenseForm/ExpenseForm';
import classes from './NewExpense.module.scss';

type NewExpenseProps = {
  onAddExpense: (data: IExpense) => void;
};

const NewExpense: React.FC<NewExpenseProps> = props => {
  const newExpenseHandler = (enteredExpense: IExpense) => {
    const expenseData = {
      ...enteredExpense,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className={classes.newExpense}>
      <ExpenseForm onSaveNewExpense={newExpenseHandler}/>
    </div>
  );
};

export default NewExpense;
