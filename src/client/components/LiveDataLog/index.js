
/**
 *
 */

import React from 'react'

const LiveDataLog = (props) => {
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
