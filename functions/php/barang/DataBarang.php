<?php
include 'koneksi.php';

$query = "SELECT 
    tbl_barang.id_brg,
    tbl_barang.kd_brg, 
    tbl_barang.nm_brg, 
    tbl_kategori.nm_kategori, 
    tbl_satuan.satuan, 
    tbl_barang.stok, 
    tbl_merk.nm_merk, 
    tbl_barang.spesifikasi 
        FROM tbl_barang JOIN tbl_kategori ON tbl_barang.kategori = tbl_kategori.id_kategori JOIN tbl_satuan ON tbl_barang.satuan = tbl_satuan.id_satuan JOIN tbl_merk ON tbl_barang.merk = tbl_merk.id_merk";

$sql = mysqli_query($conn, $query);
$result = [];
while($fetch = mysqli_fetch_array($sql)){
    $result[] = $fetch;
}
echo json_encode($result);
?>