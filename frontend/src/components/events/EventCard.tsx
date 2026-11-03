import { Link } from "react-router-dom";
import type { CampusEvent } from "../../types/campus-event";
import { formatDate } from "../../utils/format-date";

interface EventCardProps {
  event: CampusEvent;
}

function EventCard({ event }: EventCardProps) {
  return (
    <article className="kart">
      <h2 style={{ marginTop: 0 }}>{event.title}</h2>
      <span className="kategori-rozet">{event.category}</span>
      <div className="kart-detaylar">
        <p>Tarih: {formatDate(event.date)}, {event.time}</p>
        <p>Yer: {event.location}</p>
        <p>Kontenjan: {event.capacity} kişi</p>
      </div>
      <p style={{ display: "block", marginTop: "1rem" }}>{event.description}</p>
      <Link className="kart-link" to={`/events/${event.id}`}>
        Detayları gör
      </Link>
    </article>
  );
}

export default EventCard;
