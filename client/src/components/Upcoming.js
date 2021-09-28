import React from 'react'
import "./Upcoming.css"
import EventCard from './EventCard'

function Upcoming() {
    return (
        <div className="section">
            <div className="events">
                <EventCard/>
                <EventCard/>
                <EventCard/>
                <EventCard/>
                <EventCard/>
                <EventCard/>
            </div>
        </div>
    )
}

export default Upcoming

