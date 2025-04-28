import { TarotCard } from "./TarotCard"

export function TarotDeck(props) {

    const { allCards, selectedTab } = props
    /*const filteredTodosList = selectedTab === 'All' ? 
    todos : 
    selectedTab === 'Completed' ?
        todos.filter(val => val.complete) :
        todos.filter(val => !val.complete)*/

    const filteredCards = 
        selectedTab === 'Major' ? allCards.filter((card) => card.arcana === 'Major' ) :
        selectedTab === 'Minor' ? allCards.filter((card) => card.arcana === 'Minor' ) :
        selectedTab === 'Wands' ? allCards.filter((card) => card.suit === 'Wands' ) :
        selectedTab === 'Cups' ? allCards.filter((card) => card.suit === 'Cups' ) :
        selectedTab === 'Swords' ? allCards.filter((card) => card.suit === 'Swords' ) :
        selectedTab === 'Pentacles' ? allCards.filter((card) => card.suit === 'Pentacles' ) :
        allCards

    return (
        <>
            <div>This is the tarot Deck</div>
            { filteredCards.map((card, cardIndex) => {
                return (
                    <TarotCard 
                        key={cardIndex}
                        card={card}
                        cardIndex={cardIndex}
                        />
                )
            })}
        </>
    )
}