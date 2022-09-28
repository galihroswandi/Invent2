<?php
require_once './../config.php';

$sql = mysqli_query($conn, "SELECT * FROM tbl_vendor ORDER BY id_vendor ASC");
$result = [];
while($fetch = mysqli_fetch_array($sql)){
    $result[] = $fetch;
}

echo json_encode($result);