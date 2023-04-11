import React from 'react'
import { PokemonProvider } from './Context/PokemonContext'
import { Routes, Route } from 'react-router-dom'
import { Homepage, PokemonPage } from './Pages/Pages'
import './Styles/App.css'

function App() {
  return (
    <div className='App'>
      <PokemonProvider>
        <Routes>
          <Route path='/' element={ <Homepage/> } />
          <Route path='pokemon/:id' element={ <PokemonPage/> } />
        </Routes> 
      </PokemonProvider>
    </div>
  )
}

export default App