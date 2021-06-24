interface IExpense {
  id?: number;
  date?: Date;
  decription?: string;
  title?: string;
  amount?: number;
}

type Expenses = {
  expenses: IExpense[];
};