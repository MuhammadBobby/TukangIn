<?php
$servername = "localhost";
$username = "root"; // Ganti dengan username MySQL Anda
$password = ""; // Ganti dengan password MySQL Anda
$database = "tukangin"; // Ganti dengan nama database Anda

// Membuat koneksi ke database
$conn = new mysqli($servername, $username, $password, $database);

// Memeriksa koneksi
if ($conn->connect_error) {
    die("Koneksi ke database gagal: " . $conn->connect_error);
}

// Mengambil data dari request
$nama = $_POST["nama"];
$email = $_POST["email"];
$jenis = $_POST["jenis"];
$create = date('Y-m-d H:i:s');

// Menyimpan data ke dalam database
$sql = "INSERT INTO mitra (id, nama, email, jenis, create_at) VALUES ('', '$nama', '$email', '$jenis', '$create')";

if ($conn->query($sql) === TRUE) {
    $success = true;
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Menutup koneksi
$conn->close();

?>



<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kembali</title>
    <!-- tailwind -->
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body>
    <!-- home -->
    <section class="home bg-[#69dbc3] w-fit p-3 rounded-2xl fixed  top-[50%] left-1/2 -translate-x-[50%] -translate-y-[50%] opacity-30 hover:opacity-100">
        <a href="mitra/mitra.html">
            <svg role="img" viewBox="0 0 24 24" width="70px" height="55px" class="m-auto" xmlns="http://www.w3.org/2000/svg">
                <title>Google Home</title>
                <path d="M12 0a1.44 1.44 0 0 0-.947.399L.547 10.762a1.26 1.26 0 0 0-.342.808v11.138c0 .768.53 1.292 1.311 1.292h20.968c.78 0 1.311-.522 1.311-1.292V11.57a1.25 1.25 0 0 0-.34-.804L15.68 3.097h-.001L12.947.4A1.454 1.454 0 0 0 12 0Zm0 6.727 6.552 6.456v5.65H5.446v-5.65z" />
            </svg>
            <p class="text-center text-xs font-semibold">Mitra</p>
        </a>
    </section>

    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

    <?php if ($success) : ?>
        <script>
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Permintaan anda terkirim, jangan lupa juga untuk mengirim persyaratan lain via email",
                showConfirmButton: false,
                timer: 3000,
            });
        </script>
    <?php endif ?>
</body>

</html>