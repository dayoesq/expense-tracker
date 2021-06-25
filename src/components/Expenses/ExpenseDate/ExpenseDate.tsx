import classes from './ExpenseDate.module.scss';

type ExpenseDateProps = {
  date?: Date;
};

const ExpenseDate: React.FC<ExpenseDateProps> = props => {
  const day = props.date ? props.date.toLocaleString('en-US', { day: '2-digit' }) : '';
  const month = props.date ? props.date.toLocaleString('en-FI', { month: 'long' }) : '';
  const year = props.date ? props.date.getFullYear() : '';
  if (props.date) {
    return (
      <div className={classes.expenseDate}>
        <div>{day}</div>
        <div>{month}</div>
        <div>{year}</div>
      </div>
    );
  } else {
    return null;
  }
};

export default ExpenseDate;
