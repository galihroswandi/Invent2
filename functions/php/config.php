<?php

$host = 'localhost';
$user = 'root';
$pass = '';
$db_name = 'db_inventory';

$conn = mysqli_connect($host, $user, $pass, $db_name);
if( !$conn ){
    echo "koneksi gagal";
}

?>