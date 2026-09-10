# Panduan Perawatan Pasca Tonsilektomi — RSU Siloam

Website edukasi interaktif satu halaman untuk panduan perawatan mandiri pasien setelah operasi tonsilektomi (amandel) di rumah.

Didesain secara setia mengikuti estetika poster medis edukatif yang hangat, ilustratif, ramah keluarga, dan mudah dipahami.

## ✨ Fitur Utama

- **Karakter Visual Poster Medis**: Nuansa putih gading dengan ornamen pastel, tipografi rounded (Nunito & Nunito Sans), serta aksen tulisan tangan hangat (Caveat).
- **Aset Ilustrasi SVG Mandiri**: Ilustrasi vektor pasien minum air, diagram rongga mulut tonsil dengan lapisan penyembuhan, dan seluruh kartu anjuran & pantangan.
- **Yang Boleh & Dianjurkan**: 5 kartu anjuran utama dengan drawer interaktif *"Lihat detail"* serta kartu informasi risiko perdarahan hari ke-5–10.
- **Yang Harus Dihindari**: 7 kartu larangan terperinci dengan tombol *"Mengapa perlu dihindari?"* yang menjelaskan rasional medis pencegahan perdarahan sekunder.
- **Blok Darurat SEGERA KE IGD**: Blok merah kontras tinggi menampilkan 7 tanda bahaya langsung tanpa accordion, lengkap dengan tombol akses darurat cepat di navbar dan floating action button pada ponsel.
- **Checklist Perawatan Hari Ini**: Penyimpanan harian berbasis `localStorage` (tanggal `YYYY-MM-DD`), reset otomatis pergantian hari, dan disclaimer medis tegas tanpa penilaian skor kesehatan.
- **FAQ Interaktif**: Jawaban terstruktur dan mudah dipahami seputar lapisan putih eskar, kesulitan menelan, waktu beraktivitas, dan tindakan darurat.
- **Logo Resmi RSU Siloam**: Identitas rumah sakit di bagian header navigasi.

## 🛠️ Teknologi

- **React 18 / 19**
- **TypeScript**
- **Vite**
- **Vanilla CSS** (Desain responsif, mobile-first, prefer-reduced-motion, aksesibilitas WCAG)
- **Lucide React** (Ikon antarmuka)
- **Canvas Confetti** (Efek mikro interaktif checklist)

## 🚀 Menjalankan Secara Lokal

```bash
# Instalasi dependensi
npm install

# Menjalankan server dev
npm run dev

# Build untuk produksi
npm run build
```
