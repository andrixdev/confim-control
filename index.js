/**
 * ANDRIX © 2023
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
  // [0, 100] for visual triggers
  // [100, 199] for audio triggers
  // [200, 299] for video
  // [500, 600] for master sound volume 
  let oscAddress = num < 100 ? '/visuals' : (num < 200 ? '/audio' : (num < 300 ? '/video' : (num <= 600 ? '/master' : '/speed')))
  client.send(oscAddress, num, () => {
    console.log('Message with number ' + num + ' was sent on address ' + oscAddress + ' to port 6999')
    //client.close();
  })

})
