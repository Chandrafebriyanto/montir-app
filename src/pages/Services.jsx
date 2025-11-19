import { useState } from "react";
import { runExpertSystem } from "../lib/knowledgeBase";
import ReactMarkdown from "react-markdown";

export default function Services() {
  const [formData, setFormData] = useState({
    type: "Mobil", // Default
    // Field tahun, km, issue sudah DIHAPUS
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    setTimeout(() => {
      try {
        const diagnosisResult = runExpertSystem(formData);
        setResult(diagnosisResult);
      } catch (err) {
        console.error(err);
        setResult("Terjadi kesalahan sistem.");
      } finally {
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">Diagnosa Cepat</h2>
        <p className="text-gray-500 mt-2">
          Jawab pertanyaan berikut dengan "Iya" atau "Tidak"
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* KOLOM KIRI: FORM INPUT (Lebih Lebar) */}
        <div className="md:col-span-2 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 h-fit">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* PILIH JENIS KENDARAAN */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pilih Jenis Kendaraan:
              </label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50 font-bold"
              >
                <option value="Mobil">Mobil 🚗</option>
                <option value="Motor">Motor 🏍️</option>
              </select>
            </div>

            <div className="space-y-1">
              <h3 className="font-semibold text-gray-800 mb-4 border-b pb-2">
                Daftar Gejala ({formData.type})
              </h3>
              
              {/* ========================================== */}
              {/* PERTANYAAN UNTUK MOTOR 🏍️                */}
              {/* ========================================== */}
              {formData.type === "Motor" && (
                <div className="grid gap-4">
                  <RadioQuestion 
                    label="1. Apakah motor sulit dihidupkan (starter tangan/engkol susah)?"
                    name="motor_sulit_hidup" onChange={handleChange} 
                  />
                  <RadioQuestion 
                    label="2. Apakah elektrik starter mati total (tidak ada suara sama sekali)?"
                    name="motor_starter_mati" onChange={handleChange} 
                  />
                  <RadioQuestion 
                    label="3. Apakah lampu depan redup saat gas rendah?"
                    name="motor_lampu_redup" onChange={handleChange} 
                  />
                  <RadioQuestion 
                    label="4. Apakah mesin terasa 'brebet' / tersendat saat jalan?"
                    name="motor_brebet" onChange={handleChange} 
                  />
                  <RadioQuestion 
                    label="5. Apakah motor mati mendadak saat dikendarai?"
                    name="motor_mati_mendadak" onChange={handleChange} 
                  />
                  <RadioQuestion 
                    label="6. Apakah saat di-gas mesin 'ngempos' (suara naik tapi lari pelan)?"
                    name="motor_gas_kosong" onChange={handleChange} 
                  />
                  <RadioQuestion 
                    label="7. Apakah asap knalpot berwarna putih tebal terus menerus?"
                    name="motor_asap_putih" onChange={handleChange} 
                  />
                  <RadioQuestion 
                    label="8. Apakah volume oli mesin cepat berkurang drastis?"
                    name="motor_oli_berkurang" onChange={handleChange} 
                  />
                  <RadioQuestion 
                    label="9. Apakah terdengar bunyi kasar/berisik dari area CVT (Matic)?"
                    name="motor_cvt_bunyi" onChange={handleChange} 
                  />
                  <RadioQuestion 
                    label="10. Apakah motor terasa bergetar (gredek) saat tarikan awal (Matic)?"
                    name="motor_getar_awal" onChange={handleChange} 
                  />
                  <RadioQuestion 
                    label="11. Apakah motor terasa tidak kuat menanjak?"
                    name="motor_tenaga_kurang" onChange={handleChange} 
                  />
                   <RadioQuestion 
                    label="12. Apakah rantai terdengar berisik 'krak-krak' (Manual)?"
                    name="motor_rantai_berisik" onChange={handleChange} 
                  />
                   <RadioQuestion 
                    label="13. Apakah lampu indikator mesin (Check Engine) menyala kuning?"
                    name="motor_indikator_engine" onChange={handleChange} 
                  />
                </div>
              )}

              {/* ==========================================  */}
              {/* PERTANYAAN UNTUK MOBIL 🚗                   */}
              {/* ==========================================  */}
              {formData.type === "Mobil" && (
                <div className="grid gap-4">
                  <RadioQuestion 
                    label="1. Apakah mesin sulit dihidupkan (starter terasa berat/panjang)?"
                    name="mobil_sulit_hidup" onChange={handleChange} 
                  />
                  <RadioQuestion 
                    label="2. Apakah hanya terdengar bunyi 'klik' keras saat starter?"
                    name="mobil_bunyi_klik" onChange={handleChange} 
                  />
                  <RadioQuestion 
                    label="3. Apakah kelistrikan (lampu/klakson) terasa lemah?"
                    name="mobil_kelistrikan_lemah" onChange={handleChange} 
                  />
                  <RadioQuestion 
                    label="4. Apakah indikator baterai/aki di dashboard menyala?"
                    name="mobil_indikator_aki" onChange={handleChange} 
                  />
                  <RadioQuestion 
                    label="5. Apakah mesin terasa bergetar hebat (pincang)?"
                    name="mobil_getar" onChange={handleChange} 
                  />
                  <RadioQuestion 
                    label="6. Apakah mesin terasa 'brebet' / tersendat?"
                    name="mobil_brebet" onChange={handleChange} 
                  />
                   <RadioQuestion 
                    label="7. Apakah konsumsi bbm terasa sangat boros?"
                    name="mobil_boros_bbm" onChange={handleChange} 
                  />
                  <RadioQuestion 
                    label="8. Apakah jarum temperatur naik tinggi (Overheat)?"
                    name="mobil_overheat" onChange={handleChange} 
                  />
                  <RadioQuestion 
                    label="9. Apakah air radiator sering berkurang / bocor?"
                    name="mobil_bocor_air" onChange={handleChange} 
                  />
                  <RadioQuestion 
                    label="10. Apakah tercium bau manis (coolant) atau asap putih?"
                    name="mobil_bau_manis" onChange={handleChange} 
                  />
                  <RadioQuestion 
                    label="11. Apakah terdengar bunyi 'gluduk-gluduk' di jalan rusak?"
                    name="mobil_bunyi_gluduk" onChange={handleChange} 
                  />
                   <RadioQuestion 
                    label="12. Apakah setir terasa bergetar saat kecepatan tinggi?"
                    name="mobil_setir_getar" onChange={handleChange} 
                  />
                   <RadioQuestion 
                    label="13. Apakah mobil terasa lari ke kiri/kanan saat setir lurus?"
                    name="mobil_lari_kanan_kiri" onChange={handleChange} 
                  />
                   <RadioQuestion 
                    label="14. Apakah AC terasa panas / hanya keluar angin?"
                    name="mobil_ac_panas" onChange={handleChange} 
                  />
                   <RadioQuestion 
                    label="15. Apakah terdengar bunyi 'ngorok' saat AC dinyalakan?"
                    name="mobil_bunyi_ngorok_ac" onChange={handleChange} 
                  />
                  <RadioQuestion 
                    label="16. Apakah terdengar bunyi berdecit/srek-srek saat mengerem?"
                    name="mobil_rem_bunyi" onChange={handleChange} 
                  />
                  <RadioQuestion 
                    label="17. Apakah pedal rem terasa bergetar saat diinjak?"
                    name="mobil_rem_getar" onChange={handleChange} 
                  />
                   <RadioQuestion 
                    label="18. Apakah indikator mesin (Check Engine) menyala?"
                    name="mobil_indikator_engine" onChange={handleChange} 
                  />
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-4 rounded-lg text-white font-bold text-lg transition-all shadow-lg
                ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 hover:scale-[1.02]"}`}
            >
              {loading ? "Sedang Menganalisa..." : "🔍 ANALISA SEKARANG"}
            </button>
          </form>
        </div>

        {/* KOLOM KANAN: HASIL (Sticky) */}
        <div className="md:col-span-1">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 sticky top-24 min-h-[400px]">
            {loading && (
              <div className="h-full flex flex-col items-center justify-center text-gray-500 animate-pulse">
                <div className="text-6xl mb-4">🧠</div>
                <p className="text-center font-medium">Sistem Pakar sedang<br/>mencocokkan gejala...</p>
              </div>
            )}

            {!loading && !result && (
              <div className="h-full flex flex-col items-center justify-center text-gray-400 text-center">
                <div className="text-6xl mb-4 opacity-30">📋</div>
                <p>Pilih gejala di samping<br/>lalu klik tombol Analisa</p>
              </div>
            )}

            {result && (
              <div className="prose prose-sm prose-blue max-w-none overflow-y-auto max-h-[80vh]">
                <ReactMarkdown>{result}</ReactMarkdown>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// KOMPONEN INPUT RADIO (Desain lebih compact)
function RadioQuestion({ label, name, onChange }) {
  return (
    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 hover:border-blue-200 transition-colors">
      <label className="block text-sm font-medium text-gray-800 mb-2 leading-snug">
        {label}
      </label>
      <div className="flex gap-4">
        <label className="flex items-center cursor-pointer gap-2 px-3 py-1 rounded hover:bg-white">
          <input 
            type="radio" 
            name={name} 
            value="Iya" 
            onChange={onChange}
            className="w-4 h-4 text-blue-600 focus:ring-blue-500" 
          />
          <span className="text-sm font-medium text-gray-700">Iya</span>
        </label>
        <label className="flex items-center cursor-pointer gap-2 px-3 py-1 rounded hover:bg-white">
          <input 
            type="radio" 
            name={name} 
            value="Tidak" 
            onChange={onChange}
            className="w-4 h-4 text-gray-400 focus:ring-gray-400" 
          />
          <span className="text-sm text-gray-500">Tidak</span>
        </label>
      </div>
    </div>
  );
}