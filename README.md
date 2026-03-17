# Falez Akademi - Eğitim Takip Sistemi

Next.js App Router tabanlı, öğretmen/öğrenci rollerine sahip, ölçeklenebilir bir eğitim takip sistemi demosu.

## Öne Çıkan Özellikler
- Rol bazlı panel (Öğretmen, Öğrenci, Admin'e genişletilebilir).
- Öğrenci yönetimi, öğrenci detayı, görev ve ilerleme takibi.
- Haftalık program oluşturma + alan türüne göre ders şablonları.
- Öğrenci görev tamamlama durumları (Yapılmadı, Devam Ediyor, Tamamlandı).
- Öğretmen notları, görünürlük yönetimi (öğrenciye açık/özel not).
- Bildirim merkezi (panel içi), SMS/e-posta/WhatsApp entegrasyonuna uygun mimari.
- Devamsızlık/yoklama yönetimi ve geçmiş kayıtlar.
- Responsive, sade, profesyonel UI.

## Proje Yapısı

```txt
app/
  login/
  (teacher)/teacher/
    dashboard/
    students/
    students/[id]/
    weekly-program/
    weekly-program/create/
    attendance/
    notifications/
    notes/
    settings/
  (student)/student/
    dashboard/
    notifications/
    notes/
    settings/
components/
  layout/
  dashboard/
  common/
lib/
  data/
  types/
prisma/
  schema.prisma
styles/
  components/
```

## Kullanıcı Akışı
1. Kullanıcı login ekranında rol seçerek giriş yapar.
2. Öğretmen dashboard üzerinden öğrenci, haftalık program, not, yoklama süreçlerini yönetir.
3. Öğrenci dashboard üzerinden görevlerini günceller, not/bildirimlerini görür.
4. Sistem; görev, not, yoklama ve bildirim olaylarını kayıt altına alır.

## Mimari Notlar
- App Router ile route segment bazlı domain ayrımı (`(teacher)` / `(student)`).
- Ortak UI bileşenleri (`AppShell`, `StatsGrid`, `DataTable`) ile tekrar kullanılabilirlik.
- `lib/data/mock-data.ts` ile demoda çalışan veri katmanı.
- `prisma/schema.prisma` ile production'a taşınabilir veri modeli.
- API için öneri: `app/api/*` altında route handlers + service katmanı (`lib/services/*`).

## Çalıştırma
```bash
npm install
npm run dev
```
