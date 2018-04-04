
/**
 * @file Component that represents and area chart
 * @author Enrique Tamames
 * @module components/AreaChart
 * @version 0.0.1
 */

import React from 'react'
import { ComposedChart, Area, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label } from 'recharts';
import { MAX_ELEMENTS, PARAMETERS } from '../../constants'
import { getTimeKey } from '../../utils'

export default class AreaChartComponent extends React.Component {

  state = {
    dataChart: []
  }

  /**
   * componentWillMount - description
   *
   * @return {type}  description
   */
  componentWillReceiveProps = (nextProps) => {
    const { vehicle, parameters } = nextProps
    const { dataChart } = this.state
    if (vehicle) {
      let newData = {}
      newData[parameters[0]] = parameters[0] === PARAMETERS.TIME ? getTimeKey(vehicle.time) : vehicle[parameters[0]]
      newData[parameters[1]] = vehicle[parameters[1]] || 0
      newData[parameters[2]] = vehicle[parameters[2]] || 0
      this.setState({dataChart: [...dataChart, newData].slice(-MAX_ELEMENTS)})
    }
  }

  /**
   * render - description
   *
   * @return {type}  description
   */
  render = () => {
    const { dataChart } = this.state
    const { title, parameters } = this.props

    console.log(dataChart);

    return (
      <div>
        <h3>{title}</h3>
        <ComposedChart width={600} height={300} data={dataChart}
              margin={{top: 5, right: 5, left: 5, bottom: 5}}>
          <XAxis dataKey={parameters[0]} allowDuplicatedCategory={false}>
            <Label value={parameters[0]} position="bottom" offset={0} />
          </XAxis>
          <YAxis />
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend verticalAlign="top" height={36}/>
          <Area type="monotone" dataKey={parameters[1]} stroke="#8884d8" fill="#8884d8" />
          <Line type="monotone" dataKey={parameters[2]} stroke='#ff7300'/>
          <Bar dataKey={parameters[2]} barSize={20} fill='#413ea0' />
        </ComposedChart>
      </div>
    )
  }
}
