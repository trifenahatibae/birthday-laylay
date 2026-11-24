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
- `name`: laylay.
- `intro`: hai lay, selamat tanggal 2 desember yang ke 19 tahun ya.
- `sender`: trifena keren abisss.
- `letterTitle`, `letterPreview`, `letter`:Happy Birthday, My Favorite Person!
Hari ini adalah hari spesial seseorang yang pernah menjadi bagian paling indah dalam cerita hidupku.
Selamat bertambah usia, manis. Semoga hari ini dipenuhi senyuman, kebahagiaan, dan hal-hal baik yang selalu kamu harapkan.
Ada sedikit sesuatu dari aku untuk kamu. Jadi, jangan buru-buru menutup halaman ini, yaa. Hehehe. 

Hari ini adalah hari spesial seseorang yang pernah menjadi bagian paling indah dalam cerita hidupku.
Selamat bertambah usia, manis. Semoga hari ini dipenuhi senyuman, kebahagiaan, dan hal-hal baik yang selalu kamu harapkan.
Ada sedikit sesuatu dari aku untuk kamu. Jadi, jangan buru-buru menutup halaman ini, yaa. Hehehe..

- `wishes`, `surprise`: Ada banyak hal kecil tentang kamu yang ternyata masih aku ingat.
Aku kangen cerita-cerita kecil kamu. Bahkan hal sesederhana kegiatan yang sedang kamu lakukan, atau cerita random yang mungkin menurut orang lain tidak penting.
Aku kangen humor kamu, kecantikan kamu, kebaikan kamu, dan segala hal yang membuat kamu menjadi diri kamu sendiri.
Oh iya!
Jangan lupa makan semangka hari ini yaa! Kamu lucu kalau sudah makan buah kesukaan kamu itu, WKWKWK.
Terus, matcha-nya jangan lupa juga. Kamu kan maniac matcha, WKWKWK.
Pokoknya, jangan lupa bahagia dan melakukan hal-hal yang kamu suka.

The Lapeto Incident 🏍️

Masih ingat kejadian waktu kita pulang setelah mandi di Lapeto?
Maafin aku yang pernah bikin kamu jatuh dari motor yaa, WKWKWK.
Reaksiku mungkin emang biasa aja waktu itu, tapi jujur aku takut kamu kenapa-kenapa.
#PanikDikit
Aku mungkin ga kelihatan panik, tetapi dalam hati sudah macam-macam pikirannya. Yang penting waktu itu kamu baik-baik saja.
Kalau nanti ada kesempatan membuat kenangan baru, semoga kali ini kita tidak jatuh dari motor lagi. WKWKWK.

Our Usual Place 🍽️

Oh iya, satu lagi!
Aku tunggu buat ku traktir di tempat makan kita biasanya yakk, eheheh.
Kalau kamu berkenan, tentunya. Anggap saja kesempatan untuk menikmati makanan enak dan sedikit nostalgia.

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
