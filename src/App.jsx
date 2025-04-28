import { useState } from 'react'
import { tarotCards } from "./utils"
import { TarotDeck } from './components/TarotDeck'
import { Tabs } from './components/Tabs'




function App() {

  const allCards = tarotCards
  const [selectedTab, setSelectedTab] = useState('All')

  return (
    <>
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <TarotDeck allCards={allCards} selectedTab={selectedTab}/>
    </>
  )
}

export default App
