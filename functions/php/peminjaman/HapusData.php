<?php
require_once "../config.php";

if( $_POST ){

    $id_peminjaman = htmlspecialchars($_POST['id_peminjaman']);
    
    $sql = mysqli_query($conn, "DELETE FROM tbl_detail_peminjaman WHERE id_peminjaman = '$id_peminjaman'");

    $sql2 = mysqli_query($conn, "DELETE FROM tbl_peminjaman WHERE id_peminjaman = '$id_peminjaman'");

    if( $sql && $sql2 ){
        $result['status'] = '1';
        $result['msg'] = "Data Berhasil Dihapus !";
    }else{
        $result['status'] = '0';
        $result['msg'] = "Data Gagal Dihapus !";
        $result['error'] = mysqli_error($conn);
    }

    echo json_encode($result);

}