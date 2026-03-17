import { AppShell } from '@/components/layout/AppShell';
import { DataTable } from '@/components/common/DataTable';
import { teacherNotes } from '@/lib/data/mock-data';

export default function StudentNotesPage() {
  return (
    <AppShell title="Öğretmen Notları" subtitle="Sadece öğrenciye açık notlar" links={[{ href: '/student/dashboard', label: 'Dashboard' }]}>
      <DataTable
        headers={['Not', 'Tarih']}
        rows={teacherNotes.filter((note) => note.visibleToStudent).map((note) => [note.content, note.createdAt])}
      />
    </AppShell>
  );
}
