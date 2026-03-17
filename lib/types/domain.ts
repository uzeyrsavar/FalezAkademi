export type UserRole = 'teacher' | 'student' | 'admin';
export type StudyField = 'sayisal' | 'esit-agirlik' | 'sozel' | 'dil';
export type TaskState = 'yapilmadi' | 'devam-ediyor' | 'tamamlandi';
export type AttendanceState = 'var' | 'devamsiz' | 'izinli';

export interface User {
  id: string;
  role: UserRole;
  name: string;
  email: string;
  isActive: boolean;
}

export interface Student {
  id: string;
  userId: string;
  fullName: string;
  grade: string;
  field: StudyField;
  phone: string;
  parentName: string;
  parentPhone: string;
  isActive: boolean;
  note: string;
  progressRate: number;
  attendanceRate: number;
}

export interface WeeklyProgramItem {
  id: string;
  studentId: string;
  day: string;
  lesson: string;
  topic: string;
  questionCount: number;
  dueDate: string;
  priority: 'dusuk' | 'orta' | 'yuksek';
  description?: string;
  status: TaskState;
  studentNote?: string;
}

export interface TeacherNote {
  id: string;
  studentId: string;
  createdAt: string;
  content: string;
  visibleToStudent: boolean;
}

export interface Notification {
  id: string;
  targetRole: UserRole;
  title: string;
  description: string;
  createdAt: string;
  isRead: boolean;
}

export interface AttendanceRecord {
  id: string;
  studentId: string;
  date: string;
  state: AttendanceState;
  note?: string;
}
