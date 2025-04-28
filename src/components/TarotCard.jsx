export function TarotCard(props) {
    
    const {card, cardIndex, hideInfo} = props

    return (
        <>
            <div className="tarot-card">
                <div className="card-image">
                    <img className='default-img' src={'/tarot-cards/' + card.name.toLowerCase().replace(/\s+/g, '-') + '.png'} alt={`${card.name}-large-img`}/>
                </div>
                <div className="card-info">
                    <h2>{card.name}</h2>
                    <p>{card.arcana} &#9900; {card.number} &#9900; {card.suit}</p>
                    <p className="card-keywords">{card.keywords.map((keyword, keywordIndex) => {
                        return (
                            <span key={keywordIndex}>{keyword} &#9900; </span>
                        )
                    })}</p>
                    <p>{card.meaning_up}</p>
                    <p>{card.detailed_description}</p>
                </div>
                
            </div>
            
        </>
    )
}