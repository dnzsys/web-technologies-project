# Kampüs Etkinlikleri — Backend (Express + MongoDB REST API)

**Öğrenci:** Deniz Opak (`2311012037`)

## Kurulum ve Çalıştırma

```bash
cd backend
npm install
cp .env.example .env
npm run seed
npm run dev
```

Üretim modunda başlatmak için:

```bash
npm start
```

## Ortam Değişkenleri (`.env`)

| Değişken | Örnek Değer | Açıklama |
| :--- | :--- | :--- |
| `PORT` | `3000` | Express API sunucusunun dinlediği port (`http://localhost:3000`) |
| `MONGODB_URI` | `mongodb://127.0.0.1:27017/kampus` | MongoDB (yerel veya Atlas) bağlantı adresi |

## REST API Sözleşmesi

| Method | Endpoint | Amaç | Başarılı | Hata | Durum |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `GET` | `/health` | Sunucu sağlık kontrolü | `200` | — | Çalışıyor |
| `GET` | `/events` | Listeyi getir (`?search=` ve `?category=` isteğe bağlı) | `200` | — | Çalışıyor |
| `GET` | `/events/upcoming` | Bugün ve sonrası etkinlikler (tarihe göre sıralı) | `200` | — | Çalışıyor |
| `GET` | `/events/:id` | Tek etkinlik (`_id` ile) | `200` | `404` | Çalışıyor |
| `POST` | `/events` | Yeni etkinlik | `201` | `400` | Çalışıyor |
| `PATCH` | `/events/:id` | Güncelle (kısmi güncelleme) | `200` | `400`, `404` | Çalışıyor |
| `DELETE` | `/events/:id` | Sil (gövdesiz yanıt) | `204` | `404` | Çalışıyor |

### Tarih Biçimi

- API genelinde tarihler `"GG-AA-YYYY"` biçimindedir (örnek: `"15-10-2026"`).
- Veritabanında gerçek `Date` olarak saklanır, JSON yanıtında `"GG-AA-YYYY"` olarak döner.

### Durum Kodları (Status Codes)

- **`200`** tamam (OK)
- **`201`** oluşturuldu (Created)
- **`204`** içerik yok (No Content — yanıt gövdesi yok)
- **`400`** eksik/yanlış veri (Bad Request — Mongoose `ValidationError` / `CastError` veya korunan alan)
- **`404`** bulunamadı (Not Found — geçersiz veya olmayan `_id`)
- **`500`** sunucu hatası (Internal Server Error)

### Standart Hata Biçimi

```json
{
  "error": {
    "message": "Event not found"
  }
}
```
