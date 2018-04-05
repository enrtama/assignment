
/**
 * @file App tests
 * @author Enrique Tamames
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
  it('should render <App />', () => {
    const props = {
      vehicle: vehicle,
      currentCoordinate: currentCoordinate,
      socket: socket,
      addInfoVehicle: sinon.spy()
    }
    const wrapper = shallow(<App vehicle={vehicle} currentCoordinate={currentCoordinate} socket={socket}/>)
    expect(wrapper.find(Sidebar)).toBeDefined()
    expect(wrapper.find(Map)).toBeDefined()
  });
});
