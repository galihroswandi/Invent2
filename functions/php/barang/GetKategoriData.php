<?php
require_once 'koneksi.php';

$query = "SELECT * FROM tbl_kategori";
$sql = mysqli_query($conn, $query);
$result = [];
while($fetch = mysqli_fetch_array($sql)){
    $result[] = $fetch;
}

echo json_encode($result);
