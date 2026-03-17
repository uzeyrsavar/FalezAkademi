'use client';

import { useMemo, useState } from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { StatsGrid } from '@/components/dashboard/StatsGrid';
import { weeklyProgramItems } from '@/lib/data/mock-data';
import { TaskState } from '@/lib/types/domain';

const links = [
  { href: '/student/dashboard', label: 'Dashboard' },
  { href: '/student/notifications', label: 'Bildirimler' },
  { href: '/student/notes', label: 'Notlar' },
  { href: '/student/settings', label: 'Ayarlar' }
];

export default function StudentDashboardPage() {
  const [tasks, setTasks] = useState(weeklyProgramItems.filter((task) => task.studentId === 's1'));
  const completed = useMemo(() => tasks.filter((task) => task.status === 'tamamlandi').length, [tasks]);

  const updateTask = (id: string, status: TaskState) => {
    setTasks((prev) => prev.map((task) => (task.id === id ? { ...task, status } : task)));
  };

  return (
    <AppShell title="Öğrenci Dashboard" subtitle="Görev ve ilerleme ekranı" links={links}>
      <StatsGrid
        items={[
          { label: 'Bu Haftaki Görev', value: tasks.length },
          { label: 'Tamamlanan', value: completed, tone: 'success' },
          { label: 'Eksik Görev', value: tasks.length - completed, tone: 'danger' },
          { label: 'Genel İlerleme', value: `%${Math.round((completed / tasks.length) * 100 || 0)}` }
        ]}
      />

      <div className="pageCard gridGap8">
        {tasks.map((task) => (
          <article key={task.id} className="taskCard">
            <strong>{task.day} - {task.lesson}</strong>
            <p>{task.topic} • {task.questionCount} soru</p>
            <select value={task.status} onChange={(event) => updateTask(task.id, event.target.value as TaskState)}>
              <option value="yapilmadi">Yapılmadı</option>
              <option value="devam-ediyor">Devam Ediyor</option>
              <option value="tamamlandi">Tamamlandı</option>
            </select>
          </article>
        ))}
      </div>
    </AppShell>
  );
}
