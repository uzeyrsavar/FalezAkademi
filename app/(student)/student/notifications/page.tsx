import { AppShell } from '@/components/layout/AppShell';
import { DataTable } from '@/components/common/DataTable';
import { notifications } from '@/lib/data/mock-data';

export default function StudentNotificationsPage() {
  return (
    <AppShell title="Bildirimler" subtitle="Öğrenci bildirim merkezi" links={[{ href: '/student/dashboard', label: 'Dashboard' }]}>
      <DataTable
        headers={['Başlık', 'Açıklama', 'Tarih', 'Durum']}
        rows={notifications
          .filter((notification) => notification.targetRole === 'student')
          .map((notification) => [notification.title, notification.description, notification.createdAt, notification.isRead ? 'Okundu' : 'Yeni'])}
      />
    </AppShell>
  );
}
