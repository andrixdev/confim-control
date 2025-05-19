/**
 * ANDRIX © 2025
 */

import { Client } from 'node-osc'
import express from 'express'
import bodyParser from 'body-parser'
import config from './config.js'

const app = express()

const conferenceId = config.conferenceId
const browserPort = config.browserPort
const unityPort = config.unityPort
const client = new Client('127.0.0.1', unityPort)
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/speaker', express.static('web-speaker-controls'))
app.use('/assistant', express.static('web-assistant-controls'))
app.use('/sources', express.static('sources'))
app.use('/', express.static('.'))

app.listen(browserPort, () => {
  console.log(`Confim Control ${conferenceId} app listening on port ${browserPort} for browser input to send OSC data to Unity through port ${unityPort}`)
})

app.post('/eh', (req, res) => {
  let num = parseInt(req.body.num)

  // Log reception in Node console
  //console.log('HTTP POST received from browserrrrr!')
  
  // Reply to browser HTTP request with something
  res.send('OK Roger, from Node server to browser.')

  // Shoot an OSC message to Unity port
  // Addresses :
  // 0 for reset
  // [1-49] for chapters
  // [100, 299] for visual triggers
  // [300, 399] for audio triggers
  // [400, 499] for video
  // [500, 600] for master sound volume
  let oscAddress = '/null'
  if (num == 0) {
    oscAddress = '/reset'
  } else if (num >= 1 && num <= 49) {
    oscAddress = '/chapter'
  } else if (num >= 100 && num <= 299) {
    oscAddress = '/visuals'
  } else if (num >= 300 && num <= 399) {
    oscAddress = '/audio'
  } else if (num >= 400 && num <= 499) {
    oscAddress = '/video'
  } else if (num >= 500 && num <= 600) {
    oscAddress = '/master'
  } else {
    console.error("Confim " + conferenceId + " web app trying to send an unrecognized OSC number: " + num)
  }

  client.send(oscAddress, num, () => {
    console.log("Message with number " + num + " was sent on address " + oscAddress + " to port " + unityPort + " for Unity")
    //client.close();
  })

})
