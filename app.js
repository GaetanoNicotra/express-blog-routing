// importo express
const express = require('express');

// inizzializzo express nella variabile app
const app = express();

// definisco la porta del server
const port = 3000;

// importo le rotte
const postsRouter = require('./routers/posts.js');

// definisco la rotta base
app.get('/', (req, res) => {
    res.send('Express blog routing')
});

// metto in ascolto il server
app.listen(port, () => {
    console.log(`Server in ascolto alla porta ${port}`)
})