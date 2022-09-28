<?php
require_once './../config.php';

if( $_POST ){

    $nm_kategori = htmlspecialchars($_POST['nm_kategori']);

    $sql = mysqli_query($conn, "INSERT INTO tbl_kategori VALUES('', '$nm_kategori')");

    if( $sql ){
        $result['status'] = '1';
        $result['msg'] = "Data Berhasil Ditambahkan !";
    }else{
        $result['status'] = '0';
        $result['msg'] = "Data Gagal Ditambahkan !";
    }

    echo json_encode($result);
}