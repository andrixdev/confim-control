/**
 * ANDRIX © 2023-2024
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
app.use('/sources', express.static('sources'))
app.use('/', express.static('.'))

app.listen(port, () => {
  console.log(`Confim Control app listening on port ${port} for browser input`)
})

app.post('/eh', (req, res) => {
  let num = parseInt(req.body.num)

  // Log reception in Node console
  //console.log('HTTP POST received from browserrrrr!')
  
  // Reply to browser HTTP request with something
  res.send('OK Roger, from Node server to browser.')

  // Shoot an OSC message to port 6999
  // Addresses :
  // [0, 199] for visual triggers
  // [200, 299] for audio triggers
  // [300, 399] for video
  // [500, 600] for master sound volume 
  // [700, 900] for cam speed
  // [1000, 1100] for eeg signal
  let oscAddress = num < 200 ? '/visuals' : (num < 300 ? '/audio' : (num < 400 ? '/video' : (num <= 600 ? '/master' : (num <= 900 ? '/speed' : '/eeg'))))
  client.send(oscAddress, num, () => {
    console.log('Message with number ' + num + ' was sent on address ' + oscAddress + ' to port 6999')
    //client.close();
  })

})
