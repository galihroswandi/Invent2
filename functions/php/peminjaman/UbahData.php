<?php
require_once "../config.php";

if( $_POST ){

    $id_peminjaman = htmlspecialchars($_POST['id_peminjaman']);
    $kd_pinjam = htmlspecialchars($_POST['kd_pinjam']);
    $barang = htmlspecialchars($_POST['nm_brg']);
    $ruangan = htmlspecialchars($_POST['ruangan']);
    $tanggal = htmlspecialchars($_POST['tanggal']);
    $status = htmlspecialchars($_POST['status']);

    $query = "UPDATE tbl_peminjaman, tbl_detail_peminjaman SET
                tbl_peminjaman.kode = '$kd_pinjam',
                tbl_peminjaman.tanggal = '$tanggal',
                tbl_peminjaman.id_ruangan = '$ruangan',
                tbl_peminjaman.status = '$status',
                tbl_detail_peminjaman.id_brg = '$barang'
            WHERE tbl_peminjaman.id_peminjaman = '$id_peminjaman' AND tbl_detail_peminjaman.id_peminjaman = '$id_peminjaman'";
    
    $sql = mysqli_query($conn, $query);

    if( $sql ){
        $result['status'] = '1';
        $result['msg'] = "Data Berhasil Diubah !";
    }else{
        $result['status'] = '0';
        $result['msg'] = "Data Gagal Ditambahkan !";
        $result['error'] = mysqli_error($conn);
    }

    echo json_encode($result);

}