/**
 * Alex Andrix @2023
 */

import { Client } from 'node-osc'
import express from 'express'
import bodyParser from 'body-parser'

const app = express()

const port = 8082
const client = new Client('127.0.0.1', 6999)
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/speaker', express.static('web-speaker-controls'))
app.use('/assistant', express.static('web-assistant-controls'))

app.listen(port, () => {
  console.log(`Confim Control speaker app listening on port ${port} for browser input`)
})

app.post('/eh', (req, res) => {
  let num = parseInt(req.body.num)

  // Log reception in Node console
  //console.log('HTTP POST received from browserrrrr!')
  
  // Reply to browser HTTP request with something
  res.send('OK Roger, from Node server to browser.')

  // Shoot an OSC message to port 6999
  // Addresses below 100 are for visual triggers, 100 to 199 are for audio, 200 and more for video
  let oscAddress = num < 100 ? '/visuals' : (num < 200 ? '/audio' : '/video')
  client.send(oscAddress, num, () => {
    console.log('Message with number ' + num + ' was sent on address ' + oscAddress + ' to port 6999')
    //client.close();
  })

})
