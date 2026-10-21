import type { CampusEvent } from "../../types/campus-event";
import { formatDate } from "../../utils/format-date";

interface EventDetailProps {
  event: CampusEvent;
  onBack: () => void;
  onEdit: (id: string) => void;
}

function EventDetail({ event, onBack, onEdit }: EventDetailProps) {
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
        <p>{event.description}</p>
        <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem" }}>
          <button style={{ margin: 0 }} onClick={onBack}>
            ← Listeye dön
          </button>
          <button style={{ margin: 0 }} onClick={() => onEdit(event.id)}>
            Bu etkinliği güncelle
          </button>
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

