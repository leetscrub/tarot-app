import { TarotCard } from "./TarotCard"

export function TarotDeck(props) {

    const { allCards } = props

    return (
        <>
            <div>This is the tarot Deck</div>
            { allCards.map((card, cardIndex) => {
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