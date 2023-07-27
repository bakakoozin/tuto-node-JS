const { pokemons } = require('../datasources/pokemon.mock')
const { success } = require('../utils/helper')

// on ne met pas la logique dans le controller, mais dans le service

function getPokemons(_req, res) {
  res.send(
    success(
      'Liste des pokémons disponibles',
      pokemons.map((pokemon) => ({
        id: pokemon.id,
        name: pokemon.name,
      }))
    )
  )
}

function getPokemon(req, res) {
  const id = parseInt(req.params.id)
  const pokemon = pokemons.find((pokemon) => pokemon.id === id)

  //il faut gérer le cas ou le pokemon n'existe pas
  if (!pokemon)
    return res.status(404).json({ error: "Le pokémon demandé n'existe pas" })

  // si le pokemon existe, on renvoie un message de succès et le pokemon
  const message = 'Un pokémon a bien été trouvé'
  res.json(success(message, pokemon))
}

module.exports = {
  getPokemons,
  getPokemon,
}
