import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense/NewExpense';


const App: React.FC = () => {
  const expenses = [
    { id: 1, date: new Date(2021, 6, 25), title: 'Car Insurance', amount: 199.00 },
    { id: 2, date: new Date(2021, 10, 30), title: 'School fees', amount: 250.00 },
    { id: 3, date: new Date(2020, 1, 14), title: 'Car loan', amount: 230.00 },
    { id: 4, date: new Date(1920, 3, 17), title: 'Rent', amount: 600.00 },
    { id: 5, date: new Date(2008, 8, 25), title: 'Recreation', amount: 100.00 },
  ];

  return (
    <div>
      <NewExpense />
      <Expenses expenses={expenses}/>
    </div>
  );
};

export default App;
