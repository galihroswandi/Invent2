<?php
require_once './../config.php';

if( $_POST ){

    $nm_satuan = htmlspecialchars($_POST['nm_satuan']);

    $sql = mysqli_query($conn, "INSERT INTO tbl_satuan VALUES('', '$nm_satuan')");
    if( $sql ){
        $result['status'] = '1';
        $result['msg'] = 'Data Berhasil Ditambahkan !';
    }else{
        $result['status'] = '0';
        $result['msg'] = 'Data Gagal Ditambahkan !';
    }

    echo json_encode($result);
}