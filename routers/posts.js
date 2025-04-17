// importo express
const express = require('express');

// importo la classe router
const router = express.Router();


// scrivo le singole rotte

// rotta che mostra tutti posts (index)
router.get('/', (req, res) => {
    res.send('Lista dei posts');
});

// rotta che mostra un posts (show)
router.get('/:id', (req, res) => {
    res.send('Dettaglio del posts' + req.params.id);
});

// rotta inserisce un nuovo post (store)
router.post('/', (req, res) => {
    res.send('Inserimento di un nuovo post');
});

// rotta che modifica totalmente un post (update)
router.put('/:id', (req, res) => {
    res.send('Modifica totale del post');
});

// rotta che modifica parzialmente un post (modify)
router.patch('/:id', (req, res) => {
    res.send('Modifica parziale di un post');
});

// rotta che elimina un post (destroy)
router.delete('/:id', (req, res) => {
    res.send('Cancellazione di un posts');
});
