
/**
 * @file LineChart component
 * @author Enrique Tamames
 * @module components/LineChart
 * @version 0.0.1
 */

import React, { Component } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label } from 'recharts'
import { MAX_ELEMENTS, PARAMETERS } from '../../constants'
import { getTimeKey } from '../../utils'

export default class LineChartComponent extends React.Component {

  state = {
    dataChart: []
  }

  /**
   * componentWillMount - description
   *
   * @return {type}  description
   */
  componentWillReceiveProps = (nextProps) => {
    const { data, parameters } = nextProps
    const { dataChart } = this.state
    if (data) {
      let newData = {}
      newData[parameters[0]] = parameters[0] === PARAMETERS.TIME ? getTimeKey(data.time) : data[parameters[0]]
      newData[parameters[1]] = data[parameters[1]]
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

  	return (
      <div>
        <h3>{title}</h3>
      	<LineChart width={600} height={300} data={dataChart}
              margin={{top: 5, right: 5, left: 5, bottom: 5}}>
           <XAxis dataKey={parameters[0]} allowDuplicatedCategory={false}>
             <Label value={parameters[0]} position="bottom" offset={0} />
           </XAxis>
           <YAxis/>
           <CartesianGrid strokeDasharray="3 3"/>
           <Tooltip/>
           <Legend />
           <Line type="monotone" dataKey={parameters[1]} stroke="#82ca9d" />
        </LineChart>
      </div>
    )
  }
}
