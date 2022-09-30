$(document).ready(function(){

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

    if( getUrlVars('data') == null ){
        document.location.href = '?p=kategori';
    }

    function prosesUbahData() {
        const id_kategori = getUrlVars('data');
        const nm_kategori = $('#kategori').val();

        const message = document.getElementById('notif');
        const pesan = document.querySelector('.pesan');
        const text = document.querySelector('.message');

        // DOM ERROR Notification
        const logo = document.querySelector('.pesan > .logo');
        const textErr = document.querySelector('.pesan > .message');
        const btn_close = document.querySelector('.pesan > .close');
        
        $.ajax({
            type : "POST",
            url : "functions/php/kategori/UbahKategori.php",
            data : `id_kategori=${id_kategori}&nm_kategori=${nm_kategori}`,
            dataType : "JSON",
            success : function(response){
                if( response.status == '1' ){
                    message.style.transition = 'all 5s 5s ease-in-out';
                    message.style.opacity = '1';
                    message.style.display = 'flex';
                    pesan.style.top = '10%';
                    text.innerHTML = `<h1 class='capitalize'>${response.msg}</h1>`;
                    btn_close.style.display = 'none';
                    resetForm();
                    setTimeout(() => {
                        document.location.href = '?p=kategori';
                        message.style.display = 'none';
                        message.style.opacity = '0';
                        pesan.style.top = '-100rem';
                    }, 2000)
                }else{
                    message.style.transition = 'all 5s 5s ease-in-out';
                    message.style.opacity = '1';
                    message.style.display = 'flex';
                    pesan.style.top = '10%';
                    logo.innerHTML = `<img src="assets/images/gif/error.gif" alt="">`;
                    logo.style.padding = '1rem';
                    logo.style.boxSizing = 'border-box';
                    textErr.innerHTML = `<h1 class='capitalize'>${response.msg}</h1>`;

                    btn_close.addEventListener('click', () => {
                        message.style.transition = 'all 5s ease';
                        message.style.display = 'none';
                        message.style.opacity = '0';
                        pesan.style.top = '-100rem';
                    })
                }
            }
        })

    }

    $('#submit').click(() => {
        prosesUbahData();
    })

    const ReadData = () => {
        
        const id_kategori = getUrlVars('data');
        $.ajax({
            type : "POST",
            url : "functions/php/kategori/GetSingleData.php",
            data : `id_kategori=${id_kategori}`,
            dataType : "JSON",
            success : function(response) {
                $('#kategori').val(response.nm_kategori);
            }
        })

    }

    const resetForm = () => {
        $('#kategori').val('');
    }
    ReadData();

    const popup = document.querySelector('.modal-popup');
    // event popup box
    document.body.addEventListener('click', (e) => {
        if( e.target.id == 'logout' ){
        popup.style.display = 'flex';
        }else if(e.target.id == 'confirmErr'){
        popup.style.display = 'none';
        }
    })
    const confirmScs = document.querySelector('.confirm > .confirmScs');
    confirmScs.addEventListener('click', () => {
        sessionStorage.removeItem('id');
        sessionStorage.removeItem('I');

        document.location.href = 'login.html';
    })
})