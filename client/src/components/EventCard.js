import React from 'react'
import "./EventCard.css"
import EventIcon from '@material-ui/icons/Event';
import GroupIcon from '@material-ui/icons/Group';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AddToCalendar from 'react-add-to-calendar';
import moment from 'moment'

function EventCard() {
    let event = {
        title: 'Sample Event',
        description: 'This is the sample event provided as an example only',
        location: 'Portland, OR',
        startTime: '2016-09-16T20:15:00-04:00',
        endTime: '2016-09-16T21:45:00-04:00'
    }
    return (
        <div className="card">
           <h1>EV session by HOFARS</h1>
           <div className="flex-row">
                <EventIcon className="icon"/>
                <p>30 Sept, 8:00PM IST</p>
           </div>
           <div className="flex-row" title="Organizers">
                <GroupIcon className="icon"/>
                <p>Hofars</p>
           </div>
           <div className="buttons flex-row">
                <button className="button" title="Add to calendar">
                    <CalendarTodayIcon/>
                    {/* <AddToCalendar event={event} /> */}
                </button>
                {/* <AddToCalendar event={event} /> */}
                <button className="attend">Attend</button>
           </div>
           
        </div>
    )
}

export default EventCard
