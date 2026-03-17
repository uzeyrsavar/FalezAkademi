import styles from '@/styles/components/DataTable.module.css';

interface DataTableProps {
  headers: string[];
  rows: Array<Array<string | number>>;
}

export function DataTable({ headers, rows }: DataTableProps) {
  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={`${rowIndex}-${row[0]}`}>
              {row.map((cell, cellIndex) => (
                <td key={`${rowIndex}-${cellIndex}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
