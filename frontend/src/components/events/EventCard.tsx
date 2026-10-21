import type { CampusEvent } from "../../types/campus-event";
import { formatDate } from "../../utils/format-date";

interface EventCardProps {
  event: CampusEvent;
  onShowDetail: (id: string) => void;
}

function EventCard({ event, onShowDetail }: EventCardProps) {
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
      <a
        href="#detail"
        onClick={(e) => {
          e.preventDefault();
          onShowDetail(event.id);
        }}
      >
        Detayları gör
      </a>
    </article>
  );
}

export default EventCard;

