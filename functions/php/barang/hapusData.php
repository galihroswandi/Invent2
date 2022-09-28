<?php
include 'koneksi.php';

if( $_POST ){

    $id_brg = $_POST['id_brg'];

    $sql = mysqli_query($conn, "DELETE FROM tbl_barang WHERE id_brg = '$id_brg'");
    $result = [];
    if( $sql ){
        $result['status'] = '1';
        $result['msg'] = 'Data Berhasil Dihapus !';
    }else{
        $result['status'] = '0';
        $result['msg'] = 'Data Gagal Dihapus !';
        $result['error'] = mysqli_error($conn);
        $result['errno'] = mysqli_errno($conn);
    }

    echo json_encode($result);
}