const express = require('express')
const app = express()

app.use((request, response, next) => {
  console.log('Some one has requested server1');
  console.log('The source requested is: _', request.url);
  console.log('From:', request.get('Host'));
  next()
})

app.get('/students', (request, response) => {
  const students = [
    { id: '001', name: 'tim', age: 18 },
    { id: '002', name: 'jerry', age: 15 },
    { id: '003', name: 'tony', age: 20 },
  ]
  response.send(students)
})

app.listen(5000, (err) => {
  if (!err) console.log('Server1 has started, get students info from: http://localhost:5000/students');
})