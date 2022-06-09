const express = require('express');
const cors = require('cors');

// defining the PORT to listen the server!
const PORT = process.env.PORT || 8000;

// defining the Express app!
const app = express();
app.use(cors());
app.use(express.static('public'))

const books = {
    'book 1': {
        'name': 'Javascript 1',
        'author': 'Jon Doe',
        'published': '2010'
    },
    'book 2': {
        'name': 'Node 2',
        'author': 'Bob Daniel',
        'published': '2015'
    },
    'unknown': {
        'name': 'Unknown',
        'author': 'Unknown',
        'published': 'none'
    }
}

app.get('/', (require, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (require, response) => {
    const bookName = require.params.name.toLowerCase()
    if(books[bookName]){
        response.json(books[bookName])
    } else {
        response.json(books['unknown'])
    }
})

app.get('/public/js/main.js', (require, response) => {
    response.sendFile(__dirname + '/public/js/main.js')
})

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}! Better Go Catch it!`)
})