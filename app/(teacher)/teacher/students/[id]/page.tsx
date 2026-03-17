import { notFound } from 'next/navigation';
import { AppShell } from '@/components/layout/AppShell';
import { DataTable } from '@/components/common/DataTable';
import { students, teacherNotes, weeklyProgramItems } from '@/lib/data/mock-data';

const links = [
  { href: '/teacher/dashboard', label: 'Dashboard' },
  { href: '/teacher/students', label: 'Öğrenciler' }
];

export default function StudentDetailPage({ params }: { params: { id: string } }) {
  const student = students.find((item) => item.id === params.id);
  if (!student) return notFound();

  const tasks = weeklyProgramItems.filter((item) => item.studentId === student.id);

  return (
    <AppShell title={student.fullName} subtitle="Öğrenci Detayı" links={links}>
      <div className="pageCard marginBottom16">
        <p><strong>Alan:</strong> {student.field}</p>
        <p><strong>İlerleme:</strong> %{student.progressRate}</p>
        <p><strong>Veli:</strong> {student.parentName} - {student.parentPhone}</p>
        <p><strong>Not:</strong> {student.note}</p>
      </div>

      <DataTable
        headers={['Ders', 'Konu', 'Durum', 'Soru']}
        rows={tasks.map((task) => [task.lesson, task.topic, task.status, task.questionCount])}
      />

      <div className="spacer16" />
      <DataTable
        headers={['Not', 'Tarih', 'Görünürlük']}
        rows={teacherNotes
          .filter((note) => note.studentId === student.id)
          .map((note) => [note.content, note.createdAt, note.visibleToStudent ? 'Öğrenci görebilir' : 'Sadece öğretmen'])}
      />
    </AppShell>
  );
}
