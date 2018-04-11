// @flow

/**
* @file Chart component
* @author Enrique Tamames Sobrino
* @module components/Chart
* @version 0.0.1
*/

import React from 'react'
import { LineChart, AreaChart, PieChart, RadarChart,
  Pie, Area, Line, XAxis, YAxis, ZAxis, CartesianGrid,
  Tooltip, Legend, Label, Radar, PolarGrid, PolarAngleAxis,
  PolarRadiusAxis, ScatterChart, Scatter } from 'recharts'
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

const dataRadar = [
    { subject: 'January', A: 80.14, B: 110, fullMark: 150 },
    { subject: 'February', A: 50.34, B: 130.2, fullMark: 150 },
    { subject: 'March', A: 30.46, B: 45.34, fullMark: 150 },
    { subject: 'April', A: 99.1, B: 20.45, fullMark: 150 },
    { subject: 'May', A: 110.13, B: 90.20, fullMark: 150 },
    { subject: 'June', A: 78.40, B: 85.45, fullMark: 150 },
    { subject: 'July', A: 80.59, B: 67.70, fullMark: 150 },
];

const dataBubble = [
  { hour: '12a', index: 1, value: 1 },
  { hour: '1a', index: 1, value: 1 },
  { hour: '2a', index: 1, value: 5 },
  { hour: '3a', index: 1, value: 5 },
  { hour: '4a', index: 1, value: 5 },
  { hour: '5a', index: 1, value: 5 },
  { hour: '6a', index: 1, value: 10 },
  { hour: '7a', index: 1, value: 10 },
  { hour: '8a', index: 1, value: 15 },
  { hour: '9a', index: 1, value: 15 },
  { hour: '10a', index: 1, value: 16 },
  { hour: '11a', index: 1, value: 50 },
  { hour: '12a', index: 1, value: 18 },
  { hour: '1p', index: 1, value: 14 },
  { hour: '2p', index: 1, value: 16 },
  { hour: '3p', index: 1, value: 14 },
  { hour: '4p', index: 1, value: 15 },
  { hour: '5p', index: 1, value: 17 },
  { hour: '6p', index: 1, value: 18 },
  { hour: '7p', index: 1, value: 16 },
  { hour: '8p', index: 1, value: 13 },
  { hour: '9p', index: 1, value: 14 },
  { hour: '10p', index: 1, value: 7 },
  { hour: '11p', index: 1, value: 3 },
];

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
   * renderTooltip - description
   *
   * @param  {type} props description
   * @return {type}       description
   */
  renderTooltipBubble(props: any) {
    const { active, payload } = props;

    if (active && payload && payload.length) {
      const data = payload[0].payload;

      return (
        <div style={{ backgroundColor: '#fff', border: '1px solid #999', margin: 0, padding: 10 }}>
          <p>{data.hour}</p>
          <p><span>value: </span>{data.value}</p>
        </div>
      );
    }
    return null;
  }

  /**
   * parseDomain - description
   *
   * @return {type}  description
   */
  parseDomain = () => {
    return [0, Math.max.apply(null, [...dataBubble.map(entry => entry.value)])]
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

    const domain = this.parseDomain();
    const range = [50, 300];

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
       case CHART_TYPE.RADAR:
         return <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={dataRadar}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis angle={30} domain={[0, 150]}/>
                  <Radar name="Bus-1" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
                  <Radar name="Bus-2" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6}/>
                  <Legend margin={{ top: 50, left: 0, right: 0, bottom: 0 }}/>
                </RadarChart>
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
        case CHART_TYPE.BUBBLE:
        return <ScatterChart width={800} height={60} margin={{top: 10, right: 0, bottom: 0, left: 0}}>
                <XAxis type="category" dataKey="hour" interval={0} tick={{ fontSize: 0 }} tickLine={{ transform: 'translate(0, -6)' }} />
                <YAxis type="number" dataKey="index" name="sunday" height={10} width={80} tick={false} tickLine={false} axisLine={false} label={{ value: 'Sunday', position: 'insideRight' }}/>
                <ZAxis type="number" dataKey="value" domain={domain} range={range} />
                <Tooltip cursor={{strokeDasharray: '3 3'}} wrapperStyle={{ zIndex: 100 }} content={this.renderTooltipBubble} />
                <Scatter data={dataBubble} fill='#8884d8'/>
              </ScatterChart>
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
