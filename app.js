require('dotenv').config()
const express = require('express')
const { PORT } = require('./src/utils/constants')
const { getPokemon, getPokemons } = require('./src/services/pokemon')

const app = express()

// HOME ---------------------------------------------------
app.get('/', (_req, res) => res.send('Hello again, Express !'))

// POKEMON ---------------------------------------------------
app.get('/api/pokemons', getPokemons)
app.get('/api/pokemon/:id', getPokemon)

// START ---------------------------------------------------
app.listen(PORT, () =>
  console.log(
    `Notre application Node est démarrée sur: http://localhost:${PORT}`
  )
)
