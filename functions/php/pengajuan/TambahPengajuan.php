<?php
require_once './../config.php';

if( $_POST ){

    $id_admin = htmlspecialchars($_POST['id_admin']);
    $kode = htmlspecialchars($_POST['kode']);
    $nm_brg = htmlspecialchars($_POST['nm_brg']);
    $hrg_beli = htmlspecialchars($_POST['hrg_beli']);
    $tanggal = htmlspecialchars($_POST['tgl_pengajuan']);
    $id_vendor = htmlspecialchars($_POST['vendor']);
    $status = htmlspecialchars($_POST['status']);
    
    $query = "INSERT INTO tbl_pengajuan VALUES('', '$id_admin', '$kode', '$tanggal', '$id_vendor', '$status')";
    $sql = mysqli_query($conn, $query);
    
    $sql2 = mysqli_query($conn, "SELECT id_pengajuan FROM tbl_pengajuan WHERE kode = '$kode'");
    $assoc = mysqli_fetch_assoc($sql2);
    $id_pengajuan = $assoc['id_pengajuan'];

    $sql3 = mysqli_query($conn, "INSERT INTO tbl_detail_pengajuan VALUES('', '$id_pengajuan', '$nm_brg', '$hrg_beli', '$status')");
    
    if( $sql && $sql3 ){
        $result['status'] = '1';
        $result['msg'] = 'Data Berhasil Ditambahkan !';
    }else{
        $result['status'] = '0';
        $result['msg'] = "Data Gagal Ditambahkan !";
        $result['error'] = mysqli_error($conn);
    }

    echo json_encode($result);
}