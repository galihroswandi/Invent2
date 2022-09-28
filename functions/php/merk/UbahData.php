<?php
require_once "./../config.php";

if( $_POST ){

    $id_merk = htmlspecialchars($_POST['id_merk']);
    $nm_merk = htmlspecialchars($_POST['merk']);

    $sql = mysqli_query($conn, "UPDATE tbl_merk SET nm_merk = '$nm_merk' WHERE id_merk = '$id_merk'");

    if( $sql ){
        $result['status'] = '1';
        $result['msg'] = "Data Berhasil Diubah !";
    }else{
        $result['status'] = '0';
        $result['status'] = "Data Gagal Diubah !";
    }

    echo json_encode($result);
}