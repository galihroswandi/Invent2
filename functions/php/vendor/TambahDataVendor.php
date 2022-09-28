<?php
require_once './../config.php';

if( $_POST ){

    $nm_vendor = htmlspecialchars($_POST['nm_vendor']);
    $alamat = htmlspecialchars($_POST['alamat']);
    $no_telp = htmlspecialchars($_POST['no_telp']);

    $query = "INSERT INTO tbl_vendor VALUES('', '$nm_vendor', '$alamat', '$no_telp')";

    $sql = mysqli_query($conn, $query);
    if( $sql ){
        $result['status'] = '1';
        $result['msg'] = "Data Berhasil Ditambahkan !";
    }else{
        $result['status'] = '0';
        $result['ms'] = 'Data Gagal Ditambahkan !';
    }

    echo json_encode($result);
}