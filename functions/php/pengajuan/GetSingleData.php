<?php
require_once './../config.php';

if( $_POST ){

    $id_pengajuan = htmlspecialchars($_POST['id_pengajuan']);

    $query = "SELECT * FROM tbl_pengajuan JOIN tbl_detail_pengajuan ON tbl_pengajuan.id_pengajuan = tbl_detail_pengajuan.id_pengajuan JOIN tbl_vendor ON tbl_pengajuan.id_vendor = tbl_vendor.id_vendor JOIN tbl_barang ON tbl_detail_pengajuan.id_brg = tbl_barang.id_brg WHERE tbl_pengajuan.id_pengajuan = '$id_pengajuan'";

    $sql = mysqli_query($conn, $query);

    $result = mysqli_fetch_array($sql);
    
    echo json_encode($result);
}