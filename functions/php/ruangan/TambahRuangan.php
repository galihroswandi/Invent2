<?php
require_once '../config.php';

if( $_POST ){

    $kd_ruangan = htmlspecialchars($_POST['kd_ruangan']);
    $nm_ruangan = htmlspecialchars($_POST['nm_ruangan']);
    $spesifikasi = htmlspecialchars($_POST['spesifikasi']);

    $query = "INSERT INTO tbl_ruangan VALUES('', '$kd_ruangan', '$nm_ruangan', '$spesifikasi')";

    $sql = mysqli_query($conn, $query);
    if( $sql ){
        $result['status'] = '1';
        $result['msg'] = "Data Berhasil Ditambahkan !";
    }else{
        $result['status'] = '0';
        $result['msg'] = "Data Gagal Ditambahkan !";
        $result['error'] = mysqli_error($conn);
    }

    echo json_encode($result);
}