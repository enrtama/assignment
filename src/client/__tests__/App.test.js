
/**
 * @file App tests
 * @author Enrique Tamames Sobrino
 * @module tests/App
 * @version 0.0.1
 */

import React from 'react'
import { App } from '../components/App'
import Sidebar from '../components/Sidebar'
import Map from '../components/Map'
import { shallow } from 'enzyme'
import { Server } from 'mock-socket'
import sinon from 'sinon'
import { vehicle, currentCoordinate } from '../__mocks__/mockupData'

const socket = new Server('ws://localhost:1337');

describe('<App />', () => {

  let wrapper;
  beforeEach(() => {
    const props = {
      vehicle: vehicle,
      currentCoordinate: currentCoordinate,
      socket: socket,
      addInfoVehicle: sinon.spy()
    }
    wrapper = shallow(<App {...props}/>)
  })

  it('should render <Sidebar /> & <Map />', () => {
    expect(wrapper.find(Sidebar)).toBeDefined()
    expect(wrapper.find(Map)).toBeDefined()
  })

  it('should call componentDidMount', function () {
    sinon.spy(App.prototype, 'componentDidMount');
    const props = {
      vehicle: vehicle,
      currentCoordinate: currentCoordinate,
      socket: socket,
      addInfoVehicle: sinon.spy()
    }
    wrapper = shallow(<App {...props}/>)
    expect(App.prototype.componentDidMount.calledOnce).toBe(true);
  })

})
