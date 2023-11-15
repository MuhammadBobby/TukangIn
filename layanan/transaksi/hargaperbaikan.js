// Ambil elemen form dan elemen harga
const form = document.getElementById("formKalkulator");
const hargaElement = document.getElementById("harga");
const ket = document.getElementById("ket");
const submit = document.getElementById("submit");
const cek = document.getElementById("cek");
const lagi = document.getElementById("lagi");

// Daftar harga untuk setiap jenis
const hargaJenis = {
  bangunan: 50000, // Harga per unit untuk jenis bangunan
  peralatan: 25000, // Harga per unit untuk jenis peralatan
  listrik: 40000, // Harga per unit untuk jenis listrik
  instalasi: 55000, // Harga per unit untuk jenis instalasi
};

// Event listener untuk form submit
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Ambil nilai jenis dan skala dari form
  const jenis = form.elements["jenis"].value;
  const skala = parseFloat(form.elements["skala"].value);

  // Validasi input skala
  if (isNaN(skala) || skala <= 0) {
    alert("Skala harus merupakan angka positif.");
    return;
  }

  // Hitung harga berdasarkan jenis dan skala
  const hargaPerUnit = hargaJenis[jenis]; // Ambil harga per unit berdasarkan jenis
  const totalHarga = hargaPerUnit * skala; // Hitung total harga

  // Tampilkan hasil harga di elemen harga
  hargaElement.textContent = `${totalHarga.toLocaleString()}`;
  ket.innerHTML = "*Pembayaran sementara hanya secara TUNAI";

  submit.classList.add("block");
  submit.classList.remove("hidden");

  cek.classList.add("hidden");
  cek.classList.remove("block");
});

// event pesan
submit.addEventListener("click", function () {
  // alert("Pesanan Anda sudah dikirim \nTukang akan segera datang \nTerima Kasih telah memesan jasa dan layanan kami :)");
  // alert
  Swal.fire({
    title: "Apakah Anda Yakin Ingin Melakukan Pemesanan?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Pesan",
    denyButtonText: `Batalkan Pemesanan`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire("Pesanan Anda Sukses!", "", "success");
    } else if (result.isDenied) {
      Swal.fire("Pemesanan Dibatalkan", "", "info");
    }
  });

  event.preventDefault();
  form.reset();

  submit.classList.remove("block");
  submit.classList.add("hidden");

  cek.classList.remove("hidden");
  cek.classList.add("block");

  hargaElement.textContent = "";
});

// event cek lagi
lagi.addEventListener("click", function () {
  event.preventDefault();
  form.reset();

  submit.classList.remove("block");
  submit.classList.add("hidden");

  cek.classList.remove("hidden");
  cek.classList.add("block");

  hargaElement.textContent = "";
});
