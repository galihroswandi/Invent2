<?php
require_once './../config.php';

if( $_POST ){

    $merk = htmlspecialchars($_POST['nm_merk']);

    $sql = mysqli_query($conn, "INSERT INTO tbl_merk VALUES('', '$merk')");

    if( $sql ){
        $result['status'] = '1';
        $result['msg'] = "Data Berhasil Ditambahkan !";
    }else{
        $result['status'] = '0';
        $result['msg'] = "Data Gagal Dihapus !";
    }

    echo json_encode($result);
}