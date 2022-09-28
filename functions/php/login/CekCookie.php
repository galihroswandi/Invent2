<?php
require_once './../config.php';

if( $_POST ){

    $username = htmlspecialchars($_POST['username']);
    $id_admin = htmlspecialchars($_POST['id_admin']);

    $sql = mysqli_query($conn, "SELECT * FROM tbl_admin WHERE id_admin = '$id_admin'");

    $data = mysqli_fetch_array($sql);
    
    if( $username === hash('sha1', $data['username']) ){
        $result['status'] = '1';
        $result['msg'] = "Data Ditemukan Silahkan Langsung Login !";
        $result['hash'] = hash('sha1', $data['username']);
        $result['id_admin'] = $data['id_admin'];
    }else{
        $result['status'] = '0';
        $result['msg'] = 'Data Tidak Di temukan silahkan login !';
    }

    echo json_encode($result);
}