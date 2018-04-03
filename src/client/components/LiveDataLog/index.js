// @flow

/**
 * @file Live data log component
 * @author Enrique Tamames
 * @module components/LiveDataLog
 * @version 0.0.1
 */

import React from 'react'

type Vehicle = {
  time: number,
  energy: number,
  gps: [string,string],
  odo: number,
  speed: number,
  soc: number
}

type Props = {
  logs: Array<Vehicle>
}

const LiveDataLog = (props: Props) => {
	return (
		<div>
		  {
				// Show data with newest object on top
				props.logs.reverse().map((log) =>
					<p key={log.time}>{ JSON.stringify(log) }</p>
				)
			}
		</div>
  )
}

export default LiveDataLog
