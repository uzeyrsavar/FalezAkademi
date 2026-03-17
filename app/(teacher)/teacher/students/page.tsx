import Link from 'next/link';
import { AppShell } from '@/components/layout/AppShell';
import { DataTable } from '@/components/common/DataTable';
import { students } from '@/lib/data/mock-data';

const links = [
  { href: '/teacher/dashboard', label: 'Dashboard' },
  { href: '/teacher/students', label: 'Öğrenciler' },
  { href: '/teacher/weekly-program/create', label: 'Program Oluştur' }
];

export default function StudentsPage() {
  return (
    <AppShell title="Öğrenci Listesi" subtitle="Arama, filtreleme ve yönetim" links={links}>
      <div className="pageCard marginBottom12">
        <strong>Filtreleme:</strong> Alan türü, aktif/pasif, sınıf seviyesi (demo altyapısı hazır).
      </div>
      <DataTable
        headers={['Ad Soyad', 'Sınıf', 'Alan', 'Telefon', 'Durum', 'Detay']}
        rows={students.map((student) => [
          student.fullName,
          student.grade,
          student.field,
          student.phone,
          student.isActive ? 'Aktif' : 'Pasif',
          'Detaya git'
        ])}
      />
      <div className="marginTop12">
        {students.map((student) => (
          <Link key={student.id} href={`/teacher/students/${student.id}`} className="linkInline">
            {student.fullName} detay
          </Link>
        ))}
      </div>
    </AppShell>
  );
}
