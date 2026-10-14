Canlı Önizleme: https://web-technologies-project-blond.vercel.app

# Kampüs Etkinlik Yönetim Sistemi

Bu proje, Web Teknolojileri dersi kapsamında haftalık sprintler halinde geliştirilen iteratif bir web platformudur.

## 🚀 Sprint 4 - Vite, TypeScript ve React
Bu sprint kapsamında Kampüs Etkinlikleri uygulaması statik HTML/JS yapısından modern bir React ve TypeScript SPA (Single Page Application) yapısına dönüştürülmüştür. Sayfa yönlendirmeleri React `useState` kancası ile yönetilmiş, veriler TypeScript arayüzleri ile tiplendirilmiş ve filtreleme mantığı saf fonksiyonlara (pure functions) ayrılmıştır.

### 📁 Proje Dosya Yapısı ve Görevleri (Adım 2)
- **`package.json`**: Proje adı, bağımlılıklar ve çalıştırma komutlarını (`dev`, `build`, `preview`) içerir.
- **`package-lock.json`**: İndirilen paketlerin kilitlenmiş tam sürümlerini tutar.
- **`node_modules/`**: Projenin çalışması için yüklenen npm paketlerini barındırır; repoya gönderilmez.
- **`tsconfig*.json`**: TypeScript derleyici ayarlarını ve tip kontrol kurallarını tanımlar.
- **`vite.config.ts`**: Vite yapılandırmasını ve React eklentisi entegrasyonunu yönetir.
- **`index.html`**: React uygulamasının bağlandığı tek HTML şablonudur; içinde `div#root` bulunur.
- **`src/main.tsx`**: React uygulamasını başlatan ve `App` bileşenini root elemanına render eden giriş noktasıdır.
- **`src/App.tsx`**: Uygulamanın 5 sayfasını (Ana Sayfa, Etkinlikler, Detay, Ekle, Güncelle) ve state yönetimini içeren ana bileşendir.
- **`src/App.css`**: Sprint 3'ten devralınan ve bileşenlere uygulanan görsel stilleri içerir.
- **`src/index.css`**: Sayfa geneli için temel stilleri barındırır; bu sprintte boş bırakılmıştır.
- **`public/`**: Afiş (`afis.svg`) gibi doğrudan sunulan statik dosyaların bulunduğu dizindir.
- **`src/types/campus-event.ts`**: `CampusEvent` ve `Category` TypeScript tiplerini tanımlar.
- **`src/data/events.ts`**: Tiplendirilmiş 6 adet kampüs etkinliği verisini barındırır.
- **`src/utils/filter-events.ts`**: Etkinlik arama, kategoriye göre filtreleme ve id ile bulma saf fonksiyonlarını barındırır.

## 🚀 Sprint 3 - JavaScript ve DOM Manipülasyonu
Bu sprint kapsamında HTML içerisindeki statik veriler kaldırılarak sayfalar JavaScript (ES6 Modülleri) ile dinamik hale getirilmiştir.

**Tamamlanan Görevler:**
- **Merkezi Veri Yönetimi:** Tüm etkinlikler `data.js` içerisinde bir dizi objesi olarak toplandı.
- **Dinamik Render:** Ana sayfa ve liste sayfasındaki etkinlik kartları şablon metin (template literals) kullanılarak JavaScript ile dinamik olarak üretildi.
- **Anlık Arama ve Kategori Filtresi:** Arama kutusu ve kategori seçimi birbiriyle eşzamanlı çalışacak şekilde entegre edildi.
- **Dinamik Detay ve Güncelleme Sayfası:** `URLSearchParams` ile adresteki `id` okunarak ilgili etkinliğin detayları gösterildi.
- **Özel Form Doğrulama (Validation):** Hatalı alanlar vurgulanıp dinamik geri bildirimler sağlandı.

## 🚀 Sprint 2 - CSS ve Duyarlı (Responsive) Tasarım
- **Dinamik Tema:** Öğrenci numarasına göre hesaplanan HSL renk paleti ve tipografi entegre edildi.
- **Duyarlı Izgara (CSS Grid):** Etkinlik kartları telefonda tek sütun, geniş ekranda 3 sütun olarak ayarlandı.
- **Mobil Öncelikli Tasarım:** Esnek ve parmak dostu mobil uyumluluk sağlandı.

## 🚀 Sprint 1 - Temel HTML İskeleti
- Semantik HTML etiketleri (`<header>`, `<nav>`, `<main>`, `<article>`) ile sayfa iskeletleri oluşturuldu.
- Etkinlik listesi için anlamsal tablolar (`<table>`) tasarlandı.
