
/**
 * @file Constants
 * @author Enrique Tamames
 * @module constants/
 * @version 0.0.1
 */

export const PARAMETERS = {
  TIME: 'time',
  ENERGY: 'energy',
  GPS: 'gps',
  ODO: 'odo',
  SPEED: 'speed',
  SOC: 'soc'
}

export const CHARTS_TITLE = {
  TIME_ENERGY: 'Energy (kWh) over time',
  TIME_ODO: 'Distance (km) over time',
  TIME_SOC: 'Battery state (%)'
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
     background: '#373a47',
     padding: '2.5em 1.5em 0',
     fontSize: '1.15em'
   },
   bmMorphShape: {
     fill: '#373a47'
   },
   bmItemList: {
     color: '#b8b7ad',
     padding: '0.8em'
   },
   bmOverlay: {
     background: 'rgba(0, 0, 0, 0.3)'
   }
 }
