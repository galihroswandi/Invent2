<?php
require_once 'koneksi.php';

if( $_POST ){
    $id_brg = $_POST['id'];
    
    $query = "SELECT * FROM tbl_barang WHERE id_brg = '$id_brg'";
    $sql = mysqli_query($conn, $query);
    $result = mysqli_fetch_array($sql);
    
    echo json_encode($result);
}