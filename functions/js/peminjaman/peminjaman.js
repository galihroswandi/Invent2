// $(document).ready(function(){

//     const ReadData = async() => {

//         $('#target-data').html('');

//         const url = "functions/php/peminjaman/GetData.php";
//         await fetch(url, {method : "GET"})
//         .then(response => {
//             if( !response.ok ){
//                 alert("Server Bermasalah !");
//             }
//             return response.json();
//         })
//         .then(response => {
//             let data = '';
//             for( let i = 0; i < response.length; i++ ){
//                 data += showTable(response, i);
//             }
//             $('#targetDataPengajuan').html(data);

//             // EVENT KETIKA TOMBOL UBAH DI KLIK
//             const btn_ubah = document.querySelectorAll('#btn-ubah');
//             btn_ubah.forEach( el => {
//                 el.addEventListener('click', function(){
//                     let id = this.dataset.id;
//                     document.location.href = `ubah-peminjaman.html?data=${id}`;
//                 })
//             })


//             // EVENT KETIKA TOMBOL DELETE DI KLIK
//             const btn_del = document.querySelectorAll('#btn-hapus');
//             const popup = document.querySelector('.modal-popup-del');
//             const textPopup = popup.querySelector('#textConfirm');

//             btn_del.forEach(el => {
//                 el.addEventListener('click', function(){
//                     popup.style.display = 'flex';
//                     textPopup.textContent = "Apakah Yakin Ingin Menghapus ?";
//                     let id = el.dataset.id;
//                     document.body.addEventListener('click', (e) => {
//                         if(e.target.id == 'success'){
//                                 hapusData(id);
//                         }else if(e.target.id == 'confirmErr'){
//                                 popup.style.display = 'none';
//                         }
//                     })
//                 })
//             })

//         });

//     }

//     const hapusData = (id) => {

//         const notif_header = document.getElementById('notif-header');
//         const btn_tutup = document.getElementById('tutup');
//         const popup = document.querySelector('.modal-popup-del');
//         popup.style.display = 'none';

//         // DOM Success Notification
//         const message = document.getElementById('notif');
//         const pesan = document.querySelector('.pesan');
//         const text = document.querySelector('.message');

//         // DOM ERROR Notification
//         const logo = document.querySelector('.pesan > .logo');
//         const textErr = document.querySelector('.pesan > .message');
//         const btn_close = document.querySelector('.pesan > .close');

//         $.ajax({
//             type : "POST",
//             url : "../../php/peminjaman/HapusData.php",
//             data : `id_peminjaman=${id}`,
//             dataType : "JSON",
//             success : (response) => {
//                 if ( response.errno == '1451' ){
//                     message.style.display = 'none';
//                     message.style.opacity = '0';
//                     pesan.style.top = '-100rem';
//                     notif_header.style.display = 'flex';
//                     notif_header.style.transition = 'all .5s .5s ease-in-out';
//                     notif_header.style.opacity = '1';

//                     btn_tutup.addEventListener('click', () => {
//                         notif_header.style.display = 'none';
//                     })
//                 }else if( response.status == '1' ){
//                     btn_close.style.display = 'none';   
//                     message.style.transition = 'all 5s 5s ease-in-out';
//                     message.style.opacity = '1';
//                     message.style.display = 'flex';
//                     pesan.style.top = '10%';
//                     text.innerHTML = `<h1 class='capitalize'>${response.msg}</h1>`;
//                     setTimeout(() => {
//                         message.style.display = 'none';
//                         message.style.opacity = '0';
//                         pesan.style.top = '-100rem';
//                         ReadData();
//                     }, 2000);
//                 }else{
//                     message.style.transition = 'all 5s 5s ease-in-out';
//                     message.style.opacity = '1';
//                     message.style.display = 'flex';
//                     pesan.style.top = '10%';
//                     logo.innerHTML = `<img src="../../assets/images/gif/error.gif" alt="">`;
//                     logo.style.padding = '1rem';
//                     logo.style.boxSizing = 'border-box';
//                     textErr.innerHTML = `<h1 class='capitalize'>${response.msg}</h1>`;
//                     btn_close.addEventListener('click', () => {
//                         message.style.transition = 'all 5s ease';
//                         message.style.display = 'none';
//                         message.style.opacity = '0';
//                         pesan.style.top = '-100rem';
//                     })
//                     ReadData();
//                 }
//             }
//         })
//     }

//     // EVENT KETIKA TOMBOL TAMBAH DI KLIK
//     $('#submit').click(() => {
//         prosesTambahData();
//     })

//     const prosesTambahData = () => {

//         const id_admin = sessionStorage.getItem('I');
//         const kd_pinjam = $('#kd_pinjam').val();
//         const nm_brg = $('#nm_brg').val();
//         const jumlah = $('#jmlh_pinjam').val();
//         const ruangan = $('#nm_ruangan').val();
//         const peminjaman = $('#nm_peminjam').val();
//         const tgl_pinjam = $('#tgl_pinjam').val();
//         const statusPinjam = $('#status').val();

//         const message = document.getElementById('notif');
//         const pesan = document.querySelector('.pesan');
//         const text = document.querySelector('.message');

//         // DOM ERROR Notification
//         const logo = document.querySelector('.pesan > .logo');
//         const textErr = document.querySelector('.pesan > .message');
//         const btn_close = document.querySelector('.pesan > .close');

