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
  // [901, 903] for cam resets
  // [1000, 1100] for brain opacity
  // [1200, 1210] for brain rotation mode
  // [2000, 2100] for eeg signal
  let oscAddress = '/null'
  if (num >= 0 && num < 200) {
    oscAddress = '/visuals'
  } else if (num < 300) {
    oscAddress = '/audio'
  } else if (num < 400) {
    oscAddress = '/video'
  } else if (num >= 500 && num <= 600) {
    oscAddress = '/master'
  } else if (num >= 700 && num <=  903) {
    oscAddress = '/speed'
  } else if (num >= 1000 && num <= 1100) {
    oscAddress = '/opacity'
  } else if (num >= 1200 && num <= 1210) {
    oscAddress = '/rotation'
  } else if (num >= 2000 && num <= 2100) {
    oscAddress = '/eeg'
  }
  
  client.send(oscAddress, num, () => {
    console.log('Message with number ' + num + ' was sent on address ' + oscAddress + ' to port 6999')
    //client.close();
  })

})
