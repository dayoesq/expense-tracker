import classes from './ExpensesFilter.module.scss';

type ExpensesProps = {
  onChangeFilter: (data: string) => void;
  selected: string | number | readonly string[] | undefined;
};

const ExpensesFilter: React.FC<ExpensesProps> = props => {
  const dropDownHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    props.onChangeFilter(e.target.value);
  };
  return (
    <div className={classes.expensesFilter}>
      <div className={classes.expensesFilter__control}>
        <label>Filter by year</label>
        <select onChange={dropDownHandler} value={props.selected}>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
          <option value='2018'>2018</option>
          <option value='2017'>2017</option>
          <option value='2016'>2016</option>
          <option value='2015'>2015</option>
          <option value='2014'>2014</option>
          <option value='2013'>2013</option>
          <option value='2012'>2012</option>
          <option value='2011'>2011</option>
          <option value='2010'>2010</option>
          <option value='2009'>2009</option>
          <option value='2008'>2008</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
