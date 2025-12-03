import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Nembak ke API backend yang kita buat tadi
    const response = await fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });

    const data = await response.json();
    if (response.ok) {
      alert("Login Berhasil! Welcome " + data.username);
      // Simpan token biar browser inget kalo udah login
      localStorage.setItem('token', data.token);
      navigate('/'); // Balik ke home
    } else {
      alert(data.error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Login MontirAI</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          type="text" placeholder="Username" className="w-full border p-2 rounded"
          onChange={e => setForm({...form, username: e.target.value})}
        />
        <input 
          type="password" placeholder="Password" className="w-full border p-2 rounded"
          onChange={e => setForm({...form, password: e.target.value})}
        />
        <button className="w-full bg-blue-600 text-white py-2 rounded">Masuk</button>
      </form>
    </div>
  );
}