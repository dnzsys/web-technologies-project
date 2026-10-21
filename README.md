Canlı Önizleme: https://web-technologies-project-blond.vercel.app

# Kampüs Etkinlik Yönetim Sistemi

Bu proje, Web Teknolojileri dersi kapsamında haftalık sprintler halinde geliştirilen iteratif bir web platformudur.  
**Öğrenci:** Deniz Opak (2311012037)

## 🚀 Sprint 5 - React Bileşenleri (Components, Props & Lifting State)
Bu sprint kapsamında tek dosya halindeki `App.tsx` modüler React bileşenlerine ayrılmıştır. Bileşenler arası veri akışı TypeScript `interface` ile tanımlanmış **props** üzerinden, olay bildirimleri ise **callback** fonksiyonları ile sağlanmıştır. Ortak state'ler (`page`, `selectedId`, `searchText`, `category`) **Lifting State Up** prensibiyle `App.tsx` içerisinde tutulmuştur.

### 🧩 Oluşturulan Bileşenler ve Yardımcılar
- **`src/components/layout/Header.tsx`**: Sayfa başlığı (`title`) ve isteğe bağlı alt metni (`text?`) props olarak alıp render eden başlık bileşeni.
- **`src/components/layout/Navigation.tsx`**: Aktif sayfayı (`current`) ve sayfa değiştirme callback fonksiyonunu (`onNavigate`) props olarak alan menü bileşeni.
- **`src/components/layout/Footer.tsx`**: Props almayan alt bilgi bileşeni.
- **`src/components/events/EventCard.tsx`**: Tek bir etkinliği (`CampusEvent`) ve detay gösterme fonksiyonunu (`onShowDetail`) props olarak alan kart bileşeni.
- **`src/components/events/EventList.tsx`**: Etkinlik dizisini (`events`) alıp her biri için `EventCard` çizen, liste boşsa `emptyText` mesajını gösteren liste bileşeni.
- **`src/components/events/EventFilter.tsx`**: Arama metni ve kategori filtre kutularını barındıran, değişiklikleri `onSearchChange` ve `onCategoryChange` ile üst bileşene (`App`) bildiren kontrollü form bileşeni.
- **`src/components/events/EventDetail.tsx`**: Seçili etkinliğin künyesini, açıklamasını ve varsa afişini gösteren, geri dönme (`onBack`) ve düzenleme (`onEdit`) aksiyonlarını bildiren detay bileşeni.
- **`src/components/forms/EventForm.tsx`**: Ekleme ve güncelleme sayfalarında kullanılan, gönderim olayını `onSubmit` callback'i ile yukarı bildiren form bileşeni.
- **`src/types/page.ts`**: `PageName` birleşim (union) tipini dışa aktaran tip dosyası.
- **`src/utils/format-date.ts`**: Tarih dizgesini Türkçe okunabilir formata çeviren yardımcı fonksiyon.

## 🚀 Sprint 4 - Vite, TypeScript ve React
Bu sprint kapsamında Kampüs Etkinlikleri uygulaması statik HTML/JS yapısından modern bir React ve TypeScript SPA (Single Page Application) yapısına dönüştürülmüştür.

### 📁 Proje Dosya Yapısı ve Görevleri
- **`package.json`**: Proje adı, bağımlılıklar ve çalıştırma komutlarını (`dev`, `build`, `preview`) içerir.
- **`package-lock.json`**: İndirilen paketlerin kilitlenmiş tam sürümlerini tutar.
- **`node_modules/`**: Projenin çalışması için yüklenen npm paketlerini barındırır; repoya gönderilmez.
- **`tsconfig*.json`**: TypeScript derleyici ayarlarını ve tip kontrol kurallarını tanımlar.
- **`vite.config.ts`**: Vite yapılandırmasını ve React eklentisi entegrasyonunu yönetir.
- **`index.html`**: React uygulamasının bağlandığı tek HTML şablonudur; içinde `div#root` bulunur.
- **`src/main.tsx`**: React uygulamasını başlatan ve `App` bileşenini root elemanına render eden giriş noktasıdır.
- **`src/App.tsx`**: Uygulamanın ana state yönetimini ve sayfa bileşenlerinin birleşimini içeren kök bileşendir.
- **`src/App.css`**: Sprint 3'ten devralınan ve bileşenlere uygulanan görsel stilleri içerir.
- **`src/index.css`**: Sayfa geneli için temel stilleri barındırır; boş bırakılmıştır.
- **`public/`**: Afiş (`afis.svg`) gibi doğrudan sunulan statik dosyaların bulunduğu dizindir.
- **`src/types/campus-event.ts`**: `CampusEvent` ve `Category` TypeScript tiplerini tanımlar.
- **`src/data/events.ts`**: Tiplendirilmiş 6 adet kampüs etkinliği verisini barındırır.
- **`src/utils/filter-events.ts`**: Etkinlik arama, kategoriye göre filtreleme ve id ile bulma saf fonksiyonlarını barındırır.

## 🚀 Sprint 3 - JavaScript ve DOM Manipülasyonu
- Statik veriler `data.js` içerisine taşındı ve sayfalar ES6 modülleri ile dinamik hale getirildi.

## 🚀 Sprint 2 - CSS ve Duyarlı (Responsive) Tasarım
- Öğrenci numarasına göre hesaplanan dinamik HSL renk paleti ve CSS Grid yapısı uygulandı.

## 🚀 Sprint 1 - Temel HTML İskeleti
- Semantik HTML etiketleri ile temel sayfa iskeletleri oluşturuldu.
