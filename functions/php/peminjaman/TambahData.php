<?php
require_once "../config.php";

if( $_POST ){

    $id_admin = htmlspecialchars($_POST['id_admin']);
    $kd_pinjam = htmlspecialchars($_POST['kd_pinjam']);
    $nm_brg = htmlspecialchars($_POST['nm_brg']);
    $jumlah_pinjam = htmlspecialchars($_POST['jumlah']);
    $ruangan = htmlspecialchars($_POST['ruangan']);
    $nm_peminjam = htmlspecialchars($_POST['peminjaman']);
    $tgl_pinjam = htmlspecialchars($_POST['tgl_pinjam']);
    $status_pinjam = htmlspecialchars($_POST['status_pinjam']);

    $query = "INSERT INTO tbl_peminjaman VALUES ('', '$id_admin', '$kd_pinjam', '$tgl_pinjam', '$ruangan', '$status_pinjam')";
    $sql = mysqli_query($conn, $query);

    $sql2 = mysqli_query($conn, "SELECT id_peminjaman FROM tbl_peminjaman WHERE kode = '$kd_pinjam'");
    $assoc = mysqli_fetch_assoc($sql2);
    $id_peminjaman = $assoc['id_peminjaman'];

    $query3 = "INSERT INTO tbl_detail_peminjaman VALUES ('', '$id_peminjaman', '$nm_brg')";
    $sql3 = mysqli_query($conn, $query3);

    if( $sql && $sql3 ){
        $result['status'] = '1';
        $result['msg'] = "Data Berhasil Ditambahkan !";
    }
    else{
        $result['status'] = '0';
        $result['msg'] = "Data Gagal Ditambahkan !";
        $result['error'] = mysqli_error($conn);
    }

    echo json_encode($result);
}