<?php
require_once './../config.php';

if( $_POST ){

    $id_satuan = htmlspecialchars($_POST['id_satuan']);
    $satuan = htmlspecialchars($_POST['satuan']);

    $sql = mysqli_query($conn, "UPDATE tbl_satuan SET satuan = '$satuan' WHERE id_satuan = '$id_satuan'");
    if( $sql ){
        $result['status'] = '1';
        $result['msg'] = "Data Berhasil Diubah !";
    }else{
        $result['status'] = '0';
        $result['msg'] = "Data Gagal Diubah !";
    }
    echo json_encode($result);
}