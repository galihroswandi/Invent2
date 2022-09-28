<?php
    //session_start();
    
    //if(!empty($_SESSION['id_user'])){
        //require 'config.php';

        //  Halaman Admin
            include 'views/template/header.html';
                if(!empty($_GET['p'])){
                    include 'views/page/'.$_GET['p'].'/index.html';
                }else{
                    include 'views/template/dashboard.html';
                }
            include 'views/template/footer.html';
        // Akhir Halaman Admin
    //}else{
    //    echo '<script>window.location="login.php";</script>';
    //}
?>
