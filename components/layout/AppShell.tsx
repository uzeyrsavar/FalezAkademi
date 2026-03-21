import type { ReactNode } from 'react';
import Link from 'next/link';
import styles from '@/styles/components/AppShell.module.css';

interface AppShellProps {
  title: string;
  subtitle: string;
  links: { href: string; label: string }[];
  children: ReactNode;
}

export function AppShell({ title, subtitle, links, children }: AppShellProps) {
  return (
    <div className={styles.wrapper}>
      <aside className={styles.sidebar}>
        <h1>Falez Akademi</h1>
        <p>{subtitle}</p>
        <nav>
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className={styles.content}>
        <header className={styles.header}>
          <h2>{title}</h2>
        </header>
        {children}
      </main>
    </div>
  );
}
