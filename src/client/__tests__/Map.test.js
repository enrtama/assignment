
/**
 * @file Map tests
 * @author Enrique Tamames Sobrino
 * @module tests/Map
 * @version 0.0.1
 */

import React from 'react'
import renderer from 'react-test-renderer';
import VehicleMap from '../components/Map'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { shallow, mount } from 'enzyme'
import { vehicle, currentCoordinate } from '../__mocks__/mockupData'


describe('<Map />', () => {

  it('should render map components', () => {
    const props = { currentCoordinate }
    const wrapper = shallow(<VehicleMap {...props}/>)
    wrapper.setState({ lat: 52.080, lng: 5.122, zoom: 18 });
    expect(wrapper.find(Map)).toBeDefined()
    expect(wrapper.find(TileLayer)).toBeDefined()
    expect(wrapper.find(Marker)).toBeDefined()
    expect(wrapper.find(Popup)).toBeDefined()
  })

})
