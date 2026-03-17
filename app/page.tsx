import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="container pagePadding">
      <h1>Falez Akademi Takip Sistemi</h1>
      <p>Rol bazlı demoya giriş için panel seçin:</p>
      <div className="rowGap12">
        <Link href="/login">Login</Link>
        <Link href="/teacher/dashboard">Öğretmen Paneli</Link>
        <Link href="/student/dashboard">Öğrenci Paneli</Link>
      </div>
    </main>
  );
}
