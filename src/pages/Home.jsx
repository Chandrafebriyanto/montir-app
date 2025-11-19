import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="text-center px-4 max-w-3xl">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          Solusi Masalah Kendaraan <br />
          <span className="text-blue-600">Dalam Genggaman</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Konsultasikan kerusakan mobil atau motormu dengan AI Montir berpengalaman. 
          Cepat, akurat, dan gratis.
        </p>
        <Link 
          to="/services" 
          className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition shadow-lg hover:shadow-xl"
        >
          Mulai Konsultasi Sekarang
        </Link>
      </div>
    </div>
  );
}