<?php
require_once './../config.php';

    $query = "SELECT * FROM tbl_kategori ORDER BY id_kategori DESC";

    $sql = mysqli_query($conn, $query);
    
    $result = [];
    while($fetch = mysqli_fetch_array($sql)){
        $result[] = $fetch;
    }

    echo json_encode($result);

