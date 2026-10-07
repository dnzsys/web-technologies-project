import { events } from "./data.js";

const id = new URLSearchParams(location.search).get("id");
const event = events.find((e) => e.id === id);
const container = document.querySelector("#detay");
const h1 = document.querySelector("h1");

if (!event) {
    document.title = "Etkinlik bulunamadı";
    if (h1) h1.textContent = "Etkinlik bulunamadı";
    
    container.innerHTML = `
        <div style="border: 1px solid red; color: red; padding: 1rem; margin-bottom: 1rem; background-color: #ffe6e6; border-radius: var(--kose);">
            "${id || 'id yok'}" numaralı bir etkinlik yok. Listeden bir etkinlik seçin.
        </div>
        <button onclick="window.location.href='etkinlikler.html'">← Listeye dön</button>
    `;
} else {
    document.title = event.title;
    if (h1) h1.textContent = event.title;
    
    const formattedDate = new Date(event.date).toLocaleDateString("tr-TR", {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    
    container.innerHTML = `
        <article class="detay-layout">
            <figure>
                <img src="afis.jpg" alt="${event.title} Afişi">
                <figcaption style="font-style: italic; margin-bottom: 1rem;">${event.title} afişi</figcaption>
                
                <h3>Açıklama</h3>
                <p>${event.description}</p>
                <div style="display: flex; gap: 1rem; margin-top: 1.5rem;">
                    <button style="margin: 0;" onclick="window.location.href='etkinlikler.html'">← Listeye dön</button>
                    <button style="margin: 0;" onclick="window.location.href='etkinlik-guncelle.html?id=${event.id}'">Bu etkinliği güncelle</button>
                </div>
            </figure>
            <div class="kunye">
                <h3>Etkinlik Künyesi</h3>
                <dl>
                    <dt>Tarih</dt>
                    <dd>${formattedDate}, ${event.time}</dd>
                    <dt>Yer</dt>
                    <dd>${event.location}</dd>
                    <dt>Kategori</dt>
                    <dd>${event.category}</dd>
                    <dt>Kontenjan</dt>
                    <dd>${event.capacity} kişi</dd>
                </dl>
            </div>
        </article>
    `;
}
