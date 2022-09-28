<?php
require_once "./../config.php";

if( $_POST ){

    $id_merk = htmlspecialchars($_POST['id_merk']);

    $sql = mysqli_query($conn, "SELECT * FROM tbl_merk WHERE id_merk = '$id_merk'");

    $result = mysqli_fetch_array($sql);

    echo json_encode($result);
}