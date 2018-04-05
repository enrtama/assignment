// @flow

/**
 * @file Component that contains charts
 * @author Enrique Tamames
 * @module components/Sidebar
 * @version 0.0.1
 */

import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import Chart from '../Chart'
import { SIDEBAR_STYLES, PARAMETERS, CHART_TITLE, CHART_TYPE } from '../../constants'

type Vehicle = {
  time: number,
  energy: number,
  gps: [string,string],
  odo: number,
  speed: number,
  soc: number
}

type Props = {
  vehicle: Vehicle
}

export default class Sidebar extends React.Component<Props> {
  /**
   * render - description
   *
   * @return {type}  description
   */
  render = () => {
    const { vehicle } = this.props

    return (
      <Menu pageWrapId={"page-wrap"} disableCloseOnEsc noOverlay right styles={SIDEBAR_STYLES}>
        <Chart chartType={CHART_TYPE.LINE} parameters={[PARAMETERS.TIME, PARAMETERS.ENERGY, PARAMETERS.NO_PARAM]} vehicle={vehicle} title={CHART_TITLE.TIME_ENERGY} />
        <Chart chartType={CHART_TYPE.LINE} parameters={[PARAMETERS.TIME, PARAMETERS.ODO, PARAMETERS.NO_PARAM]} vehicle={vehicle} title={CHART_TITLE.TIME_ODO} />
        <Chart chartType={CHART_TYPE.COMPOSED} parameters={[PARAMETERS.TIME, PARAMETERS.ENERGY, PARAMETERS.SPEED]} vehicle={vehicle} title={CHART_TITLE.TIME_ENERGY_SPEED} />
        <Chart chartType={CHART_TYPE.AREA} parameters={[PARAMETERS.TIME, PARAMETERS.SOC, PARAMETERS.NO_PARAM]} vehicle={vehicle} title={CHART_TITLE.TIME_SOC} />
      </Menu>
    )
  }
}
