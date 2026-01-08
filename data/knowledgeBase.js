export const knowledgeBase = {
  rules: [
      {
        id: 1,
        conditions: { q1: 'ya', q2: 'ya', q3: 'ya', q4: 'ya' },
        diagnosis: 'Depresi Mayor',
        certainty: 0.95,
        description: 'Gangguan mood yang ditandai dengan perasaan sedih berkelanjutan dan kehilangan minat.',
        recommendations: ['Konsultasi dengan psikiater', 'Terapi kognitif perilaku', 'Pertimbangkan pengobatan antidepresan']
      },
      {
        id: 2,
        conditions: { q1: 'ya', q2: 'ya', q3: 'tidak', q5: 'ya' },
        diagnosis: 'Depresi Ringan hingga Sedang',
        certainty: 0.80,
        description: 'Gejala depresi yang lebih ringan namun tetap mempengaruhi fungsi sehari-hari.',
        recommendations: ['Konseling psikologis', 'Olahraga teratur', 'Teknik relaksasi']
      },
      {
        id: 3,
        conditions: { q6: 'ya', q7: 'ya', q8: 'ya', q9: 'ya' },
        diagnosis: 'Gangguan Kecemasan Umum (GAD)',
        certainty: 0.90,
        description: 'Kecemasan berlebihan dan persisten tentang berbagai aspek kehidupan.',
        recommendations: ['Terapi kognitif perilaku', 'Teknik pernapasan dan mindfulness', 'Konsultasi psikiater jika parah']
      },
      {
        id: 4,
        conditions: { q6: 'ya', q7: 'ya', q10: 'ya', q11: 'ya' },
        diagnosis: 'Gangguan Panik',
        certainty: 0.88,
        description: 'Serangan panik berulang dengan gejala fisik yang intens.',
        recommendations: ['Terapi eksposur', 'Latihan pernapasan', 'Pengobatan anti-kecemasan jika diperlukan']
      },
      {
        id: 5,
        conditions: { q12: 'ya', q13: 'ya', q14: 'ya', q15: 'ya' },
        diagnosis: 'Gangguan Stres Pasca Trauma (PTSD)',
        certainty: 0.85,
        description: 'Gangguan yang berkembang setelah mengalami atau menyaksikan peristiwa traumatis.',
        recommendations: ['Terapi EMDR', 'Terapi trauma-focused CBT', 'Dukungan kelompok']
      },
      {
        id: 6,
        conditions: { q16: 'ya', q17: 'ya', q18: 'ya', q19: 'ya' },
        diagnosis: 'Gangguan Obsesif Kompulsif (OCD)',
        certainty: 0.87,
        description: 'Pikiran obsesif yang berulang dan perilaku kompulsif untuk mengurangi kecemasan.',
        recommendations: ['Exposure and Response Prevention (ERP)', 'Terapi kognitif', 'Medikasi SSRI']
      },
      {
        id: 7,
        conditions: { q1: 'ya', q6: 'ya', q20: 'ya' },
        diagnosis: 'Gangguan Campuran Anxietas dan Depresi',
        certainty: 0.82,
        description: 'Kombinasi gejala kecemasan dan depresi yang signifikan.',
        recommendations: ['Terapi terpadu', 'Manajemen stres', 'Konseling profesional']
      },
      {
        id: 8,
        conditions: { q3: 'ya', q5: 'ya', q4: 'ya' },
        diagnosis: 'Gangguan Tidur dengan Komponen Depresi',
        certainty: 0.75,
        description: 'Masalah tidur yang terkait dengan mood rendah.',
        recommendations: ['Higiene tidur', 'Terapi kognitif untuk insomnia', 'Evaluasi medis']
      },
      {
        id: 9,
        conditions: { q8: 'ya', q9: 'ya', q20: 'ya' },
        diagnosis: 'Gangguan Kecemasan Sosial',
        certainty: 0.83,
        description: 'Ketakutan intens terhadap situasi sosial dan penilaian orang lain.',
        recommendations: ['Terapi eksposur sosial', 'Pelatihan keterampilan sosial', 'CBT']
      },
      {
        id: 10,
        conditions: { q10: 'ya', q11: 'ya', q7: 'tidak' },
        diagnosis: 'Gangguan Panik Tanpa Agorafobia',
        certainty: 0.80,
        description: 'Serangan panik tanpa ketakutan terhadap tempat terbuka.',
        recommendations: ['Terapi perilaku', 'Teknik grounding', 'Edukasi tentang serangan panik']
      },
      {
        id: 11,
        conditions: { q16: 'ya', q17: 'ya', q18: 'tidak' },
        diagnosis: 'Gangguan Obsesif (Tanpa Kompulsi Dominan)',
        certainty: 0.78,
        description: 'Pikiran obsesif yang mengganggu tanpa ritual kompulsif yang jelas.',
        recommendations: ['Terapi kognitif', 'Mindfulness', 'Konseling']
      },
      {
        id: 12,
        conditions: { q1: 'tidak', q6: 'tidak', q12: 'tidak', q16: 'tidak' },
        diagnosis: 'Tidak Ada Indikasi Gangguan Mental Signifikan',
        certainty: 0.70,
        description: 'Berdasarkan jawaban, tidak ditemukan gejala gangguan mental yang signifikan.',
        recommendations: ['Pertahankan kesehatan mental', 'Olahraga teratur', 'Pola hidup sehat']
      },
      {
        id: 13,
        conditions: { q12: 'ya', q13: 'ya', q14: 'tidak' },
        diagnosis: 'Gangguan Stres Akut',
        certainty: 0.77,
        description: 'Reaksi stres jangka pendek terhadap peristiwa traumatis.',
        recommendations: ['Intervensi krisis', 'Dukungan sosial', 'Monitoring gejala']
      },
      {
        id: 14,
        conditions: { q2: 'ya', q5: 'ya', q4: 'tidak' },
        diagnosis: 'Gangguan Mood Subsindromal',
        certainty: 0.72,
        description: 'Gejala mood yang tidak memenuhi kriteria gangguan penuh.',
        recommendations: ['Pemantauan gejala', 'Aktivitas menyenangkan', 'Support system']
      },
      {
        id: 15,
        conditions: { q7: 'ya', q8: 'ya', q6: 'tidak' },
        diagnosis: 'Gangguan Kecemasan Terbatas',
        certainty: 0.74,
        description: 'Kecemasan yang muncul dalam situasi tertentu.',
        recommendations: ['Terapi situasional', 'Teknik relaksasi', 'Manajemen stres']
      },
      {
        id: 16,
        conditions: { q19: 'ya', q18: 'ya', q16: 'tidak' },
        diagnosis: 'Perilaku Kompulsif',
        certainty: 0.76,
        description: 'Perilaku berulang yang sulit dikendalikan.',
        recommendations: ['Terapi perilaku', 'Habit reversal training', 'Konseling']
      },
      {
        id: 17,
        conditions: { q15: 'ya', q14: 'ya', q12: 'tidak' },
        diagnosis: 'Gangguan Adaptasi',
        certainty: 0.79,
        description: 'Kesulitan menyesuaikan diri dengan stressor atau perubahan hidup.',
        recommendations: ['Konseling adaptasi', 'Problem-solving therapy', 'Dukungan sosial']
      },
      {
        id: 18,
        conditions: { q3: 'ya', q4: 'ya', q1: 'tidak' },
        diagnosis: 'Gangguan Tidur Primer',
        certainty: 0.73,
        description: 'Masalah tidur yang bukan merupakan bagian dari gangguan lain.',
        recommendations: ['Sleep hygiene', 'CBT-I', 'Evaluasi medis tidur']
      },
      {
        id: 19,
        conditions: { q20: 'ya', q6: 'ya', q1: 'tidak' },
        diagnosis: 'Fobia Spesifik',
        certainty: 0.81,
        description: 'Ketakutan intens terhadap objek atau situasi tertentu.',
        recommendations: ['Terapi eksposur bertahap', 'Desensitisasi sistematis', 'Relaksasi']
      },
      {
        id: 20,
        conditions: { q11: 'ya', q10: 'ya', q9: 'ya', q8: 'ya' },
        diagnosis: 'Gangguan Kecemasan Parah',
        certainty: 0.92,
        description: 'Kecemasan yang sangat mengganggu fungsi kehidupan sehari-hari.',
        recommendations: ['Intervensi intensif', 'Kombinasi terapi dan medikasi', 'Rujukan ke psikiater']
      }
    ],
};
