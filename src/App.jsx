import { useState } from 'react'
import { tarotCards } from "./utils"
import { TarotDeck } from './components/TarotDeck'

const allCards = tarotCards

function App() {
  

  return (
    <>
      <TarotDeck allCards={allCards}/>
    </>
  )
}

export default App
