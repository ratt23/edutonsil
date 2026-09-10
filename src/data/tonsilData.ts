export interface RecommendationItem {
  id: string;
  title: string;
  points: string[];
  note: string;
  details: string;
  iconType: 'water' | 'food' | 'rest' | 'hygiene' | 'medicine';
}

export interface AvoidItem {
  id: string;
  title: string;
  summary: string;
  whyAvoid: string;
  iconType: 'exercise' | 'hotfood' | 'hardfood' | 'spicyacid' | 'smoking' | 'straining' | 'dustheat';
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  tag: string;
}

export interface ChecklistItem {
  id: string;
  text: string;
}

export const HERO_DATA = {
  overtitle: 'Setelah Operasi',
  title: 'Tonsilektomi',
  ribbonText: 'Cara Merawat Diri di Rumah',
  subtitle: 'Panduan perawatan selama masa pemulihan.',
  objective: 'Agar penyembuhan lebih cepat dan mencegah perdarahan ulang (re-bleeding).',
  patientQuote: 'Jaga diri, cepat sembuh, kembali beraktivitas seperti biasa ♥',
  tonsilNoteTitle: 'Ini adalah area bekas operasi.',
  tonsilNoteText: 'Proses penyembuhan memang butuh waktu.',
  quickEmergencyAlert: 'Ada perdarahan setelah operasi? Segera ke IGD.',
};

export const RECOMMENDATIONS: RecommendationItem[] = [
  {
    id: 'banyak-minum',
    title: 'Banyak minum',
    points: [
      'Minum air putih secara rutin dan cukup.',
      'Boleh minuman dingin/suhu ruang bila lebih nyaman.',
      'Jangan menunggu sampai haus.',
    ],
    note: 'Hidrasi yang baik membantu mencegah tenggorokan kering dan mendukung proses penyembuhan.',
    details: 'Menjaga selaput lendir tenggorokan tetap basah sangat penting untuk meredakan rasa nyeri dan mencegah krusta/eskar mengering terlalu dini yang bisa memicu robekan. Disarankan minum sedikit-sedikit tapi sering sepanjang hari.',
    iconType: 'water',
  },
  {
    id: 'tetap-makan',
    title: 'Tetap makan',
    points: [
      'Makan sesuai toleransi dan tingkatkan bertahap.',
      'Pilih makanan yang nyaman ditelan.',
      'Minum obat antinyeri sesuai resep, terutama sebelum makan bila nyeri membuat sulit menelan.',
    ],
    note: 'Jangan sengaja mengurangi makan/minum karena takut luka berdarah.',
    details: 'Tubuh membutuhkan asupan kalori dan protein untuk regenerasi jaringan luka bedah. Awali dengan makanan lunak bersuhu dingin atau sejuk (seperti bubur dingin, puding, gelatin, sup hangat-kuku). Tingkatkan tekstur secara bertahap seiring membaiknya kemampuan menelan.',
    iconType: 'food',
  },
  {
    id: 'istirahat-cukup',
    title: 'Istirahat cukup',
    points: [
      'Tidur dan istirahat yang cukup.',
      'Aktivitas ringan seperti berjalan di rumah diperbolehkan.',
    ],
    note: 'Hindari aktivitas yang memicu lonjakan denyut jantung mendadak.',
    details: 'Istirahat memberikan kesempatan sel tubuh fokus pada proses penyembuhan jaringan. Batasi aktivitas fisik berat dan luangkan waktu untuk tidur cukup. Berjalan santai di dalam rumah tetap dianjurkan agar aliran darah lancar.',
    iconType: 'rest',
  },
  {
    id: 'kebersihan-mulut',
    title: 'Jaga kebersihan mulut',
    points: [
      'Tetap lakukan kebersihan mulut sesuai instruksi dokter.',
      'Sikat gigi dengan hati-hati.',
    ],
    note: 'Lapisan putih/putih kekuningan di bekas tonsil adalah bagian normal dari proses penyembuhan, bukan selalu nanah.',
    details: 'Sikat gigi secara perlahan dengan sikat berbulu lembut dan hindari menyentuh area belakang rongga mulut dekat tonsil. Jangan melakukan kumur berkecamuk (gargling) terlalu kuat agar lapisan pelindung luka tidak terlepas sebelum waktunya.',
    iconType: 'hygiene',
  },
  {
    id: 'minum-obat',
    title: 'Minum obat sesuai resep',
    points: [
      'Obat antinyeri diminum teratur.',
      'Antibiotik, bila diresepkan, dihabiskan sesuai instruksi.',
      'Jangan menambahkan obat sendiri, terutama obat yang dapat meningkatkan risiko perdarahan.',
    ],
    note: 'Hindari obat golongan aspirin atau anti-inflamasi tertentu tanpa persetujuan dokter THT.',
    details: 'Kepatuhan meminum pereda nyeri sesuai jadwal menjaga kenyamanan sehingga pasien tidak takut minum air dan makan. Jangan menambahkan obat pereda nyeri bebas tanpa konfirmasi dokter karena beberapa jenis obat dapat mengencerkan darah.',
    iconType: 'medicine',
  },
];

