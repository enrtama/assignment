
/**
 * @file Component that contains charts
 * @author Enrique Tamames
 * @module components/Sidebar
 * @version 0.0.1
 */

import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import LineChart from '../LineChart'
import AreaChart from '../AreaChart'
import ComposedChart from '../ComposedChart'
import { SIDEBAR_STYLES, PARAMETERS, CHARTS_TITLE } from '../../constants'

export default class Sidebar extends React.Component {
  /**
   * render - description
   *
   * @return {type}  description
   */
  render = () => {
    const { vehicle } = this.props
    return (
      <Menu pageWrapId={"page-wrap"} disableCloseOnEsc noOverlay right styles={SIDEBAR_STYLES}>
        <LineChart parameters={[PARAMETERS.TIME, PARAMETERS.ENERGY]} vehicle={vehicle} title={CHARTS_TITLE.TIME_ENERGY}/>
        <LineChart parameters={[PARAMETERS.TIME, PARAMETERS.ODO]} vehicle={vehicle} title={CHARTS_TITLE.TIME_ODO}/>
        <ComposedChart parameters={[PARAMETERS.TIME, PARAMETERS.ENERGY, PARAMETERS.SPEED]} vehicle={vehicle} title={CHARTS_TITLE.TIME_ENERGY_SPEED}/>
        <AreaChart parameters={[PARAMETERS.TIME, PARAMETERS.SOC]} vehicle={vehicle} title={CHARTS_TITLE.TIME_SOC}/>
      </Menu>
    )
  }
}
