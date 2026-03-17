'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState<'teacher' | 'student'>('teacher');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!email.includes('@') || password.length < 6) {
      setError('Geçerli e-posta ve minimum 6 karakter şifre giriniz.');
      return;
    }
    router.push(role === 'teacher' ? '/teacher/dashboard' : '/student/dashboard');
  };

  return (
    <main className="container pagePadding narrowContainer">
      <h1>Giriş</h1>
      <form className="pageCard gridGap12" onSubmit={onSubmit}>
        <label>
          Rol
          <select value={role} onChange={(e) => setRole(e.target.value as 'teacher' | 'student')}>
            <option value="teacher">Öğretmen</option>
            <option value="student">Öğrenci</option>
          </select>
        </label>
        <label>
          E-posta
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
        </label>
        <label>
          Şifre
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
        </label>
        {error ? <p className="statusPending">{error}</p> : null}
        <button type="submit">Panele Gir</button>
      </form>
    </main>
  );
}
