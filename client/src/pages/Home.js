import Hero from '../components/Hero';
import EventCategories from '../components/EventCategories';
import Footer from '../components/Footer';
export default function Home() {
    return (
        <div className="home">
        <Hero/> 
        <EventCategories/>
        <Footer />
        </div>
    )
}
