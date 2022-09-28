<?php
require_once './../config.php';

if( $_POST ){

    $id_vendor = htmlspecialchars($_POST['id_vendor']);
    $nm_vendor = htmlspecialchars($_POST['nm_vendor']);
    $alamat = htmlspecialchars($_POST['alamat']);
    $no_telp = htmlspecialchars($_POST['no_telp']);

    $query = "UPDATE tbl_vendor SET
                nm_vendor = '$nm_vendor',
                alamat = '$alamat',
                no_telp = '$no_telp'
            WHERE id_vendor = '$id_vendor'";
    $sql = mysqli_query($conn, $query);
    if( $sql ){
        $result['status'] = '1';
        $result['msg'] = "Data Berhasil Diubah !";
    }else{
        $result['status'] = '0';
        $result['msg'] = "Data Gagal Diubah !";
    }

    echo json_encode($result);

}