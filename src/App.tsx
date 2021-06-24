import React from 'react';

import ExpenseItem from './components/ExpenseItem/ExpenseItem';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <ExpenseItem />
    </div>
  );
};

export default App;
