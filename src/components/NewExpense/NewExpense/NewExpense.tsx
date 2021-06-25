import ExpenseForm from '../ExpenseForm/ExpenseForm';
import classes from './NewExpense.module.scss';

const NewExpense: React.FC = () => {
  return (
    <div className={classes.newExpense}>
      <ExpenseForm />
    </div>
  );
};

export default NewExpense;
