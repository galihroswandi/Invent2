$(document).ready(function(){

    // EVENT KETIKA BUTTON UBAH DI KLIK
    $('#ubah-peminjaman').click(() => {
        prosesUbahData();
    })
    
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
        document.location.href = 'peminjaman.html';
    }

    const prosesUbahData = () => {

        const id_peminjaman = getUrlVars('data');
        const kd_pinjam = $("#kd_ubah_pinjam").val();
        const nm_brg = $("#nm_ubahpinjam_brg").val();
        const ruangan = $('#nm_ubahpinjam_ruangan').val();
        const tanggal = $('#tgl_ubah_pinjam').val();
        const status = $('#status_ubah_pinjam').val();

        const message = document.getElementById('notif');
        const pesan = document.querySelector('.pesan');
        const text = document.querySelector('.message');

        // DOM ERROR Notification
        const logo = document.querySelector('.pesan > .logo');
        const textErr = document.querySelector('.pesan > .message');
        const btn_close = document.querySelector('.pesan > .close');

        if( !id_peminjaman || !kd_pinjam || !nm_brg || !ruangan || !tanggal || !status ){
            alert('Data Tidak Boleh kosong !');
        }else{

            $.ajax({
                type : "POST",
                url : "functions/php/peminjaman/UbahData.php",
                data : `id_peminjaman=${id_peminjaman}&kd_pinjam=${kd_pinjam}&nm_brg=${nm_brg}&ruangan=${ruangan}&tanggal=${tanggal}&status=${status}`,
                dataType : "JSON",
                success : (response => {
                    if( response.status = '1' ){
                        message.style.transition = 'all 5s 5s ease-in-out';
                        message.style.opacity = '1';
                        message.style.display = 'flex';
                        pesan.style.top = '10%';
                        text.innerHTML = `<h1 class='capitalize'>${response.msg}</h1>`;
                        btn_close.style.display = 'none';
                        resetForm();
                        setTimeout(() => {
                            document.location.href = '?p=peminjaman';
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
                })
            })

        }

    }

    const getRuangan = async (id) => {
        const url = "functions/php/peminjaman/GetRuangan.php";
        await fetch(url, {method : "GET"})
        .then(response => {
            if( !response.ok ){
                alert('Server Bermasalah !');
            }
            return response.json();
        })
        .then(response => {
            
            let ruangan = '';
            for( let i = 0; i < response.length; i++ ){
                if( response[i].id_ruangan != id ){
                    ruangan += `<option value="${response[i].id_ruangan}" >${response[i].nm_ruangan}</option>`;
                }else{
                    ruangan += `<option value="${response[i].id_ruangan}" selected >${response[i].nm_ruangan}</option>`;
                }
            }

            $('#nm_ubahpinjam_ruangan').append(ruangan);

        })
    }

    const getBarang = async(id) => {
        const url = "functions/php/peminjaman/GetBarang.php";
        await fetch(url, {method : "GET"})
        .then(response => {
            if( !response.ok ){
                alert('Server Bermasalah !');
            }
            return response.json();
        })
        .then(response => {

            let barang = '';
            for( let i = 0; i < response.length; i++ ){
                if( response[i].id_brg != id ){
                    barang += `<option value="${response[i].id_brg}" >${response[i].nm_brg}</option>`;
                }else{
                    barang += `<option value="${response[i].id_brg}" selected >${response[i].nm_brg}</option>`
                }
            }
            
            $('#nm_ubahpinjam_brg').append(barang);

        })
        
    }

    const getSingleData = () => {

        const id_peminjaman = getUrlVars('data');

        $.ajax({
            type : "POST",
            url : "functions/php/peminjaman/GetSingleData.php",
            data : `id_peminjaman=${id_peminjaman}`,
            dataType : "JSON",
            success : (response => {

                document.getElementById('kd_ubah_pinjam').value = response.kode;
                document.getElementById('tgl_ubah_pinjam').value = response.tanggal;
                document.getElementById('status_ubah_pinjam').value = response.status;

                // DROPDOWN
                getBarang(response.id_brg);
                getRuangan(response.id_ruangan);

            })
        })

    }

    const resetForm = () => {
        $("#kd_pinjam").val('');
        $("#nm_brg").val('');
        $('#nm_ruangan').val('');
        $('#tgl_pinjam').val('');
        $('#status').val('');
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