<?php
require_once './../config.php';

if( $_POST ){

    $id_kategori = htmlspecialchars($_POST['id_kategori']);

    $sql = mysqli_query($conn, "SELECT * FROM tbl_kategori WHERE id_kategori = '$id_kategori'");

    $result = mysqli_fetch_array($sql);

    echo json_encode($result);
}