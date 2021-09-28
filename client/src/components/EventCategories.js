import CategoryCard from "./EventCategoryCard";
import { Link } from "react-router-dom";

export default function EventCategories() {
  return (
    <div className="event-categories">
      <div className="event-categories--container">
        <Link to="/upcoming"><CategoryCard heading="Upcoming Events" /></Link>
        <CategoryCard heading="Live Events" />
        <CategoryCard heading="Past Events" />
      </div>
    </div>
  );
}
