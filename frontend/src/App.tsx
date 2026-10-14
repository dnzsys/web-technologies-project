import { useState, useEffect } from "react";
import "./App.css";
import { events } from "./data/events";
import type { CampusEvent, Category } from "./types/campus-event";
import { searchEvents, filterByCategory, findEventById } from "./utils/filter-events";

export type PageName = "home" | "events" | "detail" | "add" | "update";

function App() {
  const [page, setPage] = useState<PageName>("home");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState<Category | "">("");

  function go(next: PageName, id: string | null = null) {
    setPage(next);
    setSelectedId(id);
  }

  const selected = selectedId ? findEventById(events, selectedId) : undefined;

  let pageTitle = "Ana Sayfa";
  if (page === "home") pageTitle = "Ana Sayfa";
  else if (page === "events") pageTitle = "Tüm Etkinlikler";
  else if (page === "detail") pageTitle = selected ? selected.title : "Etkinlik Detayı";
  else if (page === "add") pageTitle = "Etkinlik Ekle";
  else if (page === "update") pageTitle = "Etkinlik Güncelle";

  useEffect(() => {
    document.title = `Kampüs Etkinlikleri — ${pageTitle}`;
  }, [pageTitle]);

  const upcoming = [...events]
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, 2);

  const categories: Category[] = [...new Set(events.map((e) => e.category))];
  const filtered = filterByCategory(searchEvents(events, searchText), category);

  function formatDate(d: string) {
    return new Date(d).toLocaleDateString("tr-TR", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  }

  function renderCard(event: CampusEvent) {
    return (
      <article className="kart" key={event.id}>
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
            go("detail", event.id);
          }}
        >
          Detayları gör
        </a>
      </article>
    );
  }

  const menuItems: { id: PageName; label: string }[] = [
    { id: "home", label: "Ana Sayfa" },
    { id: "events", label: "Etkinlikler" },
    { id: "add", label: "Ekle" }
  ];

  return (
    <>
      <header>
        {page === "home" && (
          <>
            <h1>Kampüs Etkinlikleri</h1>
            <p>Fakültedeki seminer, atölye ve söyleşileri tek yerden takip edin.</p>
          </>
        )}
        {page === "events" && (
          <>
            <h1>Tüm Etkinlikler</h1>
            <p>Ekim ayında kampüste düzenlenen etkinlikler.</p>
          </>
        )}
        {page === "detail" && (
          <h1>{selected ? selected.title : "Etkinlik Detayı"}</h1>
        )}
        {page === "add" && <h1>Etkinlik Ekle</h1>}
        {page === "update" && <h1>Etkinlik Güncelle</h1>}

        <nav>
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={page === item.id ? "page" : undefined}
              className={page === item.id ? "aktif" : ""}
              onClick={(e) => {
                e.preventDefault();
                go(item.id);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        {page === "home" && (
          <section>
            <h2>Yaklaşan 2 Etkinlik</h2>
            <div className="etkinlik-listesi ikili-grid">
              {upcoming.map(renderCard)}
            </div>
            <button
              style={{ width: "auto", margin: "1.5rem 0 0 0" }}
              onClick={() => go("events")}
            >
              Tüm etkinlikleri gör
            </button>
          </section>
        )}

        {page === "events" && (
          <section>
            <form className="filtre" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="search-input">Etkinlik ara</label>
              <input
                id="search-input"
                type="search"
                placeholder="Örn. atölye, kariyer"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <label htmlFor="category-select">Kategori</label>
              <select
                id="category-select"
                value={category}
                onChange={(e) => setCategory(e.target.value as Category | "")}
              >
                <option value="">Tümü</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </form>
            <p id="sonuc">
              {filtered.length === 0
                ? "Aramanıza uygun etkinlik bulunamadı."
                : `${filtered.length} etkinlik listeleniyor.`}
            </p>
            <div className="etkinlik-listesi">
              {filtered.map(renderCard)}
            </div>
          </section>
        )}

        {page === "detail" && (
          <>
            {!selected && (
              <div>
                <div
                  style={{
                    border: "1px solid red",
                    color: "red",
                    padding: "1rem",
                    marginBottom: "1rem",
                    backgroundColor: "#ffe6e6",
                    borderRadius: "var(--kose)"
                  }}
                >
                  "{selectedId || "id yok"}" numaralı bir etkinlik yok. Listeden bir etkinlik seçin.
                </div>
                <button
                  style={{ width: "auto", margin: 0 }}
                  onClick={() => go("events")}
                >
                  ← Listeye dön
                </button>
              </div>
            )}
            {selected && (
              <article className="detay-layout">
                <figure>
                  {selected.image && (
                    <>
                      <img src={selected.image} alt={`${selected.title} afişi`} />
                      <figcaption style={{ fontStyle: "italic", marginBottom: "1rem" }}>
                        {selected.title} afişi
                      </figcaption>
                    </>
                  )}
                  <h3>Açıklama</h3>
                  <p>{selected.description}</p>
                  <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem" }}>
                    <button style={{ margin: 0 }} onClick={() => go("events")}>
                      ← Listeye dön
                    </button>
                    <button
                      style={{ margin: 0 }}
                      onClick={() => go("update", selected.id)}
                    >
                      Bu etkinliği güncelle
                    </button>
                  </div>
                </figure>
                <div className="kunye">
                  <h3>Etkinlik Künyesi</h3>
                  <dl>
                    <dt>Tarih</dt>
                    <dd>{formatDate(selected.date)}, {selected.time}</dd>
                    <dt>Yer</dt>
                    <dd>{selected.location}</dd>
                    <dt>Kategori</dt>
                    <dd>{selected.category}</dd>
                    <dt>Kontenjan</dt>
                    <dd>{selected.capacity} kişi</dd>
                  </dl>
                </div>
              </article>
            )}
          </>
        )}

        {(page === "add" || page === "update") && (
          <section>
            <p>Bu sprintte form sadece görünüm; kayıt yapılmaz.</p>
            <form className="form" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="title">Etkinlik Adı</label>
              <input
                id="title"
                maxLength={80}
                placeholder="Örn. Kariyer Günleri 2026"
              />

              <label htmlFor="category">Kategori</label>
              <select id="category">
                <option value="">Seçiniz</option>
                <option value="Seminer">Seminer</option>
                <option value="Atölye">Atölye</option>
                <option value="Söyleşi">Söyleşi</option>
                <option value="Yarışma">Yarışma</option>
              </select>

              <label htmlFor="date">Tarih</label>
              <input id="date" type="date" />

              <label htmlFor="time">Saat</label>
              <input id="time" type="time" />

              <label htmlFor="location">Yer</label>
              <input id="location" placeholder="Örn. A Blok Konferans Salonu" />

              <label htmlFor="capacity">Kontenjan</label>
              <input id="capacity" type="number" />

              <label htmlFor="description">Açıklama</label>
              <textarea id="description" rows={5} />

              <button type="submit">
                {page === "update" ? "Güncelle" : "Kaydet"}
              </button>
            </form>
          </section>
        )}
      </main>

      <footer>
        <p style={{ textAlign: "center", fontSize: "0.85rem", color: "#666" }}>
          Deniz Opak &middot; 2311012037 &middot; 2026
        </p>
      </footer>
    </>
  );
}

export default App;
