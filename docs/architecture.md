# UI/UX ve Geliştirilebilir Mimari Önerisi

## UI İlkeleri
- Yumuşak mavi/indigo tabanlı güven veren palet.
- Öğrenci ekranları: düşük bilişsel yük, kısa aksiyon akışları.
- Öğretmen ekranları: bilgi yoğun fakat kategorize kart + tablo düzeni.
- Mobil uyum: sidebar tek kolona düşer, tablo alanları yatay kaydırılır.

## SaaS Hazırlığı
- Çoklu kurum (multi-tenant) için ileride `organizationId` eklenebilir.
- Admin ve veli paneli için role enum'u hazır.
- Bildirim altyapısı event tabanlı queue sistemine taşınabilir.
- Rapor ekranları için `student_progress` tablosu period bazlı (günlük/haftalık/aylık).

## Ek Modüller (Roadmap)
- Toplu görev atama wizard.
- Program kopyalama (N öğrenciye tek click atama).
- PDF/Excel export servisleri.
- Başarı rozeti / motivasyon puan motoru.
- Ders bazlı net analizi ve hedef simülasyonu.
