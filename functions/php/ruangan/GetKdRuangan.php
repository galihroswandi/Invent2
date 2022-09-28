<?php
require_once '../config.php';

// mengambil kd_brg terbesar di database
$sql = mysqli_query($conn, "SELECT max(kd_ruangan) as kd_terbesar FROM tbl_ruangan");
$data = mysqli_fetch_array($sql);
$kode_barang = $data['kd_terbesar'];

// menyeleksi kode yang paling besar di ubah ke int
$kd_brg_fake = (int) substr($kode_barang, 3, 3);

// bilangan di tambahkan untuk membuat nomor urut berikutnya
$kd_brg_fake++;

// membentuk kode ruangan baru 
$text = "RGN";
$kode_barang = $text . sprintf("%03s", $kd_brg_fake);

echo json_encode($kode_barang);
