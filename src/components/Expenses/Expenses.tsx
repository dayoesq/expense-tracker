import { useState } from 'react';
import Card from '../UI/Card/Card';
import ExpensesChart from './ExpensesChart/ExpensesChart';
import ExpensesFilter from './ExpensesFilter/ExpensesFilter';
import ExpensesList from '../ExpensesList/ExpensesList';

import classes from './Expenses.module.scss';

const Expenses: React.FC<Expenses> = props => {
  const [selectedYear, setSelectedYear] = useState<string>('');

  const filterChangeHandler = (selectedYear: string) => {
    setSelectedYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === selectedYear;
  });
  

  if (props.expenses) {
    return (
      <Card className={classes.expenses}>
        <ExpensesFilter selected={selectedYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList expenses={filteredExpenses}/>
      </Card>
    );
  }
  return null;
};

export default Expenses;
