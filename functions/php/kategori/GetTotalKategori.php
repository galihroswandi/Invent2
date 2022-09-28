<?php
require_once './../config.php';

$sql = mysqli_query($conn, "SELECT * FROM tbl_kategori");
$result = mysqli_num_rows($sql);

echo json_encode($result);