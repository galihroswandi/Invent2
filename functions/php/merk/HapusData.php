<?php
require_once '../config.php';

if( $_POST ){

    $id_merk = htmlspecialchars($_POST['id_merk']);

    $sql = mysqli_query($conn, "DELETE FROM tbl_merk WHERE id_merk = '$id_merk'");

    if( $sql ){
        $result['status'] = '1';
        $result['msg'] = "Data Berhasil Dihapus !";
    }else{
        $result['status'] = '0';
        $result['msg'] = "Data Gagal Dihapus !";
        $result['error'] = mysqli_error($conn);
        $result['errno'] = mysqli_errno($conn);
    }

    echo json_encode($result);
}