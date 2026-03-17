'use client';

import { useMemo, useState } from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { lessonTemplates } from '@/lib/data/mock-data';
import { StudyField } from '@/lib/types/domain';

const links = [
  { href: '/teacher/dashboard', label: 'Dashboard' },
  { href: '/teacher/weekly-program', label: 'Haftalık Program' }
];

export default function CreateWeeklyProgramPage() {
  const [field, setField] = useState<StudyField>('sayisal');
  const [message, setMessage] = useState('');
  const lessons = useMemo(() => lessonTemplates[field], [field]);

  return (
    <AppShell title="Haftalık Program Oluşturma" subtitle="Ders şablonları ve görev planlama" links={links}>
      <form
        className="pageCard gridGap10"
        onSubmit={(e) => {
          e.preventDefault();
          setMessage('Program taslağı kaydedildi (demo).');
        }}
      >
        <label>
          Alan Türü
          <select value={field} onChange={(event) => setField(event.target.value as StudyField)}>
            <option value="sayisal">Sayısal</option>
            <option value="esit-agirlik">Eşit Ağırlık</option>
            <option value="sozel">Sözel</option>
            <option value="dil">Dil</option>
          </select>
        </label>

        <label>
          Ders
          <select>
            {lessons.map((lesson) => (
              <option key={lesson}>{lesson}</option>
            ))}
          </select>
        </label>

        <label>Konu <input required placeholder="Örn: Köklü Sayılar" /></label>
        <label>Soru Sayısı <input required type="number" min={1} /></label>
        <label>Görev Tarihi <input required type="date" /></label>
        <label>Öncelik
          <select>
            <option>yüksek</option><option>orta</option><option>düşük</option>
          </select>
        </label>
        <button type="submit">Programa Ekle</button>
      </form>
      {message ? <p className="statusDone">{message}</p> : null}
    </AppShell>
  );
}
