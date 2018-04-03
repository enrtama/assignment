// @flow

/**
 * @file Component that represents and area chart
 * @author Enrique Tamames
 * @module components/AreaChart
 * @version 0.0.1
 */

import React, { Component } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label } from 'recharts';
import { MAX_ELEMENTS, PARAMETERS } from '../../constants'
import { getTimeKey } from '../../utils'

type Vehicle = {
  time: number,
  energy: number,
  gps: [string,string],
  odo: number,
  speed: number,
  soc: number
}

type Props = {
  parameters: [string,string],
  data: Vehicle,
  title: string
}

type State = {
  dataChart: Array<[any,any]>
}

export default class AreaChartComponent extends React.Component<Props, State> {

  state = {
    dataChart: []
  }

  /**
   * componentWillMount - description
   *
   * @return {type}  description
   */
  componentWillReceiveProps = (nextProps: Props) => {
    const data: Vehicle = nextProps.data
    const parameters: [string,string] = nextProps.parameters
    const { dataChart } = this.state
    if (data) {
      let newData: [any,any] = [parameters[0] === PARAMETERS.TIME ? getTimeKey(data.time) : data[parameters[0]], data[parameters[1]]]
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
        <AreaChart width={600} height={300} data={dataChart}
              margin={{top: 5, right: 5, left: 5, bottom: 5}}>
          <XAxis dataKey={parameters[0]} allowDuplicatedCategory={false}>
            <Label value={parameters[0]} position="bottom" offset={0} />
          </XAxis>
          <YAxis tickFormatter={this.toPercent}/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />
          <Area type="monotone" dataKey={parameters[1]} stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </div>
    )
  }
}
