import Card from '../../UI/Card/Card';
import ExpenseDate from '../ExpenseDate/ExpenseDate';

import classes from './ExpenseItem.module.scss';


const ExpenseItem: React.FC<IExpense> = props => {
  return (
    <li>
      <Card className={classes.expenseItem}>
        <ExpenseDate date={props.date} />
        <div className={classes.title}>
          <h2>{props.title}</h2>
          <div className={classes.price}>{`$${props.amount}`}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
