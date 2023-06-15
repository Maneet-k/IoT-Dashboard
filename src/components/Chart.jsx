import { Line } from 'react-chartjs-2'
import { useRef } from 'react';
import 'chart.js/auto';

function Chart(props) {
  const ref = useRef();
  return (
      {chartType === 'bar' && <BarChart data={props.data} />}
      {chartType === 'line' && <LineChart data={props.data} />}
      {chartType === 'pie' && <PieChart data={props.data} />}
      <Line ref={ref} data= {props.data}/>
  );
}
export default Chart;