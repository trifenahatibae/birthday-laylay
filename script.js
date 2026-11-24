/*
  ==========================================================
  EDIT KONTEN WEBSITE DI BAGIAN INI
  Simpan (Ctrl+S), lalu refresh browser.
  Foto: taruh file foto di folder assets/photos lalu tulis path-nya.
  Musik: taruh file MP3 di folder assets lalu isi musicFile.
  ==========================================================
*/
const birthday = {
  name: "My Favorite Person",       // Nama pacar
  intro: "Hari ini dunia merayakan seseorang yang begitu berarti bagiku.",
  sender: "Your Favorite Person",
  letterTitle: "Untuk kamu, sayang.",
  letterPreview: "Untuk seseorang yang selalu punya tempat spesial di hatiku...",
  letter: `Selamat ulang tahun, sayang.

Terima kasih sudah hadir dan menjadi bagian dari cerita hidupku. Aku mungkin tidak selalu pandai mengungkapkan semuanya, tetapi aku harap kamu tahu betapa berharganya dirimu.

Di umur yang baru ini, aku berharap kamu selalu diberi kesehatan, ketenangan, keberanian, dan banyak alasan untuk tersenyum. Semoga semua hal yang sedang kamu perjuangkan menemukan jalannya.

Kalau suatu hari terasa berat, ingat bahwa kamu tidak harus melewati semuanya sendirian. Aku akan selalu mendoakan yang terbaik untukmu.

Selamat bertambah usia. Teruslah menjadi dirimu yang luar biasa. I love you. ♡`,
  wishes: "Semoga hal-hal baik datang tanpa perlu kamu minta. Semoga kamu selalu sehat, dikelilingi cinta, dan diberi keberanian untuk mengejar semua yang kamu impikan.",
  surprise: "Satu hal yang ingin selalu aku ingatkan: dari sekian banyak hal indah di dunia, bertemu denganmu adalah salah satunya. Happy birthday, my love! ♡",
  musicFile: "", // Contoh: "assets/lagu-kita.mp3" (gunakan file audio milikmu)
  heroPhoto: "assets/photos/foto-utama.jpg",
  memories: [
    { date: "THE BEGINNING", title: "Awal cerita kita", description: "Hari ketika cerita sederhana kita mulai menjadi sesuatu yang berarti.", image: "assets/photos/kenangan-1.jpg" },
    { date: "A LITTLE HAPPINESS", title: "Momen sederhana", description: "Tidak perlu sesuatu yang mewah, asal bersama kamu rasanya istimewa.", image: "assets/photos/kenangan-2.jpg" },
    { date: "MY FAVORITE", title: "Salah satu favoritku", description: "Satu dari banyak kenangan yang ingin kusimpan baik-baik.", image: "assets/photos/kenangan-3.jpg" }
  ],
  timeline: [
    { date: "FIRST CHAPTER", title: "Pertama kali bertemu", description: "Di sinilah cerita kita mulai. Mungkin terlihat biasa, tetapi ternyata menjadi awal dari banyak hal indah." },
    { date: "A MOMENT TO KEEP", title: "Mulai saling mengenal", description: "Percakapan kecil, tawa, dan cerita yang perlahan membuat kita semakin dekat." },
    { date: "TODAY & ALWAYS", title: "Hari ini dan seterusnya", description: "Masih banyak cerita yang menunggu untuk kita tulis bersama. Semoga kita terus menemukan alasan untuk bersyukur." }
  ]
};

// Menampilkan konten dari konfigurasi di atas
document.title = `Happy Birthday, ${birthday.name}`;
document.getElementById("heroName").innerHTML = `${escapeHTML(birthday.name)}<br><em>My Favorite.</em>`;
document.getElementById("heroIntro").textContent = birthday.intro;
document.getElementById("letterFrom").textContent = birthday.sender;
document.getElementById("letterPreview").textContent = birthday.letterPreview;
document.getElementById("letterTitle").textContent = birthday.letterTitle;
document.getElementById("letterBody").textContent = birthday.letter;
document.getElementById("letterSignature").textContent = birthday.sender;
document.getElementById("wishText").textContent = birthday.wishes;
document.getElementById("footerName").textContent = `JUST FOR ${birthday.name.toUpperCase()}`;

const heroPhoto = document.getElementById("heroPhoto");
heroPhoto.src = birthday.heroPhoto;
heroPhoto.onerror = () => {
  heroPhoto.src = "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=900&q=85";
};

