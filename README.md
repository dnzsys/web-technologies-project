# Kampüs Etkinlikleri — Web Teknolojileri Projesi

**Canlı Vercel Adresi:** https://denizopak-frontend.vercel.app

Bu proje, Web Teknolojileri dersi kapsamında haftalık sprintler halinde geliştirilen **Kampüs Etkinlik Yönetim Sistemi** frontend uygulamasıdır.

## Kurulum ve Çalıştırma

```bash
cd frontend
npm install
npm run dev
```

Üretim (production) derlemesi almak için:

```bash
cd frontend
npm run build
```

## Route Listesi (Sprint 6 + Vize)

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

## Klasör Yapısı (`frontend/src`)

- **`components/layout/`**: `Header.tsx`, `Navigation.tsx`, `Footer.tsx`
- **`components/events/`**: `EventCard.tsx`, `EventList.tsx`, `EventFilter.tsx`, `EventDetail.tsx`
- **`components/forms/`**: `EventForm.tsx` (kontrollü form ve doğrulama)
- **`context/`**: `EventsContext.tsx` (`EventsProvider` ve `useEvents` custom hook)
- **`pages/`**: 10 sayfa bileşeni (`HomePage`, `EventsPage`, `EventDetailPage`, `AdminPage`, `AddEventPage`, `EditEventPage`, `LoginPage`, `RegisterPage`, `ForgotPasswordPage`, `NotFoundPage`)
- **`data/`**: `events.ts` (başlangıç etkinlik verileri)
- **`types/`**: `campus-event.ts` (`Category`, `CampusEvent`, `EventFormData`, `EventFormErrors`)
- **`utils/`**: `filter-events.ts`, `format-date.ts`, `validate-event.ts`

## Sprint Geçmişi

- **Sprint 6 + Vize:** `react-router-dom` ile 10 route/sayfa yapısı, `EventsContext` ile merkezi state yönetimi (ekle, güncelle, onaylı sil), kontrollü formlar ve doğrulama (`validateEvent`, giriş/kayıt/şifremi unuttum) ve mobil uyumlu yönetim tablosu eklendi.
- **Sprint 5:** Uygulama modüler React bileşenlerine ayrıldı (`props`, `callback`, bileşen mimarisi).
- **Sprint 4:** Vite + React + TypeScript SPA yapısına geçildi; arama ve kategori filtreleme eklendi.
- **Sprint 3:** ES6 modülleri ve DOM manipülasyonu ile dinamik listeleme yapıldı.
- **Sprint 2:** Öğrenci numarasına özel dinamik HSL renk teması ve duyarlı (responsive) CSS Grid kuruldu.
- **Sprint 1:** Semantik HTML5 sayfa iskeletleri oluşturuldu.
