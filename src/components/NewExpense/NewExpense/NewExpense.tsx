import { useState } from 'react';
import ExpenseForm from '../ExpenseForm/ExpenseForm';
import classes from './NewExpense.module.scss';

type NewExpenseProps = {
  onAddExpense: (data: IExpense) => void;
};

const NewExpense: React.FC<NewExpenseProps> = props => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const newExpenseHandler = (enteredExpense: IExpense) => {
    const expenseData = {
      ...enteredExpense,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const cancelEditingHandler = () => {
    setIsEditing(false);
  };
  
  return (
    <div className={classes.newExpense}>
      {!isEditing && <button type="button" onClick={startEditingHandler}>Add Expense</button>}
      {isEditing && <ExpenseForm onSaveNewExpense={newExpenseHandler} onCancel={cancelEditingHandler}/>}
    </div>
  );
};

export default NewExpense;