//         if( !nm_brg || !jumlah || !ruangan || !peminjaman || !tgl_pinjam || !peminjaman || !tgl_pinjam || !statusPinjam ){
//             alert('Field Tidak Boleh kosong !');
//         }else{
//             $.ajax({
//                 type : "POST",
//                 url : "../../php/peminjaman/TambahData.php",
//                 data : `id_admin=${id_admin}&kd_pinjam=${kd_pinjam}&nm_brg=${nm_brg}&jumlah=${jumlah}&ruangan=${ruangan}&peminjaman=${peminjaman}&tgl_pinjam=${tgl_pinjam}&status_pinjam=${statusPinjam}`,
//                 dataType : "JSON",
//                 success : (response) => {
                    
//                     if( response.status == '1'){
//                         message.style.transition = 'all 5s 5s ease-in-out';
//                         message.style.opacity = '1';
//                         message.style.display = 'flex';
//                         pesan.style.top = '10%';
//                         text.innerHTML = `<h1 class='capitalize'>${response.msg}</h1>`;
//                         btn_close.style.display = 'none';
//                         resetForm();
//                         setTimeout( () => {
//                             ReadData();
//                             message.style.display = 'none';
//                             message.style.opacity = '0';
//                             pesan.style.top = '-100rem';
//                         }, 2000);
//                     }else{
//                         message.style.transition = 'all 5s 5s ease-in-out';
//                         message.style.opacity = '1';
//                         message.style.display = 'flex';
//                         pesan.style.top = '10%';
//                         logo.innerHTML = `<img src="../../assets/images/gif/error.gif" alt="">`;
//                         logo.style.padding = '1rem';
//                         logo.style.boxSizing = 'border-box';
//                         textErr.innerHTML = `<h1 class='capitalize'>${response.msg}</h1>`;

//                         btn_close.addEventListener('click', () => {
//                             message.style.transition = 'all 5s ease';
//                             message.style.display = 'none';
//                             message.style.opacity = '0';
//                             pesan.style.top = '-100rem';
//                         })
//                     }
    
//                 }
//             })
//         }

//     }

//     const getRuangan = async () => {
//         const url = "../../php/peminjaman/GetRuangan.php";
//         await fetch(url, {method : "GET"})
//         .then(response => {
//             if( !response.ok ){
//                 alert('Server Bermasalah !');
//             }
//             return response.json();
//         })
//         .then(response => {
            
//             response.map( ruangan => {
//                 $('#nm_ruangan').append(getShowRuangan(ruangan));
//             })

//         });
//     }

//     const getBarang = async () => {
//         const url = "../../php/peminjaman/GetBarang.php";
//         await fetch(url, {method : "GET"})
//         .then(response => {
//             if( !response.ok ){
//                 alert('Server bermasalah !');
//             }
//             return response.json()
//         })
//         .then(response => {
           
//             response.map(brg => {
//                 $('#nm_brg').append(getShowBarang(brg));
//             })

//         });
//     }

//     const getKdPinjam = async() => {
//         const url = "../../php/peminjaman/GetKdPinjam.php";
//         await fetch(url, {method : "GET"})
//         .then(response => {
//             if( !response.ok ){
//                 alert('Server Bermasalah !');
//             }
//             return response.json()
//         })
//         .then(response => {
//             $('#kd_pinjam').val(response);
//         })
//     }

//     const getShowBarang = (response) => {
//         return `<option value="${response.id_brg}" class="capitalize">${response.nm_brg}</option>`;
//     }

//     const getShowRuangan = (response) => {
//         return `<option value="${response.id_ruangan}" class="capitalize">${response.nm_ruangan}</option>`;
//     }

//     const showTable = (response, i) => {
//         return `
//             <tr>
//                 <td>${response[i].kode}</td>
//                 <td>${response[i].nm_brg}</td>
//                 <td>${response[i].nm_ruangan}</td>
//                 <td>${response[i].tanggal}</td>
//                 <td>${response[i].status}</td>
//                 <td class="aksi">
//                     <button class='btn-edit px-2 p-1 bg-green-600 text-white rounded-[3px]' data-id="${response[i].id_peminjaman}" id="btn-ubah">
//                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
//                         <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
//                         <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
//                     </svg>
//                     </button>
//                     <button class='ml-1 btn-hapus px-2 p-1 bg-orange-600 text-white rounded-[3px]' data-id="${response[i].id_peminjaman}" id="btn-hapus">
//                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
//                             <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
//                         </svg>
//                     </button>
//                 </td>
//             </tr>`
//     } 

//     const resetForm = () => {
//         $('#kd_pinjam').val('');
//         $('#nm_brg').val('');
//         $('#jmlh_pinjam').val('');
//         $('#nm_ruangan').val('');
//         $('#nm_peminjam').val('');
//         $('#tgl_pinjam').val('');
//         $('#status').val('');
//     }

//     getKdPinjam();
//     getBarang();
//     getRuangan();
//     ReadData();
// })

// // const popup = document.querySelector('.modal-popup');
// // // event popup box
// // document.body.addEventListener('click', (e) => {
// //     if( e.target.id == 'logout' ){
// //         popup.style.display = 'flex';
// //     }else if(e.target.id == 'confirmErr'){
// //         popup.style.display = 'none';
// //     }
// // })
// // const confirmScs = document.querySelector('.confirm > .confirmScs');
// // confirmScs.addEventListener('click', () => {
// //     sessionStorage.removeItem('id');
// //     sessionStorage.removeItem('I');

// //     document.location.href = '../login.html';
// // })