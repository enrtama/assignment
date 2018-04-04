// @flow

/**
 * @file Map component
 * @author Enrique Tamames
 * @module components/Map
 * @version 0.0.1
 */

import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import Leaflet from 'leaflet'
import Tooltip from './Tooltip'

const MarkerImage = new Leaflet.Icon({
  iconUrl: require('../../../../assets/marker.png'),
  iconSize: [28, 28]
})

type Props = {
  currentCoordinate: [number,number]
}

type State = {
  lat: number,
  lng: number,
  zoom: number,
}

export default class MapComponent extends React.Component<Props, State> {

  state = {
    lat: 52.080,
    lng: 5.122,
    zoom: 18
  }

  /**
   * render - description
   *
   * @return {type}  description
   */
  render = () => {
    const { lat, lng, zoom } = this.state
    const { currentCoordinate } = this.props
    const position = [lat, lng]
    const coordinates = currentCoordinate || position
    return (
      <Map center={coordinates} zoom={zoom}>
        <TileLayer
          attribution="&amp;copy <a target='_blank' href=&quot;https://www.viriciti.com/&quot;>Viriciti</a>"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coordinates} icon={MarkerImage}>
          <Popup>
            <Tooltip />
          </Popup>
        </Marker>
      </Map>
    )
  }
}
