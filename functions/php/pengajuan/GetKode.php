<?php
require_once './../config.php';

// Mengambil kode terbesar dari database
$sql = mysqli_query($conn, "SELECT max(kode) as kodeTerbesar FROM tbl_pengajuan");
$data = mysqli_fetch_array($sql);
$kd = $data['kodeTerbesar'];

// dipisah menggunakan substring
$fake = (int) substr($kd, 4, 4);

// dijumlahkan
$fake++;

// membentuk kode pengajuan
$text = "PNJ";
$kd_pengajuan = $text . sprintf("%04s", $fake);

echo json_encode($kd_pengajuan);