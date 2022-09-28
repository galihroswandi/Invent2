<?php
require_once 'koneksi.php';

if( $_POST ){
    
    $kd_barang = $_POST['kd_brg'];
    $nama_barang = $_POST['nama_barang'];
    $merk = $_POST['merk'];
    $satuan = $_POST['satuan'];
    $stok = $_POST['stok'];
    $kategori = $_POST['kategori'];
    $spesifikasi = $_POST['spesifikasi'];

    $query = "INSERT INTO tbl_barang VALUES(null, '$kd_barang', '$nama_barang', '$kategori', '$satuan', '$stok', '$merk', '$spesifikasi')";

    $sql = mysqli_query($conn, $query);
    if( $sql ){
        $result['status'] = '1';
        $result['msg'] = 'Data Berhasil Ditambahkan !';
    }else{
        $result['status'] = '0';
        $result['msg'] = "Data Gagal Ditambahkan !";
        $result['error'] = mysqli_error($conn);
        $result['errno'] = mysqli_errno($conn);
    }

    echo json_encode($result);
}