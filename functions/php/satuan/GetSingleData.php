<?php
require_once './../config.php';

if( $_POST ){

    $id_satuan = htmlspecialchars($_POST['id_satuan']);

    $sql = mysqli_query($conn, "SELECT * FROM tbl_satuan WHERE id_satuan = '$id_satuan'");

    $result = mysqli_fetch_array($sql);

    echo json_encode($result);
}