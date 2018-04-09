
/**
 * @file Map tests
 * @author Enrique Tamames Sobrino
 * @module tests/Map
 * @version 0.0.1
 */

import React from 'react'
import renderer from 'react-test-renderer';
import Chart from '../components/Chart'
import { LineChart, AreaChart } from 'recharts'
import { shallow } from 'enzyme'
import { vehicle } from '../__mocks__/mockupData'
import { PARAMETERS, CHART_TITLE, CHART_TYPE } from '../constants'

describe('<Chart />', () => {

  it('should render LINE_CHART', () => {
    const props = {
      chartType: CHART_TYPE.LINE,
      parameters: [PARAMETERS.TIME, PARAMETERS.ENERGY, PARAMETERS.SPEED],
      vehicle: vehicle,
      title: CHART_TITLE.TIME_ENERGY_SPEED
    }
    const wrapper = shallow(<Chart {...props}/>)
    expect(wrapper.find("h3")).toBeDefined()
    expect(wrapper.find(LineChart)).toBeDefined()
  })

  it('should render AREA_CHART', () => {
    const props = {
      chartType: CHART_TYPE.AREA,
      parameters: [PARAMETERS.TIME, PARAMETERS.SOC, PARAMETERS.NO_PARAM],
      vehicle: vehicle,
      title: CHART_TITLE.TIME_SOC
    }
    const wrapper = shallow(<Chart {...props}/>)
    expect(wrapper.find("h3")).toBeDefined()
    expect(wrapper.find(AreaChart)).toBeDefined()
  })

})
