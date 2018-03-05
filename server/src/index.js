import express from 'express';

import createStore from './helpers/createStore';
import renderer from './helpers/renderer';

const app = express();
app.use(express.static('public'));// tell express to treat the bundle.js file in public as a static/publically available file
app.get('*', (req, res) => {
  const store = createStore();
  
  res.send(renderer(req, store));
});

app.listen(3000, () => {
  console.log('Listening on port 3000')
});
