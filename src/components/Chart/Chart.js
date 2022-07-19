import "./Chart.css"
import ChartBar from "./ChartBar"

const Chart = (props) => {

const totalMaxValue = Math.max(...(props.dataPoints.map(dataPoint => dataPoint.value)))

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar 
        key={dataPoint.label}
        label={dataPoint.label}
        maxValue={totalMaxValue}
        value={dataPoint.value} 
        />
      ))}
    </div>
  )
}

export default Chart
