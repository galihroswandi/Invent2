<?php
require_once './../config.php';

if( $_POST ){

    $id_vendor = htmlspecialchars($_POST['id_vendor']);

    $query = "DELETE FROM tbl_vendor WHERE id_vendor = '$id_vendor'";
    $sql = mysqli_query($conn, $query);

    if( $sql ){
        $result['status'] = '1';
        $result['msg'] = 'Data Berhasi Dihapus !';
    }else{
        $result['status'] = '0';
        $result['msg'] = "Data Gagal Dihapus !";
        $result['error'] = mysqli_error($conn);
        $result['errno'] = mysqli_errno($conn);
    }

    echo json_encode($result);
}