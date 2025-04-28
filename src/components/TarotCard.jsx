export function TarotCard(props) {
    
    const {card, cardIndex} = props

    return (
        <>
            <div className="tarot-card">
                <h3>{card.name}</h3>
                <img className='default-img' src={'/tarot-cards/' + card.name.toLowerCase().replace(/\s+/g, '-') + '.png'} alt={`${name}-large-img`}/>
                <p>{card.keywords}</p>
                <p>{card.meaning_up}</p>
            </div>
            
        </>
    )
}