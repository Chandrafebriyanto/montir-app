export default function About() {
  return (
    <div className="min-h-screen py-20 px-4 flex flex-col items-center relative overflow-hidden">
      
      {/* Dekorasi Background (Blob Ungu Pudar di pojok kanan) */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-purple-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse pointer-events-none"></div>

      {/* --- KARTU UTAMA (Glass Card) --- */}
      <div className="relative z-10 max-w-3xl w-full bg-white/80 backdrop-blur-md border border-white/60 shadow-2xl rounded-3xl p-8 md:p-14 text-center animate-fade-in">
        
        {/* Judul */}
        <h2 className="text-4xl font-black text-gray-900 mb-8">Tentang MontirAI</h2>
        
        {/* Isi Konten (Teks Asli Anda) */}
        <p className="text-xl text-gray-600 leading-relaxed font-medium">
          Website ini dibuat sebagai bagian dari tantangan <span className="text-blue-600 font-bold">100 Days of Coding</span>.
          Tujuannya adalah mengintegrasikan kecerdasan buatan Gemini AI untuk membantu pemilik
          kendaraan mendiagnosa masalah awal sebelum pergi ke bengkel fisik.
        </p>

      </div>
    </div>
  );
}