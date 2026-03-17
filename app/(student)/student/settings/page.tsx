import { AppShell } from '@/components/layout/AppShell';

export default function StudentSettingsPage() {
  return (
    <AppShell title="Ayarlar / Profil" subtitle="Hesap ve görünüm tercihleri" links={[{ href: '/student/dashboard', label: 'Dashboard' }]}>
      <section className="pageCard">
        <h3>Hesap Ayarları</h3>
        <p>Şifre güncelleme, tema tercihi, iletişim izinleri ve veli paneli genişlemesi için uygun yapı hazırlanmıştır.</p>
      </section>
    </AppShell>
  );
}
