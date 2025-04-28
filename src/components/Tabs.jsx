export function Tabs(props) {

    const {selectedTab, setSelectedTab} = props
    const tabs = ['All', 'Major', 'Minor', 'Wands', 'Cups', 'Swords', 'Pentacles']
    
    return (
        <>
            <div className="tabs-container">
                <p>This is the tabs container</p>
                { tabs.map((tab, tabIndex) => {
                    return (
                        <button onClick={() => { setSelectedTab(tab)}} key={tabIndex}>{tab}</button>
                    )
                })}
            </div>
            
        </>
    )
}