import { Link } from "react-router-dom";
import type { CampusEvent } from "../../types/campus-event";
import { formatDate } from "../../utils/format-date";

interface EventDetailProps {
  event: CampusEvent;
}

function EventDetail({ event }: EventDetailProps) {
  return (
    <article className="detay-layout">
      <figure>
        {event.image && (
          <>
            <img src={event.image} alt={`${event.title} afişi`} />
            <figcaption style={{ fontStyle: "italic", marginBottom: "1rem" }}>
              {event.title} afişi
            </figcaption>
          </>
        )}
        <h3>Açıklama</h3>
        <p style={{ display: "block" }}>{event.description}</p>
        <div className="form-butonlar" style={{ marginTop: "1.5rem" }}>
          <Link className="buton" to="/events">
            ← Listeye dön
          </Link>
          <Link className="buton" to={`/admin/${event.id}/edit`}>
            Bu etkinliği güncelle
          </Link>
        </div>
      </figure>
      <div className="kunye">
        <h3>Etkinlik Künyesi</h3>
        <dl>
          <dt>Tarih</dt>
          <dd>
            {formatDate(event.date)}, {event.time}
          </dd>
          <dt>Yer</dt>
          <dd>{event.location}</dd>
          <dt>Kategori</dt>
          <dd>{event.category}</dd>
          <dt>Kontenjan</dt>
          <dd>{event.capacity} kişi</dd>
        </dl>
      </div>
    </article>
  );
}

export default EventDetail;
