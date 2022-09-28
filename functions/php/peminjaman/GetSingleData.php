<?php
require_once "../config.php";

if( $_POST ){

    $id_peminjaman = htmlspecialchars($_POST['id_peminjaman']);

    $query = "SELECT * FROM tbl_peminjaman JOIN tbl_detail_peminjaman ON tbl_peminjaman.id_peminjaman = tbl_detail_peminjaman.id_peminjaman JOIN tbl_ruangan ON tbl_peminjaman.id_ruangan = tbl_ruangan.id_ruangan JOIN tbl_barang ON tbl_detail_peminjaman.id_brg = tbl_barang.id_brg WHERE tbl_peminjaman.id_peminjaman = '$id_peminjaman'";

    $sql = mysqli_query($conn, $query);

    $result = mysqli_fetch_array($sql);

    echo json_encode($result);

}