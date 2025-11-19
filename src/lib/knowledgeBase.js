// ============================================================================
// 1. BASIS PENGETAHUAN (DATABASE ATURAN LENGKAP - TANPA TEXT INPUT)
// ============================================================================

export const carKnowledgeBase = [
  // ==========================================================================
  // KATEGORI: MOBIL 🚗
  // ==========================================================================
  
  // --- KELISTRIKAN & STARTER ---
  {
    id: "M01",
    name: "Aki (Battery) Soak / Rusak",
    type: "Mobil",
    symptoms: [
      "mobil_sulit_hidup",
      "mobil_bunyi_klik",
      "mobil_kelistrikan_lemah",
      "mobil_indikator_aki"
    ],
    description: "Tegangan aki turun di bawah 12V. Dinamo starter tidak mendapat daya cukup untuk memutar mesin.",
    solution: "1. Cek tegangan aki (Normal >12.4V).\n2. Periksa terminal aki dari jamur.\n3. Jumper aki darurat.\n4. Ganti aki baru.",
    cost: "Rp 850.000 - Rp 2.500.000"
  },
  {
    id: "M02",
    name: "Dinamo Starter Bermasalah",
    type: "Mobil",
    symptoms: [
      "mobil_sulit_hidup",
      "mobil_bunyi_klik" // Bunyi 'tek' sekali keras, lampu terang
    ],
    description: "Aki normal, tapi starter hanya bunyi 'tek' atau hening. Biasanya carbon brush starter habis.",
    solution: "1. Cek kabel dinamo starter.\n2. Service dinamo starter (ganti carbon brush).",
    cost: "Rp 300.000 - Rp 800.000"
  },

  // --- MESIN & PERFORMA ---
  {
    id: "M03",
    name: "Overheat (Sistem Pendingin Gagal)",
    type: "Mobil",
    symptoms: [
      "mobil_overheat",
      "mobil_bocor_air",
      "mobil_bau_manis"
    ],
    description: "Suhu mesin zona merah. Radiator bocor, kipas mati, atau thermostat macet.",
    solution: "1. MATIKAN MESIN SEGERA.\n2. Cek air radiator (saat dingin).\n3. Cek putaran kipas radiator.",
    cost: "Rp 200.000 - Rp 2.000.000"
  },
  {
    id: "M04",
    name: "Busi / Koil Mati (Misfire)",
    type: "Mobil",
    symptoms: [
      "mobil_getar", // Pincang
      "mobil_brebet",
      "mobil_boros_bbm",
      "mobil_indikator_engine"
    ],
    description: "Salah satu silinder tidak meledak (pincang). Tenaga hilang dan getaran mesin kasar.",
    solution: "1. Cek api di setiap koil.\n2. Ganti busi yang mati.\n3. Ganti koil yang lemah.",
    cost: "Rp 100.000 (Busi) - Rp 500.000 (Koil)"
  },
  
  // --- KAKI-KAKI & KENYAMANAN ---
  {
    id: "M05",
    name: "Kaki-kaki Rusak (Tie Rod / Shockbreaker)",
    type: "Mobil",
    symptoms: [
      "mobil_bunyi_gluduk",
      "mobil_setir_getar",
      "mobil_lari_kanan_kiri"
    ],
    description: "Komponen suspensi aus. Menyebabkan bunyi saat jalan rusak dan setir tidak stabil.",
    solution: "1. Cek kolong mobil.\n2. Ganti shockbreaker atau tie rod end.\n3. Spooring & Balancing.",
    cost: "Rp 500.000 - Rp 4.000.000"
  },
  {
    id: "M06",
    name: "AC Tidak Dingin (Freon Habis / Kompresor)",
    type: "Mobil",
    symptoms: [
      "mobil_ac_panas",
      "mobil_bunyi_ngorok_ac"
    ],
    description: "Sistem pendingin kabin bermasalah. Bisa karena kebocoran freon atau magnetic clutch kompresor mati.",
    solution: "1. Cek tekanan freon.\n2. Cek kebocoran evaporator.\n3. Service kompresor AC.",
    cost: "Rp 300.000 (Isi Freon) - Rp 3.000.000 (Kompresor)"
  },

  // --- PENGEREMAN ---
  {
    id: "M07",
    name: "Kampas Rem Habis",
    type: "Mobil",
    symptoms: [
      "mobil_rem_bunyi", // Srek-srek / Decit
      "mobil_rem_getar"
    ],
    description: "Kampas rem tipis bergesekan dengan piringan cakram.",
    solution: "1. Ganti kampas rem segera.\n2. Bubut piringan cakram jika bergelombang.",
    cost: "Rp 300.000 - Rp 1.200.000"
  },

  // ==========================================================================
  // KATEGORI: MOTOR 🏍️
  // ==========================================================================

  // --- MESIN & PERFORMA ---
  {
    id: "R01",
    name: "Busi / Pengapian Bermasalah",
    type: "Motor",
    symptoms: [
      "motor_sulit_hidup",
      "motor_brebet",
      "motor_mati_mendadak"
    ],
    description: "Api busi lemah atau mati.",
    solution: "1. Buka dan bersihkan busi.\n2. Ganti busi baru.",
    cost: "Rp 15.000 - Rp 50.000"
  },
  {
    id: "R02",
    name: "Masalah Injeksi / Fuel Pump",
    type: "Motor",
    symptoms: [
      "motor_brebet",
      "motor_gas_kosong", // Di gas malah mau mati
      "motor_indikator_engine"
    ],
    description: "Suplai bensin tersumbat (Filter kotor) atau injektor mampet.",
    solution: "1. Cek tekanan fuel pump.\n2. Ganti filter bensin.\n3. Bersihkan injektor.",
    cost: "Rp 75.000 - Rp 350.000"
  },
  {
    id: "R03",
    name: "Mesin Ngebul (Ring Piston / Seal Klep)",
    type: "Motor",
    symptoms: [
      "motor_asap_putih",
      "motor_oli_berkurang"
    ],
    description: "Oli masuk ke ruang bakar. Perlu turun mesin.",
    solution: "1. Cek volume oli.\n2. Turun mesin (Ganti seher/ring seher/seal klep).",
    cost: "Rp 500.000 - Rp 1.500.000"
  },

  // --- TRANSMISI (CVT / RANTAI) ---
  {
    id: "R04",
    name: "CVT Kotor / Roller Peyang (Matic)",
    type: "Motor",
    symptoms: [
      "motor_cvt_bunyi",
      "motor_getar_awal", // Gredek
      "motor_tenaga_kurang"
    ],
    description: "Kotoran debu di CVT atau roller sudah tidak bulat.",
    solution: "1. Service CVT.\n2. Ganti Roller dan V-Belt.",
    cost: "Rp 100.000 - Rp 400.000"
  },
  {
    id: "R05",
    name: "Rantai & Gear Set Aus (Manual)",
    type: "Motor",
    symptoms: [
      "motor_rantai_berisik"
    ],
    description: "Rantai kendor atau gigi gear sudah tajam.",
    solution: "1. Kencangkan rantai.\n2. Ganti satu set Gear & Rantai.",
    cost: "Rp 150.000 - Rp 500.000"
  },

  // --- KELISTRIKAN ---
  {
    id: "R06",
    name: "Kiprok / Aki Rusak",
    type: "Motor",
    symptoms: [
      "motor_starter_mati",
      "motor_lampu_redup"
    ],
    description: "Sistem pengisian listrik tidak stabil.",
    solution: "1. Cek tegangan pengisian (saat mesin hidup).\n2. Ganti Kiprok atau Aki.",
    cost: "Rp 150.000 - Rp 400.000"
  }
];

