import React from 'react';

import ExpenseItem from './components/ExpenseItem/ExpenseItem';
import './App.css';

const App: React.FC = () => {
  const expenses = [
    { id: 1, date: new Date(2021, 6, 25), title: 'Car Insurance', amount: 200.00 },
    { id: 2, date: new Date(2021, 10, 30), title: 'School fees', amount: 200.00 },
    { id: 3, date: new Date(2020, 1, 14), title: 'Car loan', amount: 200.00 },
    { id: 4, date: new Date(1920, 3, 17), title: 'Rent', amount: 200.00 },
    { id: 5, date: new Date(2008, 8, 25), title: 'Miscel', amount: 200.00 },
  ];

  return (
    <div className="App">
      {expenses.map(expense => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </div>
  );
};

export default App;
