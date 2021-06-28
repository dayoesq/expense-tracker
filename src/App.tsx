import { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense/NewExpense';


const App: React.FC = (): JSX.Element => {
 
  const [expenses, setExpenses] = useState<IExpense[]>([])

  const addExpenseHandler = (expenseData: IExpense) => {
    setExpenses((prevExpense) => {
      return [expenseData, ...prevExpense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
};

export default App;
