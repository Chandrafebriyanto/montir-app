import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="relative overflow-hidden min-h-screen flex flex-col justify-center">
      {/* --- LAYER 1: MASKING GRADIENT (PERBAIKAN DISINI) --- */}
      {/* - from-white/0 & to-white/0 : Atas & Bawah transparan (titik terlihat jelas)
         - via-white/60             : Tengah ada kabut putih 60% (agar teks terbaca)
      */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/60 to-white/0 pointer-events-none"></div>

      {/* --- LAYER 2: DEKORASI BLOB (Hiasan Warna Pudar) --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse pointer-events-none"></div>

      {/* --- HERO SECTION --- */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in py-20">
        {/* Badge Kecil */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-blue-100 text-blue-700 text-sm font-semibold mb-8 shadow-sm hover:shadow-md transition-shadow">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
          </span>
          AI Powered Diagnosis System 2.0
        </div>

        {/* JUDUL UTAMA */}
        <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight tracking-tight drop-shadow-sm">
          Mobil Mogok? <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">
            Tanya Montir AI.
          </span>
        </h1>

        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
          Sistem pakar cerdas untuk diagnosa kerusakan mobil & motor.
          <br className="hidden md:block" />
          Cepat, akurat, dan tanpa biaya.
        </p>

        {/* TOMBOL AKSI */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/services"
            className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg shadow-blue-200 shadow-xl hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
          >
            🔍 Mulai Diagnosa Gratis
          </Link>
          <Link
            to="/about"
            className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 border border-gray-200 rounded-full font-bold text-lg shadow-sm hover:bg-white hover:border-gray-300 transition-all duration-300 w-full sm:w-auto"
          >
            Pelajari Cara Kerja
          </Link>
        </div>

        {/* FITUR (Cards) */}
        <div className="grid md:grid-cols-3 gap-6 mt-20 text-left">
          <FeatureCard
            icon="⚡"
            title="Instan"
            desc="Hasil analisa keluar dalam hitungan detik."
          />
          <FeatureCard
            icon="🧠"
            title="Pintar"
            desc="Basis pengetahuan dari montir ahli."
          />
          <FeatureCard
            icon="💸"
            title="Gratis"
            desc="Tidak dipungut biaya sepeserpun."
          />
        </div>
      </div>
    </div>
  );
}

// Komponen Kartu Kecil
function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group">
      <div className="text-3xl mb-3 bg-blue-50 w-12 h-12 flex items-center justify-center rounded-xl group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm mt-1 leading-relaxed">{desc}</p>
    </div>
  );
}
