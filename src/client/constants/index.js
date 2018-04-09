
/**
 * @file Constants
 * @author Enrique Tamames Sobrino
 * @module constants/
 * @version 0.0.1
 */

export const PARAMETERS = {
  TIME: 'time',
  ENERGY: 'energy',
  GPS: 'gps',
  ODO: 'odo',
  SPEED: 'speed',
  SOC: 'soc',
  TEMPERATURE: 'temperature',
  PASSENGERS: 'passengers',
  NO_PARAM: null
}

export const CHART_TITLE = {
  TIME_ENERGY: 'Energy (kWh) over time',
  TIME_ODO: 'Distance (km) over time',
  TIME_SOC: 'Battery state (%)',
  TIME_ENERGY_SPEED: 'Energy (kWh) & Speed (km/h) over time',
  TIME_SOC_SPEED: 'Battery state & Speed (km/h) over time',
  ENERGY_PASSENGERS: 'Energy spent depending on passengers'
}

export const CHART_TYPE = {
  LINE: 'Line',
  BAR: 'Bar',
  AREA: 'Area',
  COMPOSED: 'Composed',
  RADIAL: 'Radial',
  PIE: 'Pie'
}

export const MAX_ELEMENTS = 20;

export const SIDEBAR_STYLES = {
   bmBurgerButton: {
     position: 'fixed',
     width: '36px',
     height: '30px',
     right: '36px',
     top: '36px'
   },
   bmBurgerBars: {
     background: '#373a47'
   },
   bmCrossButton: {
     height: '24px',
     width: '24px'
   },
   bmCross: {
     background: '#bdc3c7'
   },
   bmMenu: {
     background: '#f9f9f9',
     padding: '2.5em 1.5em 0',
     fontSize: '1.15em'
   },
   bmMorphShape: {
     fill: '#373a47'
   },
   bmItemList: {
     color: '#777777',
     padding: '0.8em'
   },
   bmOverlay: {
     background: 'rgba(0, 0, 0, 0.3)'
   }
 }
