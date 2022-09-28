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
        document.location.href = '?p=ruangan';
    }

    const getSingleData = () => {

        const id_ruangan = getUrlVars('data');
        $.ajax({
            type : "POST",
            url : "functions/php/ruangan/GetSingleData.php",
            data : `id_ruangan=${id_ruangan}`,
            dataType : "JSON",
            success : (response) => {
                
                // Tambah Kan response ke komponent html
                $('#kd_ruangan').val(response.kd_ruangan);
                $('#nm_ruangan').val(response.nm_ruangan);
                $('#spesifikasi').val(response.spesifikasi);

                // Event ketika tombol submit di klik
                document.getElementById('submit').addEventListener('click', () => {
                    prosesUbahData(response.id_ruangan);
                })
            } 
        })

    }

    const prosesUbahData = (id_ruangan) => {

        const kd_ruangan = $('#kd_ruangan').val();
        const nm_ruangan = $('#nm_ruangan').val();
        const spesifikasi = $('#spesifikasi').val();

        const message = document.getElementById('notif');
        const pesan = document.querySelector('.pesan');
        const text = document.querySelector('.message');

        // DOM ERROR Notification
        const logo = document.querySelector('.pesan > .logo');
        const textErr = document.querySelector('.pesan > .message');
        const btn_close = document.querySelector('.pesan > .close');

        if( !kd_ruangan || !nm_ruangan || !spesifikasi ){
            alert('Yang anda masukan kosong !');
        }else{
            $.ajax({
                type : "POST",
                url : "functions/php/ruangan/UbahData.php",
                data : `id_ruangan=${id_ruangan}&kd_ruangan=${kd_ruangan}&nm_ruangan=${nm_ruangan}&spesifikasi=${spesifikasi}`,
                dataType : "JSON",
                success : (response) => {
                    if( response.status == '1' ){
                        message.style.transition = 'all 5s 5s ease-in-out';
                        message.style.opacity = '1';
                        message.style.display = 'flex';
                        pesan.style.top = '10%';
                        text.innerHTML = `<h1 class='capitalize'>${response.msg}</h1>`;
                        btn_close.style.display = 'none';
                        resetForm();
                        setTimeout(() => {
                            document.location.href = '?p=ruangan';
                            message.style.display = 'none';
                            message.style.opacity = '0';
                            pesan.style.top = '-100rem';
                        }, 2000);
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

    }

    const resetForm = () => {
        $('#kd_ruangan').val('');
        $('#nm_ruangan').val('');
        $('#spesifikasi').val('');
    }

    getSingleData();

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