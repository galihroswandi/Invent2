<?php

    // Atur Waktu
    date_default_timezone_set("Asia/Jakarta");
    //error_reporting(0);

    // Buat 4 Variabel
    $host = "localhost";
    $user = "root";
    $pass = "";
    $nama_db = "db_inventory";

    // Proses Koneksi
    $conn = mysqli_connect($host, $user, $pass, $nama_db);
