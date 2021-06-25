import Card from '../../UI/Card/Card';
import ExpenseDate from '../ExpenseDate/ExpenseDate';

import classes from './ExpenseItem.module.scss';


const ExpenseItem: React.FC<IExpense> = props => {
  return (
    <Card className={classes.expenseItem}>
      <ExpenseDate date={props.date}/>
      <div className={classes.description}>
        <h2>{props.title}</h2>
        <div className={classes.price}>{`$${props.amount}`}</div>
      </div>
    </Card>
  );

};

export default ExpenseItem;
