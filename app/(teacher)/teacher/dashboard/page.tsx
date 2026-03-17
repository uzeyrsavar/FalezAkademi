import { AppShell } from '@/components/layout/AppShell';
import { StatsGrid } from '@/components/dashboard/StatsGrid';
import { DataTable } from '@/components/common/DataTable';
import { attendanceRecords, notifications, students, teacherNotes, weeklyProgramItems } from '@/lib/data/mock-data';

const teacherLinks = [
  { href: '/teacher/dashboard', label: 'Dashboard' },
  { href: '/teacher/students', label: 'Öğrenciler' },
  { href: '/teacher/weekly-program', label: 'Haftalık Program' },
  { href: '/teacher/attendance', label: 'Devamsızlık' },
  { href: '/teacher/notifications', label: 'Bildirimler' },
  { href: '/teacher/notes', label: 'Notlar' },
  { href: '/teacher/settings', label: 'Ayarlar' }
];

export default function TeacherDashboardPage() {
  const totalTasks = weeklyProgramItems.length;
  const completedTasks = weeklyProgramItems.filter((item) => item.status === 'tamamlandi').length;

  return (
    <AppShell title="Öğretmen Dashboard" subtitle="Yönetim Paneli" links={teacherLinks}>
      <StatsGrid
        items={[
          { label: 'Toplam Öğrenci', value: students.length },
          { label: 'Aktif Öğrenci', value: students.filter((student) => student.isActive).length, tone: 'success' },
          { label: 'Haftalık Görev', value: totalTasks },
          { label: 'Tamamlanma Oranı', value: `%${Math.round((completedTasks / totalTasks) * 100 || 0)}` },
          { label: 'Devamsız Öğrenci', value: attendanceRecords.filter((record) => record.state === 'devamsiz').length, tone: 'danger' }
        ]}
      />

      <DataTable
        headers={['Son Notlar', 'Öğrenci', 'Tarih']}
        rows={teacherNotes.map((note) => [
          note.content,
          students.find((student) => student.id === note.studentId)?.fullName ?? '-',
          note.createdAt
        ])}
      />

      <div style={{ height: 16 }} />

      <DataTable
        headers={['Son Bildirimler', 'Saat', 'Durum']}
        rows={notifications
          .filter((notification) => notification.targetRole === 'teacher')
          .map((notification) => [notification.title, notification.createdAt, notification.isRead ? 'Okundu' : 'Yeni'])}
      />
    </AppShell>
  );
}