const memoryGrid = document.getElementById("memoryGrid");
birthday.memories.forEach((memory, index) => {
  const card = document.createElement("article");
  card.className = "memory-card reveal";
  const photo = document.createElement("div");
  photo.className = "memory-photo";
  const img = document.createElement("img");
  img.src = memory.image;
  img.alt = memory.title;
  img.loading = "lazy";
  img.onerror = () => {
    img.src = `https://images.unsplash.com/photo-${["1516589178581-6cd7833ae3b2","1522673607200-164d1b6ce486","1511988617509-a57c8a288659"][index]}?auto=format&fit=crop&w=800&q=80`;
  };
  photo.appendChild(img);
  const date = document.createElement("div");
  date.className = "timeline-date";
  date.textContent = memory.date;
  const title = document.createElement("h3");
  title.textContent = memory.title;
  const description = document.createElement("p");
  description.textContent = memory.description;
  card.append(photo, date, title, description);
  memoryGrid.appendChild(card);
});

const timelineList = document.getElementById("timelineList");
birthday.timeline.forEach(item => {
  const article = document.createElement("article");
  article.className = "timeline-item reveal";
  article.innerHTML = '<span class="timeline-dot"></span>';
  const date = document.createElement("div"); date.className = "timeline-date"; date.textContent = item.date;
  const title = document.createElement("h3"); title.textContent = item.title;
  const desc = document.createElement("p"); desc.textContent = item.description;
  article.append(date, title, desc); timelineList.appendChild(article);
});

// Animasi elemen saat masuk layar
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Amplop surat
const envelope = document.getElementById("envelope");
const fullLetter = document.getElementById("fullLetter");
envelope.addEventListener("click", () => {
  envelope.querySelector(".envelope").classList.add("open");
  setTimeout(() => {
    fullLetter.classList.add("visible");
    fullLetter.setAttribute("aria-hidden", "false");
    fullLetter.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 650);
  sparkleBurst();
});
document.getElementById("closeLetter").addEventListener("click", () => {
  fullLetter.classList.remove("visible");
  fullLetter.setAttribute("aria-hidden", "true");
  envelope.querySelector(".envelope").classList.remove("open");
});

// Musik: browser meminta interaksi pengguna sebelum audio diputar.
// Jika musicFile kosong, tombol akan meminta pengguna memilih file musik sendiri.
const audio = document.getElementById("backgroundMusic");
const musicToggle = document.getElementById("musicToggle");
const musicLabel = document.getElementById("musicLabel");
const musicUpload = document.getElementById("musicUpload");
let musicReady = false;
if (birthday.musicFile) {
  audio.src = birthday.musicFile;
  musicReady = true;
}
musicToggle.addEventListener("click", async () => {
  if (!musicReady) {
    musicUpload.click();
    return;
  }
  if (audio.paused) {
    try { await audio.play(); musicLabel.textContent = "Pause music"; }
    catch { musicLabel.textContent = "Tap to play"; }
  } else {
    audio.pause(); musicLabel.textContent = "Play music";
  }
});
musicUpload.addEventListener("change", () => {
  const file = musicUpload.files[0];
  if (!file) return;
  audio.src = URL.createObjectURL(file);
  musicReady = true;
  audio.play().then(() => musicLabel.textContent = "Pause music").catch(() => musicLabel.textContent = "Play music");
});

// Kejutan dan confetti
document.getElementById("surpriseButton").addEventListener("click", () => {
  document.getElementById("surpriseResult").textContent = birthday.surprise;
  confettiBurst();
  sparkleBurst();
});
function confettiBurst() {
  const symbols = ["✦", "♥", "✧", "✳", "♡"];
  for (let i = 0; i < 65; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.color = Math.random() > .5 ? "#e8ca82" : "#fff0c4";
    piece.style.fontSize = 10 + Math.random() * 18 + "px";
    piece.style.animationDelay = Math.random() * .9 + "s";
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 5000);
  }
}
function sparkleBurst() {
  for (let i = 0; i < 18; i++) {
    const s = document.createElement("span");
    s.className = "spark"; s.textContent = "✦";
    s.style.left = (35 + Math.random() * 30) + "vw";
    s.style.top = (35 + Math.random() * 30) + "vh";
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 1200);
  }
}
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[char]));
}
