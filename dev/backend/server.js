const express = require('express');
const client = require('prom-client');

const app = express();

const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();

const counter = new client.Counter({
  name: 'node_requests_total',
  help: 'Total requests'
});

app.get('/', (req, res) => {
  counter.inc();
  res.send('Backend Running');
});

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});