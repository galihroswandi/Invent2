<?php
require_once 'koneksi.php';

if( $_POST ){

    $id_brg = $_POST['id_brg'];
    $kd_barang = $_POST['kd_brg'];
    $nama_barang = $_POST['nama_barang'];
    $merk = $_POST['merk'];
    $satuan = $_POST['satuan'];
    $stok = $_POST['stok'];
    $kategori = $_POST['kategori'];
    $spesifikasi = $_POST['spesifikasi'];

    $query = "UPDATE tbl_barang SET
                kd_brg = '$kd_barang',
                nm_brg = '$nama_barang',
                kategori = '$kategori',
                satuan = '$satuan',
                stok = '$stok',
                merk = '$merk',
                spesifikasi = '$spesifikasi'
            WHERE id_brg = '$id_brg'";

    $sql = mysqli_query($conn, $query);

    if( $sql ){
        $result['status'] = '1';
        $result['msg'] = 'Data berhasil diubah !';
    }else{
        $result['status'] = '0';
        $result['msg'] = 'Data gagal diubah ';
    }

    echo json_encode($result);
}