import { AttendanceRecord, Notification, Student, TeacherNote, WeeklyProgramItem } from '@/lib/types/domain';

export const students: Student[] = [
  {
    id: 's1',
    userId: 'u-student-1',
    fullName: 'Zeynep Yılmaz',
    grade: '12. Sınıf',
    field: 'sayisal',
    phone: '0555 123 45 67',
    parentName: 'Ahmet Yılmaz',
    parentPhone: '0555 444 22 11',
    isActive: true,
    note: 'Matematikte iyi, paragraf takibi artırılmalı.',
    progressRate: 74,
    attendanceRate: 92
  },
  {
    id: 's2',
    userId: 'u-student-2',
    fullName: 'Ece Demir',
    grade: '11. Sınıf',
    field: 'esit-agirlik',
    phone: '0555 987 65 43',
    parentName: 'Meral Demir',
    parentPhone: '0555 333 44 55',
    isActive: true,
    note: 'Edebiyat görevlerinde düzenli, matematikte destek gerekli.',
    progressRate: 61,
    attendanceRate: 88
  }
];

export const weeklyProgramItems: WeeklyProgramItem[] = [
  {
    id: 't1',
    studentId: 's1',
    day: 'Pazartesi',
    lesson: 'TYT Matematik',
    topic: 'Köklü Sayılar',
    questionCount: 40,
    dueDate: '2026-03-17',
    priority: 'yuksek',
    description: 'Zor seviye testlerden en az 2 kaynak çöz.',
    status: 'devam-ediyor'
  },
  {
    id: 't2',
    studentId: 's1',
    day: 'Salı',
    lesson: 'AYT Fizik',
    topic: 'Elektrik Alan',
    questionCount: 30,
    dueDate: '2026-03-18',
    priority: 'orta',
    status: 'yapilmadi'
  },
  {
    id: 't3',
    studentId: 's2',
    day: 'Çarşamba',
    lesson: 'TYT Türkçe',
    topic: 'Paragraf',
    questionCount: 50,
    dueDate: '2026-03-19',
    priority: 'yuksek',
    status: 'tamamlandi',
    studentNote: 'Zamanı iyi yönettim, yanlışları tekrar edeceğim.'
  }
];

export const teacherNotes: TeacherNote[] = [
  {
    id: 'n1',
    studentId: 's1',
    createdAt: '2026-03-16',
    content: 'Bu hafta geometri kampına dahil edilmeli.',
    visibleToStudent: false
  },
  {
    id: 'n2',
    studentId: 's2',
    createdAt: '2026-03-16',
    content: 'Paragraf netlerinde istikrarlı yükseliş var, tebrikler.',
    visibleToStudent: true
  }
];

export const notifications: Notification[] = [
  {
    id: 'nf1',
    targetRole: 'teacher',
    title: 'Görev tamamlandı',
    description: 'Zeynep Yılmaz, TYT Matematik görevini güncelledi.',
    createdAt: '2026-03-17 10:15',
    isRead: false
  },
  {
    id: 'nf2',
    targetRole: 'student',
    title: 'Yeni haftalık program',
    description: 'Bu hafta için yeni görevler atandı.',
    createdAt: '2026-03-17 08:40',
    isRead: true
  }
];

export const attendanceRecords: AttendanceRecord[] = [
  {
    id: 'a1',
    studentId: 's1',
    date: '2026-03-16',
    state: 'var'
  },
  {
    id: 'a2',
    studentId: 's2',
    date: '2026-03-16',
    state: 'devamsiz',
    note: 'Sağlık raporu bekleniyor.'
  }
];

export const lessonTemplates = {
  sayisal: ['TYT Matematik', 'TYT Fizik', 'TYT Kimya', 'TYT Biyoloji', 'AYT Matematik', 'AYT Fizik'],
  'esit-agirlik': ['TYT Matematik', 'TYT Türkçe', 'AYT Edebiyat', 'AYT Tarih', 'TYT Geometri'],
  sozel: ['TYT Türkçe', 'AYT Edebiyat', 'AYT Tarih', 'AYT Coğrafya', 'AYT Felsefe'],
  dil: ['YDT İngilizce', 'Kelime Çalışması', 'Reading', 'Listening', 'TYT Türkçe']
};
