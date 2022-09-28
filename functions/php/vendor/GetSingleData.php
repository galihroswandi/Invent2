<?php
require_once './../config.php';

if( $_POST ){

    $id_vendor = htmlspecialchars($_POST['id_vendor']);

    $query = "SELECT * FROM tbl_vendor WHERE id_vendor = '$id_vendor'";
    $sql = mysqli_query($conn, $query);

    $result = mysqli_fetch_array($sql);

    echo json_encode($result);
}