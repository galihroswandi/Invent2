<?php
require_once '../config.php';

    $query = "SELECT * FROM tbl_satuan";

    $sql = mysqli_query($conn, $query);

    $result = [];
    while($fetch = mysqli_fetch_array($sql)){
        $result[] = $fetch;
    }

    echo json_encode($result);