<?php
require_once "./../config.php";

if ( $_POST ){

    $id_kategori = htmlspecialchars($_POST['id_kategori']);
    $nm_kategori = htmlspecialchars($_POST['nm_kategori']);

    $query = "UPDATE tbl_kategori SET nm_kategori = '$nm_kategori' WHERE id_kategori = '$id_kategori'";
    $sql = mysqli_query($conn, $query);
    if( $sql ){
        $result['status'] = '1';
        $result['msg'] = "Data Berhasil Diubah !";
    }else{
        $result['status'] = '0';
        $result['status'] = mysqli_error($conn);
    }

    echo json_encode($result);
}