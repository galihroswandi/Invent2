$(document).ready(function(){

    const getKdRuangan = () => {

        const url = "functions/php/ruangan/GetKdRuangan.php";
        fetch(url, {method : "GET"})
        .then(response => {
            if( !response.ok ){
                console.log('Server Bermasalah !');
            }
            return response.json();
        })
        .then(response => {
            
            document.getElementById('kd_ruangan').setAttribute('value', response);

        });

    }

    const prosesTambahData = () => {

        const kd_ruangan = document.getElementById('kd_ruangan').value;
        const nm_ruangan = document.getElementById('nm_ruangan').value;
        const spesifikasi = document.getElementById('spesifikasi').value;

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
                url : "functions/php/ruangan/TambahRuangan.php",
                data : `kd_ruangan=${kd_ruangan}&nm_ruangan=${nm_ruangan}&spesifikasi=${spesifikasi}`,
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
                        setTimeout( () => {
                            document.location.href = '?p=ruangan';
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

    }

    const resetForm = () => {
        $('#kd_ruangan').val('');
        $('#nm_ruangan').val('');
        $('#spesifikasi').val('');
    }

    const btn_submit = document.getElementById('submit');
    btn_submit.addEventListener('click', () => {
        prosesTambahData();
    })
    
    getKdRuangan();

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