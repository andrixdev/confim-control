import { Client } from 'node-osc';
import express from 'express';
import bodyParser from 'body-parser';

const app = express()
const port = 8082
const client = new Client('127.0.0.1', 6999);
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('web'));

app.listen(port, () => {
  console.log(`Confim Control app listening on port ${port} for browser input`)
})

app.post('/eh', (req, res) => {
  let num = req.body.num

  // Log reception in Node console
  console.log('HTTP POST received from browserrrrr!')
  
  // Reply to browser HTTP request with something
  res.send('OK Roger, from Node server to browser.')

  // Shoot an OSC message to port 6999
  client.send('/confim', num, () => {
    console.log('Message /confim with number ' + num + ' was sent to port 6999')
    //client.close();
  });
})
