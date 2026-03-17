import Link from 'next/link';
import { AppShell } from '@/components/layout/AppShell';
import { DataTable } from '@/components/common/DataTable';
import { students, weeklyProgramItems } from '@/lib/data/mock-data';

const links = [
  { href: '/teacher/dashboard', label: 'Dashboard' },
  { href: '/teacher/weekly-program', label: 'Haftalık Program' },
  { href: '/teacher/weekly-program/create', label: 'Yeni Program' }
];

export default function WeeklyProgramPage() {
  return (
    <AppShell title="Haftalık Program Görüntüleme" subtitle="Gün ve ders bazlı görev takibi" links={links}>
      <div className="pageCard marginBottom12">
        Alan bazlı ders şablonları, toplu görev atama ve program kopyalama özellikleri için altyapı eklendi.
        <div><Link href="/teacher/weekly-program/create">Yeni Program Oluştur</Link></div>
      </div>
      <DataTable
        headers={['Öğrenci', 'Gün', 'Ders', 'Konu', 'Durum', 'Öncelik']}
        rows={weeklyProgramItems.map((task) => [
          students.find((student) => student.id === task.studentId)?.fullName ?? '-',
          task.day,
          task.lesson,
          task.topic,
          task.status,
          task.priority
        ])}
      />
    </AppShell>
  );
}
