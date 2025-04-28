export function Tabs(props) {

    const {selectedTab, setSelectedTab, hideInfo, setHideInfo} = props
    const tabs = ['All', 'Major', 'Minor', 'Wands', 'Cups', 'Swords', 'Pentacles']

    return (
        <>
            <div className="tabs-container">
                { tabs.map((tab, tabIndex) => {
                    return (
                        <button onClick={() => { setSelectedTab(tab)}} key={tabIndex}>{tab}</button>
                    )
                })}
            </div>
            <div className="view-container">
                <button onClick={ () => {
                    setHideInfo(!hideInfo)
                }}>
                    {hideInfo ? "Show Info" : "Hide Info"}
                </button>
            </div>
            
        </>
    )
}