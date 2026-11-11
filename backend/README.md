# Kampüs Etkinlikleri — Backend (Express REST API)

**Öğrenci:** Deniz Opak (`2311012037`)

## Kurulum ve Çalıştırma

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

Üretim modunda başlatmak için:

```bash
npm start
```

## Ortam Değişkenleri (`.env`)

| Değişken | Varsayılan | Açıklama |
| :--- | :--- | :--- |
| `PORT` | `3000` | Express API sunucusunun dinlediği port (`http://localhost:3000`) |

## REST API Sözleşmesi

| Method | Endpoint | Amaç | Başarılı | Hata | Durum |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `GET` | `/health` | Sunucu sağlık kontrolü | `200` | — | Bu sprint |
| `GET` | `/events` | Listeyi getir (`?category=` isteğe bağlı) | `200` | — | Bu sprint |
| `GET` | `/events/:id` | Tek etkinlik | `200` | `404` | Bu sprint |
| `POST` | `/events` | Yeni etkinlik | `201` | `400` | Bu sprint |
| `PATCH` | `/events/:id` | Güncelle | `200` | `400`, `404` | Sprint 9 |
| `DELETE` | `/events/:id` | Sil | `204` | `404` | Sprint 9 |

### Durum Kodları (Status Codes)

- **`200`** tamam (OK)
- **`201`** oluşturuldu (Created)
- **`204`** içerik yok (No Content)
- **`400`** eksik/yanlış veri (Bad Request)
- **`404`** bulunamadı (Not Found)

### Standart Hata Biçimi

```json
{
  "error": {
    "message": "Event not found"
  }
}
```
