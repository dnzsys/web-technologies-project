# Kampüs Etkinlikleri — Web Teknolojileri Projesi

**Öğrenci:** Deniz Opak (`2311012037`)  
**Canlı Vercel Adresi:** https://denizopak-frontend.vercel.app

Bu proje, Web Teknolojileri dersi kapsamında haftalık sprintler halinde geliştirilen **Kampüs Etkinlik Yönetim Sistemi** (`frontend/` ve `backend/`) uygulamasıdır.

## Klasör Yapısı

- **`frontend/`**: React + Vite + TypeScript SPA uygulaması (`http://localhost:5173`)
- **`backend/`**: Node.js + Express REST API sunucusu (`http://localhost:3000`)

## Kurulum ve Çalıştırma

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend (Sprint 7 — Express REST API)

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

Detaylı REST API sözleşmesi için [`backend/README.md`](./backend/README.md) dosyasına, Postman koleksiyonu için [`backend/requests/kampus-api.json`](./backend/requests/kampus-api.json) dosyasına bakabilirsiniz.

## Frontend Route Listesi (Sprint 6 + Vize)

| Adres | Sayfa Bileşeni | Açıklama |
| :--- | :--- | :--- |
| `/` | `HomePage` | Tarihe göre yaklaşan ilk 2 etkinliği listeler |
| `/events` | `EventsPage` | Tüm etkinlikleri arama ve kategori filtresiyle listeler |
| `/events/:id` | `EventDetailPage` | Seçili etkinliğin afişi, künyesi ve açıklamasını gösterir |
| `/admin` | `AdminPage` | Etkinlik yönetim tablosu (yeni ekle, düzenle, onaylı sil) |
| `/admin/new` | `AddEventPage` | Doğrulamalı kontrollü form ile yeni etkinlik ekler |
| `/admin/:id/edit` | `EditEventPage` | Mevcut etkinlik bilgilerini formda doldurup günceller |
| `/login` | `LoginPage` | Giriş formu ve alan doğrulaması (demo) |
| `/register` | `RegisterPage` | Kayıt formu ve şifre eşleşme doğrulaması (demo) |
| `/forgot-password` | `ForgotPasswordPage` | Şifre yenileme bağlantısı gönderim formu (demo) |
| `*` | `NotFoundPage` | Eşleşmeyen adresler ve bulunamayan etkinlikler için 404 sayfası |
