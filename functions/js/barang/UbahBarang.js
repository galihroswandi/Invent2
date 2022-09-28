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

    function getMerk(id=null){
        $.ajax({
            type : "GET",
            url : "functions/php/barang/GetMerk.php",
            dataType : "JSON",
            success : function(response){
                let merk = '';
                for(let i = 0; i < response.length; i++){
                    if(response[i].id_merk != id){
                        merk += `<option value="${response[i].id_merk}">${response[i].nm_merk}</option>`;
                    }else{
                        merk += `<option value="${response[i].id_merk}" selected>${response[i].nm_merk}</option>`;
                    }
                }
                $('#merk').append(merk);
            }
        })
    }

    function getKategori(id=null){
        console.log(id)
        $.ajax({
            type : "GET",
            url : "functions/php/barang/GetKategoriData.php",
            dataType : "JSON",
            success : function(response){
                let kategori = '';
                for(let i = 0; i < response.length; i++){
                    console.log(response[i].id_kategori);
                    if(response[i].id_kategori != id){
                        kategori += `<option value="${response[i].id_kategori}" >${response[i].nm_kategori}</option>`;
                    }else{
                        kategori += `<option value="${response[i].id_kategori}"  selected>${response[i].nm_kategori}</option>`;
                    }

                }
                
                $('#kategori').append(kategori);
            }
        })
    }

    function ubahData(){

        const id = getUrlVars('data');
        $.ajax({
            type : "POST",
            url : "functions/php/barang/GetSingleData.php",
            data : `id=${id}`,
            dataType : "JSON",
            success : function(response){
               
                $('#kd_brg').val(response.kd_brg);
                $('#nama').val(response.nm_brg);
                $('#stok').val(response.stok);
                $('#spesifikasi').val(response.spesifikasi);

                getMerk(response.merk);
                getKategori(response.kategori);
                getSatuan(response.satuan);

                $('#submit').click(function(){
                    prosesUbahData(id); 
                })
            }
        })
    }

    function getSatuan( id=null ){
        $.ajax({
            type : "GET",
            url : "functions/php/barang/GetSatuanData.php",
            dataType : "JSON",
            success : function(response){
                let satuan = '';
                for(let i = 0; i < response.length; i++){
                    if( response[i].id_satuan != id) {
                        satuan += `<option value="${response[i].id_satuan}">${response[i].satuan}</option>`;
                    }else{
                        satuan += `<option value="${response[i].id_satuan}" selected>${response[i].satuan}</option>`;
                    }
                }
                $('#satuan').append(satuan);
            }
        })

    }

    function prosesUbahData(id) {
        const kd_brg = $('#kd_brg').val();
        const nama_barang = $('#nama').val();
        const merk = $('#merk').val();
        const kategori = $('#kategori').val();
        const satuan = $('#satuan').val();
        const stok = $('#stok').val();
        const spesifikasi = $('#spesifikasi').val();

        const message = document.getElementById('notif');
        const pesan = document.querySelector('.pesan');
        const text = document.querySelector('.message');

        // DOM ERROR Notification
        const logo = document.querySelector('.pesan > .logo');
        const textErr = document.querySelector('.pesan > .message');
        const btn_close = document.querySelector('.pesan > .close');

        if( !kd_brg || !nama_barang || !merk || !kategori || !satuan || !stok || !spesifikasi ){
            alert('Tolong Isi Semua field');
        }{
            $.ajax({
                type : "POST", 
                url : "functions/php/barang/UbahData.php",
                data : `id_brg=${id}&kd_brg=${kd_brg}&nama_barang=${nama_barang}&merk=${merk}&satuan=${satuan}&stok=${stok}&kategori=${kategori}&spesifikasi=${spesifikasi}`,
                dataType : "JSON",
                success : function(response) {
                    if( response.status == '1' ){
                        message.style.transition = 'all 5s 5s ease-in-out';
                        message.style.opacity = '1';
                        message.style.display = 'flex';
                        pesan.style.top = '10%';
                        text.innerHTML = `<h1 class='capitalize'>${response.msg}</h1>`;
                        document.body.style.position = 'fixed';
                        btn_close.style.display = 'none';
                        resetForm();
                        setTimeout(() => {
                            document.location.href = '?p=barang';
                            message.style.display = 'none';
                            message.style.opacity = '0';
                            pesan.style.top = '-100rem';
                            document.body.style.position = 'relative';
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
                        document.body.style.position = 'fixed';

                        btn_close.addEventListener('click', () => {
                            message.style.transition = 'all 5s ease';
                            message.style.display = 'none';
                            message.style.opacity = '0';
                            pesan.style.top = '-100rem';
                            document.body.style.position = 'relative';
                        })
                    }
                } 
    
            })
        }
        
    }

    function resetForm(){
        $('#kd_brg').val('');
        $('#nama').val('');
        $('#merk').val('');
        $('#satuan').val('');
        $('#kategori').val('');
        $('#spesifikasi').val('');  
    }
    ubahData();

    
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
