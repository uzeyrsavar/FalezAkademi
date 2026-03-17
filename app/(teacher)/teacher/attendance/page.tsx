import { AppShell } from '@/components/layout/AppShell';
import { DataTable } from '@/components/common/DataTable';
import { attendanceRecords, students } from '@/lib/data/mock-data';

const links = [
  { href: '/teacher/dashboard', label: 'Dashboard' },
  { href: '/teacher/attendance', label: 'Devamsızlık' }
];

export default function AttendancePage() {
  return (
    <AppShell title="Devamsızlık / Yoklama" subtitle="Günlük yoklama ve geçmiş" links={links}>
      <DataTable
        headers={['Öğrenci', 'Tarih', 'Durum', 'Not']}
        rows={attendanceRecords.map((record) => [
          students.find((student) => student.id === record.studentId)?.fullName ?? '-',
          record.date,
          record.state,
          record.note ?? '-'
        ])}
      />
    </AppShell>
  );
}
