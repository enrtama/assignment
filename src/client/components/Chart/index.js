// @flow

/**
* @file Chart component
* @author Enrique Tamames
* @module components/Chart
* @version 0.0.1
*/

import React from 'react'
import { LineChart, ComposedChart, AreaChart, PieChart, Pie, Area, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label } from 'recharts'
import { MAX_ELEMENTS, PARAMETERS, CHART_TYPE } from '../../constants'

type Vehicle = {
  time: number,
  energy: number,
  gps: [string,string],
  odo: number,
  speed: number,
  soc: number
}

type Props = {
  chartType: CHART_TYPE.LINE | CHART_TYPE.BAR | CHART_TYPE.AREA | CHART_TYPE.COMPOSED | CHART_TYPE.RADIAL | CHART_TYPE.PIE,
  parameters: [string,string,string],
  vehicle: Vehicle,
  title: string
}

type State = {
  dataChart: any
}

export default class Chart extends React.Component<Props,State> {

  state = {
    dataChart: []
  }

  /**
  * componentWillMount - description
  *
  * @return {type}  description
  */
  componentWillReceiveProps(nextProps: Props) {
    const vehicle: Vehicle = nextProps.vehicle
    const parameters: [string,string, string] = nextProps.parameters
    const dataChart: any = this.state.dataChart

    if (vehicle) {
      let newData = {}
      if (nextProps.chartType === CHART_TYPE.PIE) {
        newData = [{name: 'Battery usage', value: vehicle[parameters[0]]}, {name: 'Battery no usage', value: parseFloat((100 - vehicle[parameters[0]]).toFixed(2))}]
        return this.setState({dataChart: newData})
      }
      newData[parameters[0]] = parameters[0] === PARAMETERS.TIME ? vehicle.time : vehicle[parameters[0]]
      newData[parameters[1]] = vehicle[parameters[1]]
      parameters[2] !== PARAMETERS.NO_PARAM && (newData[parameters[2]] = vehicle[parameters[2]] || 0)
      this.setState({dataChart: [...dataChart, newData].slice(-MAX_ELEMENTS)})
    }
  }

  /**
   * toPercent - description
   *
   * @param  {type} decimal   description
   * @param  {type} fixed = 0 description
   * @return {type}           description
   */
  toPercent = (decimal: number, fixed: number = 0) => {
    return `${(decimal).toFixed(fixed)}%`;
  }

  /**
   * renderChart - description
   *
   * @return {type}  description
   */
  renderChart = () => {
    const { dataChart } = this.state
    const { chartType, parameters } = this.props
    const param0 = parameters[0] || ''
    const param1 = parameters[1] || ''
    const param2 = parameters[2]

    switch (chartType) {
      case CHART_TYPE.LINE:
        return <LineChart width={600} height={300} data={dataChart} margin={{top: 5, right: 5, left: 5, bottom: 5}}>
                  <XAxis dataKey={param0} allowDuplicatedCategory={false} minTickGap={30}>
                    <Label value={param0} position="insideBottomRight" offset={50} />
                  </XAxis>
                  <YAxis>
                    <Label value={param1} position="insideLeft" angle={-90} />
                  </YAxis>
                  <CartesianGrid strokeDasharray="3 3"/>
                  <Tooltip />
                  <Legend verticalAlign="top" height={36}/>
                  <Line type="monotone" dataKey={param1} stroke="#82ca9d" activeDot={{r: 8}}/>
                  {param2 && <Line type="monotone" dataKey={param2} stroke="#8884d8" activeDot={{r: 8}}/>}
                </LineChart>
       case CHART_TYPE.COMPOSED:
         return <ComposedChart width={600} height={300} data={dataChart} margin={{top: 5, right: 5, left: 5, bottom: 5}}>
                  <XAxis dataKey={param0} allowDuplicatedCategory={false} minTickGap={30}>
                   <Label value={param0} position="insideBottomRight" offset={50} />
                  </XAxis>
                  <YAxis>
                    <Label value={param1} position="insideLeft" angle={-90} />
                  </YAxis>
                  <CartesianGrid strokeDasharray="3 3"/>
                  <Tooltip/>
                  <Legend verticalAlign="top" height={36}/>
                  <Area type="monotone" dataKey={param1} stroke="#8884d8" fill="#8884d8" />
                  <Line type="monotone" dataKey={param2} stroke='#ff7300'/>
                  <Bar dataKey={param2} barSize={20} fill='#413ea0' />
                </ComposedChart>
        case CHART_TYPE.AREA:
          return <AreaChart width={600} height={300} data={dataChart} margin={{top: 5, right: 5, left: 5, bottom: 5}}>
                   <XAxis dataKey={param0} allowDuplicatedCategory={false} minTickGap={30}>
                    <Label value={param0} position="insideBottomRight" offset={50} />
                  </XAxis>
                  <YAxis>
                    <Label value={param1} position="insideLeft" angle={-90} />
                  </YAxis>
                  <CartesianGrid strokeDasharray="3 3"/>
                  <Tooltip/>
                  <Legend verticalAlign="top" height={36}/>
                  <Area type="monotone" dataKey={param1} stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
        case CHART_TYPE.PIE:
          return <PieChart width={600} height={400}>
                   <Pie isAnimationActive={true} dataKey="value" data={dataChart} cx="50%" cy="50%" outerRadius={130} fill="#82ca9d"/>
                   <Tooltip labelFormatter={this.toPercent}/>
                 </PieChart>
      default:
        // No action
    }
  }

  /**
  * render - description
  *
  * @return {type}  description
  */
  render = () => {
    return (
      <div>
        <h3>{this.props.title}</h3>
        {this.renderChart()}
      </div>
    )
  }
}
