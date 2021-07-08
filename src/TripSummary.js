import React from 'react'

const TripSummary = () => {
    return (
        <div>
        <div className="heading">
        <div className="left-trip-summary">
            <h2>Trip Summary</h2>
            <span>Dashboard &nbsp; &nbsp; /</span> <span>Trip Summary</span>
        </div>
            <div className="right-trip-summary">
                <span>From</span>
                <input type="date"/>
                <span>To</span>
                <input type="date"/>
                <button>Search</button>
                <button>Export</button>
            </div>
        </div>
        <div className="left-right">
        <div className="trip-summary">
        <div className="top-trip-summary">
            <div className="first">DL1W6461(TATA ACE)</div>
            <div className="second">Total trips:11</div>
            <div className="third">Total KM : 497.0 KM</div>

        </div>
        <div className="bottom-trip-summary">
            <div className="first">Total Time: 10 hrs 42min</div>
            <div className="second">Total Time: 15 hrs 46min</div>
            <div className="third">Total Exp : Rs. 2000.0</div>
        </div>
        </div>
        <div className="other-exp">Other Exp : Rs 0.00</div>
        </div>
        </div>
    )
}
export default TripSummary