<?php
require_once '../config.php';

if( $_POST ){

    $id_ruangan = htmlspecialchars($_POST['id_ruangan']);

    $sql = mysqli_query($conn, "DELETE FROM tbl_ruangan WHERE id_ruangan = '$id_ruangan'");

    if( $sql ){
        $result['status'] = '1';
        $result['msg'] = "Data Berhasil Dihapus !";
    }else{
        $result['status'] = '0';
        $result['msg'] = "Data Gagal Dihapus !";
        $result['error'] = mysqli_error($conn);
    }

    echo json_encode($result);

}