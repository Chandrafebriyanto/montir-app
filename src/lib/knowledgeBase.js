// Kita modifikasi fungsi ini biar nerima 'knowledgeBaseData' sebagai parameter ke-2
export const runExpertSystem = (userData, knowledgeBaseData) => {
  let scores = [];
  
  // Filter penyakit sesuai tipe kendaraan (Mobil/Motor)
  const relevantDiseases = knowledgeBaseData.filter(item => item.type === userData.type);

  relevantDiseases.forEach(disease => {
    let matchCount = 0;
    let detectedSymptoms = [];

    // Cek gejala
    disease.symptoms.forEach(symptomCode => {
      // User pilih "Iya" gak?
      if (userData[symptomCode] === "Iya") {
        matchCount++;
        // Bersihin nama gejala buat laporan (misal: "motor_brebet" jadi "Brebet")
        detectedSymptoms.push(symptomCode.replace(/_/g, " ").replace(/mobil |motor /g, "")); 
      }
    });

    // Hitung persentase kecocokan
    const probability = matchCount > 0 ? (matchCount / disease.symptoms.length) * 100 : 0;

    if (probability > 0) {
      scores.push({
        ...disease,
        probability: probability.toFixed(0),
        detectedSymptoms: detectedSymptoms
      });
    }
  });

  // Urutkan dari yang paling mungkin (probability tertinggi)
  scores.sort((a, b) => b.probability - a.probability);
  
  return generateReport(scores, userData);
};

const generateReport = (scores, userData) => {
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