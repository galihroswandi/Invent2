$(document).ready(function(){

    $('#btn-add').click(function(){
        prosesTambahData();
    })

    function prosesTambahData(){

        const nm_vendor = $('#nm_vendor').val();
        const alamat = $('#alamat_vendor').val();
        const no_telp = $('#no_telp_vendor').val();

        const message = document.getElementById('notif');
        const pesan = document.querySelector('.pesan');
        const text = document.querySelector('.message');

        // DOM ERROR Notification
        const logo = document.querySelector('.pesan > .logo');
        const textErr = document.querySelector('.pesan > .message');
        const btn_close = document.querySelector('.pesan > .close');

        if( !nm_vendor || !alamat || !no_telp ){
            alert('Data tidak boleh kosong !');
        }else{
            $.ajax({
                type : "POST",
                url : "functions/php/vendor/TambahDataVendor.php",
                data : `nm_vendor=${nm_vendor}&alamat=${alamat}&no_telp=${no_telp}`,
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
                            document.location.href = '?p=vendor';
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

    function resetForm(){
        $('#nm_vendor').val('');
        $('#alamat_vendor').val('');
        $('#no_telp_vendor').val('');
    }

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

        document.location.href = '../login.html';
    })

})