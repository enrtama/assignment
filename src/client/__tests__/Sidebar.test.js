
/**
 * @file Map tests
 * @author Enrique Tamames Sobrino
 * @module tests/Map
 * @version 0.0.1
 */

import React from 'react'
import Sidebar from '../components/Sidebar'
import { slide as Menu } from 'react-burger-menu'
import Chart from '../components/Chart'
import { shallow } from 'enzyme'
import { vehicle } from '../__mocks__/mockupData'

describe('<Sidebar />', () => {

  it('should render sidebar components', () => {
    const props = { vehicle }
    const wrapper = shallow(<Sidebar {...props}/>)
    expect(wrapper.find(Menu)).toBeDefined()
    expect(wrapper.find(Chart)).toBeDefined()
  })
})
