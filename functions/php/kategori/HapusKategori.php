<?php
require_once './../config.php';

if( $_POST ){

    $id_kategori = htmlspecialchars($_POST['id_kategori']);

    $query = "DELETE FROM tbl_kategori WHERE id_kategori = '$id_kategori'";
    $sql = mysqli_query($conn, $query);

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
