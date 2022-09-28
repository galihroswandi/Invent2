<?php
require_once './../config.php';

if( $_POST ){

    $id_pengajuan = htmlspecialchars($_POST['id_pengajuan']);
    $nm_brg = htmlspecialchars($_POST['nm_brg']);
    $hrg_brg = htmlspecialchars($_POST['hrg_beli']);
    $vendor = htmlspecialchars($_POST['vendor']);
    $tanggal = htmlspecialchars($_POST['tanggal']);
    $status = htmlspecialchars($_POST['status']);

    $query = "UPDATE tbl_pengajuan, tbl_detail_pengajuan SET 
                tbl_pengajuan.tanggal = '$tanggal',
                tbl_pengajuan.id_vendor = '$vendor',
                tbl_pengajuan.status = '$status',
                tbl_detail_pengajuan.id_brg = '$nm_brg',
                tbl_detail_pengajuan.hrg_beli = '$hrg_brg',
                tbl_detail_pengajuan.status = '$status'
            WHERE tbl_pengajuan.id_pengajuan = '$id_pengajuan' AND tbl_detail_pengajuan.id_pengajuan = '$id_pengajuan'";

    $sql = mysqli_query($conn,$query);

    if( $sql ){
        $result['status'] = '1';
        $result['msg'] = "Data Berhasil Diubah !";
    }else{
        $result['status'] = '0';
        $result['msg'] = "Data Gagal Diubah !";
    }

    echo json_encode($result);
}
