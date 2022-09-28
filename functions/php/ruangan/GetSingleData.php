<?php
require_once '../config.php';

if( $_POST ){

    $id_ruangan = htmlspecialchars($_POST['id_ruangan']);

    $sql = mysqli_query($conn, "SELECT * FROM tbl_ruangan WHERE id_ruangan = '$id_ruangan'");

    $result = mysqli_fetch_array($sql);

    echo json_encode($result);

}