export const INSPIRATIONAL_QUOTE = 'Istirahat, minum cukup, makan sesuai toleransi = pemulihan lebih cepat ♥';

export const BLEEDING_RISK_NOTE = {
  title: 'Risiko perdarahan',
  description: 'masih bisa terjadi sampai ± 2 minggu setelah operasi, terutama saat lapisan luka/eskar mulai terlepas (biasanya hari ke-5–10).',
  banner: 'Jangan panik jika melihat lapisan putih di area operasi. Itu normal!',
};

export const AVOID_ITEMS: AvoidItem[] = [
  {
    id: 'aktivitas-berat',
    title: 'Aktivitas fisik berat selama ±2 minggu',
    summary: 'Hindari olahraga, berlari, gym, angkat beban, aktivitas yang membuat mengejan, dan pekerjaan fisik berat.',
    whyAvoid: 'Peningkatan tekanan darah arterial dan denyut jantung saat berolahraga berat dapat mendorong dan membuka pembuluh darah yang sedang menutup di area amandel, memicu perdarahan sekunder pasca bedah.',
    iconType: 'exercise',
  },
  {
    id: 'makanan-panas',
    title: 'Makanan/minuman yang sangat panas',
    summary: 'Hindari kopi/teh panas, makanan beruap/panas, sup panas. Pilih suhu dingin atau hangat-suam kuku.',
    whyAvoid: 'Suhu panas memicu vasodilatasi (pelebaran) pembuluh darah kapiler di bekas operasi, meningkatkan risiko perdarahan aktif dan memperberat sensasi nyeri menyengat pada luka mukosa tenggorokan.',
    iconType: 'hotfood',
  },
  {
    id: 'makanan-keras',
    title: 'Makanan yang keras, tajam, atau mudah menggores',
    summary: 'Misalnya keripik, kerupuk, kacang, makanan sangat renyah/keras. Jika menyebabkan nyeri atau trauma, sebaiknya dihindari.',
    whyAvoid: 'Tepian makanan yang kasar dan tajam dapat menggores atau mengikis lapisan krusta pelindung (eskar) yang belum matang, menyebabkan perdarahan mekanis dan trauma luka.',
    iconType: 'hardfood',
  },
  {
    id: 'makanan-pedas-asam',
    title: 'Makanan/minuman yang pedas atau asam',
    summary: 'Contoh: sambal, jeruk/jus citrus, makanan dengan cuka, minuman bersoda. Dapat menyebabkan iritasi dan nyeri pada luka.',
    whyAvoid: 'Bahan asam dan pedas mengiritasi serabut saraf terbuka di luka operasi, memicu rasa perih luar biasa, spasme otot faring, dan dapat menghambat proses regenerasi epitel.',
    iconType: 'spicyacid',
  },
  {
    id: 'merokok',
    title: 'Merokok dan asap rokok',
    summary: 'Hindari rokok/vape serta lingkungan berasap karena dapat mengiritasi tenggorokan dan mengganggu pemulihan.',
    whyAvoid: 'Zat racun rokok menyempitkan pembuluh darah perifer dan menurunkan pasokan oksigen yang krusial untuk regenerasi jaringan, selain memicu batuk yang dapat merobek luka operasi.',
    iconType: 'smoking',
  },
  {
    id: 'mengejan',
    title: 'Hindari mengejan',
    summary: 'Cegah konstipasi dengan cukup minum dan asupan serat sesuai toleransi.',
    whyAvoid: 'Manuver mengejan kuat secara drastis meningkatkan tekanan vena intrakranial dan daerah leher, yang berpotensi memecahkan jepitan pembuluh darah di dasar amandel.',
    iconType: 'straining',
  },
  {
    id: 'lingkungan-debu-panas',
    title: 'Hindari lingkungan berdebu dan panas berlebihan',
    summary: 'Termasuk aktivitas di tempat berdebu atau paparan panas berlebihan selama masa pemulihan.',
    whyAvoid: 'Debu mengiritasi saluran napas dan merangsang refleks batuk/bersin mendadak yang menekan tenggorokan. Suhu panas terik mempercepat dehidrasi mukosa mulut.',
    iconType: 'dustheat',
  },
];

