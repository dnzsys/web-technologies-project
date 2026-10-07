# Kampüs Etkinlik Yönetim Sistemi

Bu proje, Web Teknolojileri dersi kapsamında haftalık sprintler halinde geliştirilen iteratif bir web platformudur. 

## 🌐 Canlı Önizleme (Live URL)
**Vercel Adresi:** https://web-technologies-project-blond.vercel.app

## 🚀 Sprint 3 - JavaScript ve DOM Manipülasyonu
Bu sprint kapsamında HTML içerisindeki statik veriler kaldırılarak sayfalar JavaScript (ES6 Modülleri) ile dinamik hale getirilmiştir.

**Tamamlanan Görevler:**
- **Merkezi Veri Yönetimi:** Tüm etkinlikler `data.js` içerisinde bir dizi objesi olarak toplandı.
- **Dinamik Render:** Ana sayfa ve liste sayfasındaki etkinlik kartları şablon metin (template literals) kullanılarak JavaScript ile dinamik olarak üretildi.
- **Anlık Arama ve Kategori Filtresi:** Arama kutusu ve kategori seçimi birbiriyle eşzamanlı çalışacak şekilde (input & change eventleri) entegre edildi.
- **Dinamik Detay ve Güncelleme Sayfası:** `URLSearchParams` ile adresteki `id` okunarak o anki etkinliğin detayları sayfaya basıldı ve geçersiz ID durumlarında uygulamanın çökmesi engellenip özel hata kutusu gösterildi. Aynı yapı güncelleme formu için de kuruldu.
- **Özel Form Doğrulama (Validation):** HTML form uyarıları (`novalidate`) kapatılarak JavaScript ile detaylı doğrulama yapıldı, hatalı alanlar vurgulanıp dinamik hata mesajları gösterildi. Veri doğruysa sayfa yenilenmeden JSON olarak konsol ve ekrana basılması sağlandı.

## 🚀 Sprint 2 - CSS ve Duyarlı (Responsive) Tasarım
Bu sprint kapsamında projenin anlamsal HTML iskeletine stil giydirilmiş ve platform tüm cihazlara uyumlu hale getirilmiştir.

**Tamamlanan Görevler:**
- **Dinamik Tema:** Öğrenci numarasının mod(360) değeri alınarak projeye özgün bir renk paleti (HSL) ve tipografi entegre edildi.
- **Duyarlı Izgara (CSS Grid):** Etkinlik kartları telefonda tek sütun, geniş ekranlarda üç sütun olacak şekilde `grid-template-columns` ile ayarlandı.
- **Mobil Öncelikli Tasarım:** Sitenin taşma yapmadan, parmak dostu butonlarla mobil cihazlarda kusursuz çalışması sağlandı.
- **Görsel Düzenlemeler:** Üst menü (header) tam genişliğe yayıldı, detay sayfasına etkinlik afişi eklendi ve hatalı form girişleri için `:invalid` uyarıları aktifleştirildi.

## 🚀 Sprint 1 - Temel HTML İskeleti
- Semantik HTML etiketleri (`<header>`, `<nav>`, `<main>`, `<article>`) ile sayfa iskeletleri oluşturuldu.
- Etkinlik listesi için anlamsal tablolar (`<table>`) tasarlandı.
- Form elemanları ve navigasyon bağlantıları eklendi.
