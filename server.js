const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

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

app.use(express.static('public'))

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

app.get('/js/main.js', (require, response) => {
    response.sendFile(__dirname + '/js/main.js')
})

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}! Better Go Catch it!`)
})