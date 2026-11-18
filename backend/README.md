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
| `GET` | `/health` | Sunucu sağlık kontrolü | `200` | — | Tamamlandı |
| `GET` | `/events` | Listeyi getir (`?category=` isteğe bağlı) | `200` | — | Tamamlandı |
| `GET` | `/events/:id` | Tek etkinlik (`_id` ile) | `200` | `404` | Tamamlandı |
| `POST` | `/events` | Yeni etkinlik | `201` | `400` | Tamamlandı |
| `PATCH` | `/events/:id` | Güncelle | `200` | `400`, `404` | Sprint 9 |
| `DELETE` | `/events/:id` | Sil | `204` | `404` | Sprint 9 |

### Durum Kodları (Status Codes)

- **`200`** tamam (OK)
- **`201`** oluşturuldu (Created)
- **`204`** içerik yok (No Content)
- **`400`** eksik/yanlış veri (Bad Request — Mongoose `ValidationError`)
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
