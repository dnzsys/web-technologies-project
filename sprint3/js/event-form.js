import { events } from "./data.js";

const form = document.querySelector("#etkinlik-formu");
const mesaj = document.querySelector("#form-mesaj");

const mode = form?.dataset.mode;
let updateId = null;

if (mode === "guncelle") {
    const id = new URLSearchParams(location.search).get("id");
    const etkinlik = events.find((e) => e.id === id);
    
    if (etkinlik) {
        updateId = id;
        form.elements.ad.value = etkinlik.title;
        form.elements.kategori.value = etkinlik.category;
        form.elements.tarih.value = etkinlik.date;
        form.elements.saat.value = etkinlik.time;
        form.elements.yer.value = etkinlik.location;
        form.elements.kontenjan.value = etkinlik.capacity || "";
        form.elements.aciklama.value = etkinlik.description || "";
    } else {
        form.outerHTML = `
            <div style="color: red; border: 1px solid red; padding: 1rem; border-radius: var(--kose); background-color: #ffe6e6;">
                Güncellenecek etkinlik seçilmedi. Önce listeden bir etkinlik seçin, detay sayfasındaki "Bu etkinliği güncelle" butonunu kullanın.
            </div>
            <a href="etkinlikler.html" style="text-decoration: none;"><button style="margin: 1rem 0; width: auto; background-color: #1e7022;">Etkinliklere git</button></a>
        `;
    }
}

if (form && document.body.contains(form)) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const fd = new FormData(form);
        const data = {
            id: updateId ? updateId : `event-${events.length + 1}`,
            title: fd.get("ad").trim(),
            category: fd.get("kategori"),
            date: fd.get("tarih"),
            time: fd.get("saat"),
            location: fd.get("yer").trim(),
            capacity: fd.get("kontenjan") ? Number(fd.get("kontenjan")) : null,
            description: fd.get("aciklama").trim()
        };
        
        const errors = {};
        
        if (data.title.length < 3) errors.ad = "Etkinlik adı en az 3 karakter olmalı.";
        if (!data.category) errors.kategori = "Bir kategori seçin.";
        if (!data.date) errors.tarih = "Tarih seçin.";
        if (!data.time) errors.saat = "Saat seçin.";
        if (!data.location) errors.yer = "Yer bilgisini yazın.";
        if (data.capacity !== null && (data.capacity < 1 || data.capacity > 1000)) errors.kontenjan = "Kontenjan 1 ile 1000 arasında olmalı.";
        
        ["ad", "kategori", "tarih", "saat", "yer", "kontenjan", "aciklama"].forEach(alan => {
            const el = document.getElementById(alan);
            if (el) el.removeAttribute("aria-invalid");
            const errEl = document.getElementById(`${alan}-hata`);
            if (errEl) errEl.textContent = "";
        });
        
        if (Object.keys(errors).length > 0) {
            for (const [alan, hataMesaji] of Object.entries(errors)) {
                const el = document.getElementById(alan);
                if (el) el.setAttribute("aria-invalid", "true");
                const errEl = document.getElementById(`${alan}-hata`);
                if (errEl) errEl.textContent = hataMesaji;
            }
            mesaj.innerHTML = "";
            return;
        }
        
        const successText = mode === "guncelle" ? "Etkinlik güncellendi (bu sprintte kaydedilmez):" : "Etkinlik oluşturuldu (bu sprintte kaydedilmez):";
        mesaj.innerHTML = `
            <div style="border: 1px solid #1e7022; background-color: #eaf5eb; padding: 1rem; border-radius: var(--kose); color: #1e7022;">
                <p style="margin-top: 0; margin-bottom: 0.5rem;">${successText}</p>
                <pre style="margin: 0; color: #333; font-family: monospace;">${JSON.stringify(data, null, 2)}</pre>
            </div>
        `;
    });
}
