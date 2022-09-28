<?php
require_once '../config.php';

if( $_POST ){

    $id_ruangan = htmlspecialchars($_POST['id_ruangan']);
    $kd_ruangan = htmlspecialchars($_POST['kd_ruangan']);
    $nm_ruangan = htmlspecialchars($_POST['nm_ruangan']);
    $spesifikasi = htmlspecialchars($_POST['spesifikasi']);

    $query = "UPDATE tbl_ruangan SET
                kd_ruangan = '$kd_ruangan',
                nm_ruangan = '$nm_ruangan',
                spesifikasi = '$spesifikasi'
            WHERE id_ruangan = '$id_ruangan'";
    
    $sql = mysqli_query($conn, $query);

    if( $sql ){
        $result['status'] = '1';
        $result['msg'] = "Data Berhasil Diubah !";
    }else{
        $result['status'] = '0';
        $result['msg'] = "Data Gagal Diubah !";
        $result['error'] = mysqli_error($conn);
    }

    echo json_encode($result);

}