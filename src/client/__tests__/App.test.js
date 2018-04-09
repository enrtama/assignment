
/**
 * @file App tests
 * @author Enrique Tamames Sobrino
 * @module tests/App
 * @version 0.0.1
 */

import React from 'react'
import renderer from 'react-test-renderer';
import { App } from '../components/App'
import Sidebar from '../components/Sidebar'
import Map from '../components/Map'
import { shallow, mount } from 'enzyme'
import { Server } from 'mock-socket'
import sinon from 'sinon'
import { vehicle, currentCoordinate } from '../__mocks__/mockupData'

const socket = new Server('ws://localhost:1337');

describe('<App />', () => {

  it('should render <Sidebar /> & <Map />', () => {
    const props = {
      vehicle: vehicle,
      currentCoordinate: currentCoordinate,
      socket: socket,
      addInfoVehicle: sinon.spy()
    }
    const wrapper = shallow(<App {...props}/>)
    expect(wrapper.find(Sidebar)).toBeDefined()
    expect(wrapper.find(Map)).toBeDefined()
  })

  // it('should call componentDidMount', () => {
  //   const props = {
  //     vehicle: vehicle,
  //     currentCoordinate: currentCoordinate,
  //     socket: socket,
  //     addInfoVehicle: sinon.spy()
  //   }
  //   const wrapper = mount(<App vehicle={vehicle} currentCoordinate={currentCoordinate} socket={socket}/>)
  //   // expect(spy).toHaveBeenCalledTimes(1);
  //   expect(App.prototype.componentDidMount.calledOnce).toBeTruthy();
  // })

})
