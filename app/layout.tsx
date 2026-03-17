import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Falez Akademi Takip Sistemi',
  description: 'Öğretmen ve öğrenci odaklı modern eğitim takip platformu'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
