<?php
require_once '../config.php';

// Mengambil data barang dengan kode paling besar
$query = mysqli_query($conn, "SELECT max(kode) as kodeTerbesar FROM tbl_peminjaman");
$data = mysqli_fetch_array($query);
$kode_barang = $data['kodeTerbesar'];

// mengambil kode paling besar menggunakan substr dan diubah ke int
$urutan = (int) substr($kode_barang, 4, 4);

// bilangan yang diambil akan di tambahkan satu untuk menentukan nomor urut berikutnya
$urutan++;

// membentuk kode barang baru
$huruf = "KDP";
$kode_barang = $huruf . sprintf("%04s", $urutan);

echo json_encode($kode_barang);