export const EMERGENCY_DATA = {
  title: 'SEGERA KE IGD',
  subtitle: 'bila ada tanda-tanda perdarahan:',
  signs: [
    'Keluar darah merah segar dari mulut',
    'Meludah atau muntah darah',
    'Terdapat bekuan darah dari mulut',
    'Perdarahan terus berlangsung',
    'Terasa darah terus mengalir ke tenggorokan',
    'Pusing, lemas, berdebar, atau hampir pingsan',
    'Sulit bernapas',
  ],
  alertBalloon: 'Jangan menunggu perdarahan berhenti sendiri. Segera periksakan ke IGD!',
  primaryWarning: 'Jangan menunggu perdarahan berhenti sendiri. Segera ke IGD.',
};

export const DAILY_CHECKLIST_ITEMS: ChecklistItem[] = [
  { id: 'check-drink', text: 'Saya mengikuti anjuran minum.' },
  { id: 'check-food', text: 'Saya makan sesuai arahan dokter.' },
  { id: 'check-meds', text: 'Saya minum obat sesuai resep.' },
  { id: 'check-hygiene', text: 'Saya menjaga kebersihan mulut.' },
  { id: 'check-rest', text: 'Saya beristirahat sesuai arahan dokter.' },
];

export const CHECKLIST_DISCLAIMER = 'Checklist membantu mengingat perawatan, bukan menilai kondisi medis.';

export const FAQS: FaqItem[] = [
  {
    id: 'lapisan-putih',
    question: 'Apakah lapisan putih di area operasi selalu berarti nanah?',
    answer: 'Tidak selalu. Lapisan berwarna putih atau putih kekuningan di bekas amandel (disebut eskar atau lapisan slough fibrin) adalah bagian yang normal dan alami dari proses penyembuhan jaringan basah di rongga mulut. Lapisan ini bertindak seperti plester alami yang melindungi pembuluh darah di bawahnya sampai mukosa baru tumbuh. Selama tidak disertai demam tinggi atau bau busuk menyengat, ini bukan tanda infeksi.',
    tag: 'Materi Edukasi Medis',
  },
  {
    id: 'sulit-makan',
    question: 'Bagaimana jika makan atau minum terasa sulit karena nyeri menelan?',
    answer: 'Nyeri menelan adalah keluhan umum pasca operasi tonsil, terutama beberapa hari pertama dan sekitar hari ke-5 sampai ke-7 saat eskar mulai mengelupas. Tips praktis: minumlah obat pereda nyeri sekitar 30 menit sebelum makan, pilih makanan dingin dan lembut (puding, es krim tanpa toping keras, sup bersuhu sejuk), dan utamakan minum cairan sedikit demi sedikit tetapi berulang kali agar tidak dehidrasi.',
    tag: 'Materi Edukasi Medis',
  },
  {
    id: 'kapan-aktivitas',
    question: 'Kapan boleh kembali beraktivitas seperti biasa?',
    answer: 'Aktivitas ringan di rumah seperti menonton, membaca, dan berjalan santai diperbolehkan sejak hari pertama pemulihan. Namun, aktivitas berat seperti olahraga lari, gym, angkat barang berat, atau pekerjaan fisik di luar rumah harus ditunda minimal ±2 minggu untuk mencegah lonjakan tekanan darah yang memicu perdarahan sekunder.',
    tag: 'Materi Edukasi Medis',
  },
  {
    id: 'muncul-darah',
    question: 'Apa yang harus dilakukan jika muncul darah dari mulut?',
    answer: 'SEGERA KE IGD! Jika Anda melihat darah merah segar keluar dari mulut, meludah darah, muntah darah, ada bekuan darah tebal, atau merasa ada cairan darah yang terus mengalir di tenggorokan, jangan menunggu darah berhenti sendiri di rumah. Segera menuju IGD rumah sakit terdekat. Di perjalanan, duduk tegak condongkan kepala sedikit ke depan agar darah tidak tertelan, dan tempelkan kompres es di leher.',
    tag: 'Protokol Darurat IGD • THT',
  },
];

export const FOOTER_DATA = {
  warmWish: 'Semoga cepat pulih dan sehat selalu',
  draftNote: 'Materi edukasi panduan perawatan di rumah.',
  doctorNote: 'Ikuti instruksi dokter yang merawat Anda.',
};
