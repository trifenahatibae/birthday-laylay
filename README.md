# Birthday Website — Black & Gold 🖤✨

Website ulang tahun romantis dengan tema hitam dan gold. Berjalan langsung di browser; tidak memakai backend, database, atau framework.

## Cara membuka di VS Code

1. Extract ZIP.
2. VS Code → **File → Open Folder** → pilih folder `website_ulang_tahun_gold`.
3. Buka `index.html`.
4. Jalankan dengan ekstensi **Live Server** (klik kanan → Open with Live Server).
   - Bisa juga klik dua kali `index.html` dari File Explorer untuk membukanya di browser.

## Mengedit konten

Buka `script.js`. Semua konten ada di objek `birthday` paling atas:
- `name`: nama pacar.
- `intro`: kalimat pembuka.
- `sender`: nama pengirim surat.
- `letterTitle`, `letterPreview`, `letter`: judul, cuplikan, dan isi surat.
- `wishes`, `surprise`: doa dan pesan kejutan.
- `memories`: daftar foto kenangan, judul, tanggal/keterangan.
- `timeline`: perjalanan hubungan kalian.

Simpan dengan Ctrl+S, lalu refresh browser.

## Mengganti foto kenangan

1. Masukkan foto kalian ke folder `assets/photos/`.
2. Ubah nama file atau sesuaikan path di `script.js`.
3. Path foto utama: `heroPhoto`.
4. Path foto galeri: `image` pada setiap item `memories`.

Contoh:
`heroPhoto: "assets/photos/foto-utama.jpg"`
`image: "assets/photos/kenangan-1.jpg"`

Sebaiknya gunakan JPG, PNG, atau WebP dan ukuran foto yang tidak terlalu besar agar website tetap cepat.

## Memasang musik latar

Ada dua cara:
- **Cara cepat:** klik tombol `♫ Play music` di website, lalu pilih file audio dari komputer. Musik akan diputar selama tab website terbuka.
- **Cara permanen:** masukkan file MP3 milikmu ke folder `assets/`, lalu isi `musicFile` di `script.js`, misalnya:
  `musicFile: "assets/lagu-kita.mp3"`

Browser biasanya tidak mengizinkan musik autoplay sebelum ada interaksi pengguna. Karena itu musik mulai setelah tombol musik ditekan.

## Catatan

- Foto contoh memakai gambar online sebagai fallback. Untuk hasil personal, ganti dengan foto kalian sendiri.
- Font Google Fonts memerlukan internet; website tetap bisa dibuka offline dengan font pengganti.
- Website berjalan lokal di browser. Jika ingin mengirim tautan ke pacar agar bisa dibuka dari perangkat lain, website perlu di-hosting (misalnya GitHub Pages atau Netlify).
