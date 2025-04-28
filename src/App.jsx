import { useState } from 'react'
import { tarotCards } from "./utils"
import { TarotDeck } from './components/TarotDeck'
import { Tabs } from './components/Tabs'




function App() {

  const allCards = tarotCards
  const [selectedTab, setSelectedTab] = useState('All')
  const [hideInfo, setHideInfo] = useState(false)

  return (
    <div className="container">
      <h1>Explore the Tarot Deck</h1>
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} hideInfo={hideInfo} setHideInfo={setHideInfo} />
      <TarotDeck allCards={allCards} selectedTab={selectedTab} hideInfo={hideInfo}/>
    </div>
  )
}

export default App
