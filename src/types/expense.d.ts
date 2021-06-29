interface IExpense {
  id?: string;
  title: string;
  amount: number;
  date: Date<HTMLInputElement> | null;
}

type Expenses = {
  expenses: IExpense[];
};

interface IDataPoint {
  label: string;
  value: number
}