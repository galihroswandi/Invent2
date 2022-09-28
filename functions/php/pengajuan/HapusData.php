<?php
require_once "./../config.php";

if( $_POST ){

    $id_pengajuan = htmlspecialchars($_POST['id_pengajuan']);
    
    $sql = mysqli_query($conn, "DELETE FROM tbl_detail_pengajuan WHERE id_pengajuan = '$id_pengajuan'");

    $sql2 = mysqli_query($conn, "DELETE FROM tbl_pengajuan WHERE id_pengajuan = '$id_pengajuan'");

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