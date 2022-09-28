<?php
include 'koneksi.php';

// Mengambil data barang dengan kode paling besar
$query = mysqli_query($conn, "SELECT max(kd_brg) as kodeTerbesar FROM tbl_barang");
$data = mysqli_fetch_array($query);
$kode_barang = $data['kodeTerbesar'];

// mengambil kode paling besar menggunakan substr dan diubah ke int
$urutan = (int) substr($kode_barang, 3, 3);

// bilangan yang diambil akan di tambahkan satu untuk menentukan nomor urut berikutnya
$urutan++;

// membentuk kode barang baru
$huruf = "BRG";
$kode_barang = $huruf . sprintf("%03s", $urutan);

echo json_encode($kode_barang);