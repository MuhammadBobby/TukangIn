// Ambil nilai parameter 'nama' dari URL
const params = new URLSearchParams(window.location.search);
const nama = params.get("nama");

// Periksa apakah parameter 'nama' ada dalam URL
if (nama) {
  // Jika 'nama' ada, ubah teks di dalam elemen dengan id 'nama'
  const namaElement = document.getElementById("nama");
  namaElement.textContent = nama;
} else {
  // Jika 'nama' tidak ada, tampilkan pesan default
  const namaElement = document.getElementById("nama");
  namaElement.textContent = "Tukang Not Found";
}
