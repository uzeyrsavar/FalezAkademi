import { AppShell } from '@/components/layout/AppShell';
import { DataTable } from '@/components/common/DataTable';
import { students, teacherNotes } from '@/lib/data/mock-data';

export default function TeacherNotesPage() {
  return (
    <AppShell title="Notlar" subtitle="Öğretmen not sistemi" links={[{ href: '/teacher/dashboard', label: 'Dashboard' }]}>
      <DataTable
        headers={['Öğrenci', 'Not', 'Tarih', 'Görünürlük']}
        rows={teacherNotes.map((note) => [
          students.find((student) => student.id === note.studentId)?.fullName ?? '-',
          note.content,
          note.createdAt,
          note.visibleToStudent ? 'Öğrenciye açık' : 'Özel'
        ])}
      />
    </AppShell>
  );
}
