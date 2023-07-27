const express = require('express')

const app = express()
const port = 3000

app.get('/', (req,res) => res.send('Hello again, Express !'))

app.get('/api/pokemons/:id', (req,res) => {
    const id = req.params.id
    res.send(`Vous avez demané le pokémon n°${id}`)
})




app.listen(port, () => console.log(`Notre application Node est démarrée sur: http://localhost:${port}`))