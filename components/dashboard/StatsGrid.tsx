import styles from '@/styles/components/StatsGrid.module.css';

interface StatsGridProps {
  items: { label: string; value: string | number; tone?: 'default' | 'success' | 'danger' }[];
}

export function StatsGrid({ items }: StatsGridProps) {
  return (
    <section className={styles.grid}>
      {items.map((item) => (
        <article key={item.label} className={`${styles.card} ${styles[item.tone ?? 'default']}`}>
          <span>{item.label}</span>
          <strong>{item.value}</strong>
        </article>
      ))}
    </section>
  );
}
