import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Bedanya disini: Nembak ke /register
    const response = await fetch('http://localhost:3001/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });

    const data = await response.json();
    if (response.ok) {
      alert("Register Berhasil! Silakan Login.");
      navigate('/'); // Balik ke halaman login
    } else {
      alert(data.error || "Gagal register bro");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Daftar Akun Baru</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          type="text" placeholder="Username Baru" className="w-full border p-2 rounded"
          onChange={e => setForm({...form, username: e.target.value})}
        />
        <input 
          type="password" placeholder="Password Baru" className="w-full border p-2 rounded"
          onChange={e => setForm({...form, password: e.target.value})}
        />
        <button className="w-full bg-green-600 text-white py-2 rounded">Daftar Sekarang</button>
      </form>
    </div>
  );
}