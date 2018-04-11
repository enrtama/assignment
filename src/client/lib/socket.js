
/**
 * @file socket.io
 * @author Enrique Tamames Sobrino
 * @module lib/socket
 * @version 0.0.1
 */

import io from "socket.io-client"

console.log('Connecting to', window.location.href)

export default io.connect(window.location.href, { reconnect: true })
