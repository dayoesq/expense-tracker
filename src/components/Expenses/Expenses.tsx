import { useState } from 'react';
import Card from '../UI/Card/Card';
import ExpenseItem from './ExpenseItem/ExpenseItem';
import ExpensesFilter from './ExpensesFilter/ExpensesFilter';

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
        {filteredExpenses.length === 0 && <p style={{color: 'white'}}>No Expenses found</p>}
        {filteredExpenses.length > 0 && filteredExpenses.map(expense => ( 
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount} />))}
      </Card>
    );
  }
  return null;
};

export default Expenses;
