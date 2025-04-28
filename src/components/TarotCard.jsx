export function TarotCard(props) {
    
    const {card, cardIndex} = props

    return (
        <>
            <div className="tarot-card">
                <div className="card-image">
                    <img className='default-img' src={'/tarot-cards/' + card.name.toLowerCase().replace(/\s+/g, '-') + '.png'} alt={`${card.name}-large-img`}/>
                </div>
                <div className="card-info">
                    <h3>{card.name}</h3>
                    <p>{card.keywords}</p>
                    <p>{card.meaning_up}</p>
                </div>
                
            </div>
            
        </>
    )
}