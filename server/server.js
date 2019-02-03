const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const isValidCoordinates = require('is-valid-coordinates');
const axios = require('axios');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Get all users
const initialLocations = [
  {
    id: 'id1',
    name: 'Denver',
    lat: 39.742043,
    lng: -104.991531,
  },
  {
    id: 'id2',
    name: 'LA',
    lat: 34.052235,
    lng: -118.243683,
  },
  {
    id: 'id3',
    name: 'Boston',
    lat: 42.364506,
    lng: -71.038887,
  },
];

app.locals.idIndex = 3;
app.locals.locations = initialLocations;

app.get('/locations', (request, response) =>
  response.send({ locations: app.locals.locations }),
);
app.post('/locations', async (request, response) => {
  app.locals.idIndex++;
  const getCoords = await getCoordinates(request.body.name);
  let coords = getCoords.data.filter(result => result.type === 'city');
  coords = coords[coords.length-1]
  if(!coords) coords = request.body
  if (!isValidCoordinates(Number(request.body.lng), Number(request.body.lat))) {
    response.status(400).json({ error: 'Invalid Coordinates' });
  }
  app.locals.locations.push({
    id: `id${app.locals.idIndex}`,
    name: request.body.name,
    lat: Number(coords.lat),
    lng: Number(coords.lon),
  });
  response.send({ locations: app.locals.locations });
});

app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Always return the main index.html, so react-router render the route in the client
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

const portNumber = process.env.PORT || 3001;

app.listen(portNumber, () => {
  console.log('RrrarrrrRrrrr server alive on port 3001');
});

async function getCoordinates(locationName) {
  const result = await axios.get(
    `https://nominatim.openstreetmap.org/search?q=${locationName}&format=json`,
  );
  return result;
}
