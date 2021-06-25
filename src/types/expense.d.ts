interface IExpense {
  id?: string;
  title?: string;
  amount?: number;
  date?: Date;
}

type Expenses = {
  expenses: IExpense[];
};