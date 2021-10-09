import EventCard from '../components/EventCard'
import Footer from '../components/Footer'

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
            <Footer />
        </div>
    )
}

export default Upcoming

