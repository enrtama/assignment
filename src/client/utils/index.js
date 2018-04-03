// @flow

/**
 * Utils
 */

/**
* getTimeKey - Get unique identifier for time
*
* @param  {type} time description
* @return {type}      description
*/
export const getTimeKey = (time: number) => {
  const d = new Date(time)
  const h = d.getHours()
  const m = (d.getMinutes()<10?'0':'') + d.getMinutes()
  const s = (d.getSeconds()<10?'0':'') + d.getSeconds()
  return [h,m,s].join(':')
}
