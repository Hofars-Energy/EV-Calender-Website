import CategoryCard from "./EventCategoryCard";

export default function EventCategories() {
  return (
    <div className="event-categories">
      <div className="event-categories--container">
        <CategoryCard heading="Upcoming Events" />
        <CategoryCard heading="Live Events" />
        <CategoryCard heading="Past Events" />
      </div>
    </div>
  );
}
