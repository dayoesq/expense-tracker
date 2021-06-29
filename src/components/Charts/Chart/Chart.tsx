import ChartBar from '../ChartBar/ChartBar';

import classes from './Chart.module.scss';

type DataPoint = {
  dataPoints: IDataPoint[];
};

const Chart: React.FC<DataPoint> = props => {
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className={classes.chart}>
      {props.dataPoints.map(dataPoint => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />))}
    </div>
  );
};

export default Chart;
