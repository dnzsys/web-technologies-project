import { events } from "./data.js";

const list = document.querySelector("#etkinlik-listesi");
const arama = document.querySelector("#arama");
const kategoriFiltre = document.querySelector("#kategori-filtre");
const sonucSatiri = document.querySelector("#sonuc");

function createCard(event) {
    const formattedDate = new Date(event.date).toLocaleDateString("tr-TR", {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    
    return `<article class="kart">
        <h2 style="margin-top: 0;">${event.title}</h2>
        <span class="kategori-rozet">${event.category}</span>
        <div class="kart-detaylar">
            <p>Tarih: ${formattedDate}, ${event.time}</p>
            <p>Yer: ${event.location}</p>
            <p>Kontenjan: ${event.capacity} kişi</p>
        </div>
        <p style="display: block; margin-top: 1rem;">${event.description}</p>
        <a href="etkinlik-detay.html?id=${event.id}">Detayları gör</a>
    </article>`;
}

function render(dizi) {
    list.innerHTML = dizi.map(createCard).join("");
}

if (list && list.dataset.limit) {
    const yaklasan = [...events]
        .sort((a, b) => a.date.localeCompare(b.date))
        .slice(0, Number(list.dataset.limit));
    render(yaklasan);
} else {
    render(events);
    
    if (kategoriFiltre) {
        const categories = new Set(events.map(e => e.category));
        categories.forEach(cat => {
            const option = document.createElement("option");
            option.value = cat;
            option.textContent = cat;
            kategoriFiltre.appendChild(option);
        });
        
        const filtrele = () => {
            const aranan = arama.value.toLocaleLowerCase("tr-TR");
            const secilenKategori = kategoriFiltre.value;
            
            const sonuc = events.filter(e => {
                const metinUyuyor = e.title.toLocaleLowerCase("tr-TR").includes(aranan) || 
                                    e.description.toLocaleLowerCase("tr-TR").includes(aranan) ||
                                    e.location.toLocaleLowerCase("tr-TR").includes(aranan);
                const kategoriUyuyor = secilenKategori === "" || e.category === secilenKategori;
                return metinUyuyor && kategoriUyuyor;
            });
            
            render(sonuc);
            if (sonuc.length === 0) {
                sonucSatiri.textContent = "Aramanıza uygun etkinlik bulunamadı.";
            } else {
                sonucSatiri.textContent = `${sonuc.length} etkinlik listeleniyor.`;
            }
        };

        arama.addEventListener("input", filtrele);
        kategoriFiltre.addEventListener("change", filtrele);
        const form = document.querySelector("#filtre-formu");
        if(form) form.addEventListener("submit", (e) => { e.preventDefault(); filtrele(); });
        
        sonucSatiri.textContent = `${events.length} etkinlik listeleniyor.`;
    }
}
