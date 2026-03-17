import { AppShell } from '@/components/layout/AppShell';
import { DataTable } from '@/components/common/DataTable';
import { notifications } from '@/lib/data/mock-data';

export default function TeacherNotificationsPage() {
  return (
    <AppShell title="Bildirimler" subtitle="Öğretmen bildirim merkezi" links={[{ href: '/teacher/dashboard', label: 'Dashboard' }]}>
      <DataTable
        headers={['Başlık', 'Açıklama', 'Tarih', 'Durum']}
        rows={notifications
          .filter((notification) => notification.targetRole === 'teacher')
          .map((notification) => [notification.title, notification.description, notification.createdAt, notification.isRead ? 'Okundu' : 'Yeni'])}
      />
    </AppShell>
  );
}
