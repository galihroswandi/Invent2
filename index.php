<?php
require_once 'library/fpdf.php';

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
<script>
    // cek session login
    const session = sessionStorage.getItem('id');
    if( !session ){
        document.location.href = 'login.html';
    }

    function getUrlVars(param=null){
        if(param !== null){
            let vars = [], hash;
            let hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    
            for(let i = 0; i < hashes.length; i++){
                hash = hashes[i].split('=');
                vars.push(hash[0]);
                vars[hash[0]] = hash[1];
            }  
            return vars[param];
        }else{
            return null;
        }
    }

    const sidebarItems = document.querySelectorAll('.sidebar-item');
    sidebarItems.forEach(el => {
        if( el.classList.contains('active') ){
            el.classList.remove('active');
        }else if( getUrlVars('p') ){
            const active = getUrlVars('p');
            console.log() 
            if( el.classList.contains(active.replace('/tambah', ''))){
                el.classList.add('active');
            }else if(el.classList.contains(active.replace('/ubah', ''))){
                el.classList.add('active');
            }
        }else{
            if( el.classList.contains('dashboard') ){
                el.classList.add('active');
            }
        }
    })

</script>