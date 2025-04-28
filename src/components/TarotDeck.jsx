import { TarotCard } from "./TarotCard"

export function TarotDeck(props) {

    const { allCards, selectedTab, hideInfo } = props
    const filteredCards = 
        selectedTab === 'Major' ? allCards.filter((card) => card.arcana === 'Major' ) :
        selectedTab === 'Minor' ? allCards.filter((card) => card.arcana === 'Minor' ) :
        selectedTab === 'Wands' ? allCards.filter((card) => card.suit === 'Wands' ) :
        selectedTab === 'Cups' ? allCards.filter((card) => card.suit === 'Cups' ) :
        selectedTab === 'Swords' ? allCards.filter((card) => card.suit === 'Swords' ) :
        selectedTab === 'Pentacles' ? allCards.filter((card) => card.suit === 'Pentacles' ) :
        allCards

    return (
        <div className={"tarot-deck " + (hideInfo ? ' hide-info' : ' ')}>
            
            { filteredCards.map((card, cardIndex) => {
                return (
                    <TarotCard 
                        key={cardIndex}
                        card={card}
                        cardIndex={cardIndex}
                        hideInfo={hideInfo}
                        />
                )
            })}
        </div>
    )
}