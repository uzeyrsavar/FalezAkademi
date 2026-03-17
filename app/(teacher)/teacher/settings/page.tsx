import { AppShell } from '@/components/layout/AppShell';

export default function TeacherSettingsPage() {
  return (
    <AppShell title="Ayarlar / Profil" subtitle="Kurum ve kullanıcı ayarları" links={[{ href: '/teacher/dashboard', label: 'Dashboard' }]}>
      <section className="pageCard">
        <h3>Tema ve Bildirim Ayarları</h3>
        <p>Koyu/Açık tema, e-posta/SMS/WhatsApp entegrasyon anahtarları için genişletilebilir ayar mimarisi hazır.</p>
      </section>
    </AppShell>
  );
}
