const express = require('express')
const app = express()

app.use((request, response, next) => {
  console.log('Some one has requested server1');
  console.log('The source requested is: _', request.url);
  console.log('From:', request.get('Host'));
  next()
})

app.get('/cars', (request, response) => {
  const students = [
    { id: '001', name: 'Toyota', age: 18 },
    { id: '002', name: 'Nissan', age: 15 },
    { id: '003', name: 'BMW', age: 20 },
  ]
  response.send(students)
})

app.listen(5002, (err) => {
  if (!err) console.log('Server2 has started, get cars info from: http://localhost:5002/cars');
})