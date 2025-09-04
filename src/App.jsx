import {SearchBar} from './components/SearchBar'
import {Button} from './components/Button'
import {PokemonCard} from './components/PokemonCard'
import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [pokemonId, setPokemonId] = useState(1);
  const [pokemons, setPokemons] = useState(null)

  useEffect(() => {
    const getPokemonData = async () => {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      setPokemons(response.data)
    }

    getPokemonData()
  }, [pokemonId])

  return (
    <>
      <SearchBar setPokemonId={setPokemonId}/>
      <Button pokemonId={pokemonId} setPokemonId={setPokemonId} />
      <PokemonCard pokemons={pokemons}/>  
    </>
  )
}

export default App