// ============================================================================
// 2. MESIN PELACAK (LOGIKA TETAP SAMA)
// ============================================================================

export const runExpertSystem = (userData) => {
  let scores = [];
  const relevantDiseases = carKnowledgeBase.filter(item => item.type === userData.type);

  relevantDiseases.forEach(disease => {
    let matchCount = 0;
    let detectedSymptoms = [];

    disease.symptoms.forEach(symptomCode => {
      if (userData[symptomCode] === "Iya") {
        matchCount++;
        detectedSymptoms.push(symptomCode.replace(/_/g, " ").replace(/mobil |motor /g, "")); 
      }
    });

    const probability = matchCount > 0 ? (matchCount / disease.symptoms.length) * 100 : 0;

    if (probability > 0) {
      scores.push({
        ...disease,
        probability: probability.toFixed(0),
        detectedSymptoms: detectedSymptoms
      });
    }
  });

  scores.sort((a, b) => b.probability - a.probability);
  return generateReport(scores, userData);
};

// ============================================================================
// 3. GENERATOR LAPORAN (TANPA DATA TAHUN/KM)
// ============================================================================

const generateReport = (scores, userData) => {
  // Header sederhana karena data tahun/km dihapus
  const vehicleInfo = `**Kendaraan:** ${userData.type}`;

  if (scores.length === 0) {
    return `
## ❓ Hasil Diagnosa Tidak Spesifik

${vehicleInfo}

Sistem **belum menemukan pola kerusakan** yang cocok berdasarkan jawaban "Iya" yang Anda pilih.

**Saran:**
1. Pastikan Anda menekan "Iya" pada gejala yang benar-benar dirasakan.
2. Jika tidak ada gejala yang cocok, kemungkinan kerusakan bersifat spesifik/jarang terjadi.
3. Silakan lakukan pengecekan manual di bengkel.
    `;
  }

  const topResult = scores[0]; 
  const severityIcon = topResult.probability > 70 ? "🔴" : "🟡";

  return `
## ${severityIcon} Diagnosa: ${topResult.name}

${vehicleInfo}
**Tingkat Keyakinan Sistem:** ${topResult.probability}%

---

### 🔍 Gejala yang Terdeteksi
${topResult.detectedSymptoms.map(s => `- ${capitalizeFirstLetter(s)}`).join('\n')}

### 📝 Penjelasan Masalah
${topResult.description}

### 🛠️ Solusi Perbaikan
${topResult.solution}

### 💰 Estimasi Biaya
**${topResult.cost}**
*(Estimasi kasar, harga dapat berbeda)*

---
*⚠️ Alat ini hanya alat bantu diagnosa awal.*
  `;
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}