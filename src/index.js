const SerialPort = require('serialport')

SerialPort.list().then(res => {
  console.log(res)
})