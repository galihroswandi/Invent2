$(document).ready(function(){

    const hapusData = (id_ruangan) => {

        const notif_header = document.getElementById('notif-header');
        const btn_tutup = document.getElementById('tutup');
        const popup = document.querySelector('.modal-popup-del');
        popup.style.display = 'none';

        // DOM Success Notification
        const message = document.getElementById('notif');
        const pesan = document.querySelector('.pesan');
        const text = document.querySelector('.message');

        // DOM ERROR Notification
        const logo = document.querySelector('.pesan > .logo');
        const textErr = document.querySelector('.pesan > .message');
        const btn_close = document.querySelector('.pesan > .close');

        $.ajax({
            type : "POST",
            url : "functions/php/ruangan/HapusData.php",
            data : `id_ruangan=${id_ruangan}`,
            dataType : "JSON",
            success : (response) => {
                if ( response.errno == '1451' ){
                    message.style.display = 'none';
                    message.style.opacity = '0';
                    pesan.style.top = '-100rem';
                    notif_header.style.display = 'flex';
                    notif_header.style.transition = 'all .5s .5s ease-in-out';
                    notif_header.style.opacity = '1';

                    btn_tutup.addEventListener('click', () => {
                        notif_header.style.display = 'none';
                    })
                }else if( response.status == '1' ){
                    btn_close.style.display = 'none';   
                    message.style.transition = 'all 5s 5s ease-in-out';
                    message.style.opacity = '1';
                    message.style.display = 'flex';
                    pesan.style.top = '10%';
                    text.innerHTML = `<h1 class='capitalize'>${response.msg}</h1>`;
                    setTimeout(() => {
                        message.style.display = 'none';
                        message.style.opacity = '0';
                        pesan.style.top = '-100rem';
                        ReadData();
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
                    ReadData();
                }
            }
        })

    }

    const ReadData = async () => {
        
        const url = "functions/php/ruangan/GetDataRuangan.php";
        await fetch(url, {method : "GET"})
        .then(response => {
            if (!response.ok){
                alert('Server Bermasalah !');
            }
            return response.json();
        })
        .then(response => {

            // Add ke halaman ruangan
            let ruangan = '';
            for( let i = 0; i < response.length; i++ ){
                ruangan += showTable(response, i);
            }
            document.getElementById('targetDataRuangan').innerHTML = ruangan;

            // Event ketika tombol ubah di klik
            const btn_ubah = document.querySelectorAll('#btn-ubah_ruangan');
            btn_ubah.forEach(el => {
                el.addEventListener('click', function(){
                    const id_ruangan = this.dataset.id;
                    document.location.href = `?p=ruangan/ubah&data=${id_ruangan}`;
                })
            })

            // Event ketika tombol hapus di klik
            const btn_hapus = document.querySelectorAll('#btn-hapus_ruangan');
            const popup = document.querySelector('.modal-popup-del');
            const textPopup = popup.querySelector('#textConfirm');

            btn_hapus.forEach(el => {
                el.addEventListener('click', function(){
                    popup.style.display = 'flex';
                    textPopup.textContent = "Apakah Yakin Ingin Menghapus ?";

                    let id = el.dataset.id;
                    document.body.addEventListener('click', (e) => {
                        if(e.target.id == 'success'){
                                hapusData(id);
                        }else if(e.target.id == 'confirmErr'){
                                popup.style.display = 'none';
                        }
                    })
                })
            })

        })

    }

    const showTable = (response, i) => {
        return `
            <tr>
                <td>${response[i].kd_ruangan}</td>
                <td>${response[i].nm_ruangan}</td>
                <td>${response[i].spesifikasi}</td>
                <td class="aksi">
                    <button class='btn btn-outline-primary btn-sm btn-edit' data-id="${response[i].id_ruangan}" id="btn-ubah_ruangan">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg>
                    </button>
                    <button class='btn btn-outline-danger btn-sm btn-hapus' data-id="${response[i].id_ruangan}" id='btn-hapus_ruangan'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                        </svg>
                    </button>
                </td>
            </tr>`;
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