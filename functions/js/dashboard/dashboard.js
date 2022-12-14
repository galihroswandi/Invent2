document.body.onload = () => {
    const landing = document.getElementById('landing');
    const cards = document.querySelectorAll('.cards');

    // Event Blank
    landing.style.opacity = '0';
    landing.style.transition = 'all 1s ease-in-out';

    setTimeout(() => {
        landing.style.display = 'none';
    }, 1000)
    // End of envent blank

    // Event cards
    for( let i = 0; i < cards.length; i++ ){
        setTimeout(() => {
            cards[i].classList.add('muncul');
            cards[i].style.transition = 'all .5s .8s ease-in-out';
        }, 200 * (i + 1));
    }
    // End of event cards

    data();
}

const cards = document.querySelectorAll('.cards');
cards.forEach(el => {
    el.addEventListener('mouseover', function(){
        this.style.transition = 'all .5s ease-in-out';
        this.style.transform = "scale(1.06, 1.06)";
        // this.style.transform = "translate(0, -10px)";
        this.style.boxShadow = "0, 5px .1px ##1b1b29";
    });
    el.addEventListener('mouseleave', function(){
        this.style.transition = "all .5s ease-in-out";
        this.style.transform = "scale(1,1)";
        this.style.boxShadow = "none";
    })
})

const data = async () => {
    const textBarang = document.getElementById('numberTotaBarang');
    const textKatagori = document.getElementById('numberKategori');
    const textSatuan = document.getElementById('numberSatuan');
    const textMerk = document.getElementById('numberMerk');

    // Get Total Barang
    const url = "functions/php/barang/GetTotalBarang.php";
    await fetch(url, {method : "GET"})
    .then(response => {
        if( !response.ok ){
            alert('Server Barang Bermasalah !');
        }
        return response.json();
    })
    .then(response => {
        textBarang.textContent = response; 
    });

    // Get Total Kategori
    const url2 = "functions/php/kategori/GetTotalKategori.php";
    await fetch(url2, {method : "GET"})
    .then(response => {
        if( !response.ok ){
            alert('Sever Kategori Bermasalah !');
        }
        return response.json()
    })
    .then(response => {
        textKatagori.textContent = response;
    })

    // Get Total Satuan
    const url3 = "functions/php/satuan/GetTotalSatuan.php";
    await fetch(url3, {method : "GET"})
    .then(response => {
        if( !response.ok ){
            alert('Sever Satuan Barang Bermasalah !');
        }
        return response.json();
    })
    .then(response => {
        textSatuan.textContent = response;
    })

    // Get total merk
    const url4 = "functions/php/merk/GetTotalMerk.php";
    await fetch(url4, {method : "GET"})
    .then(response => {
        if( !response.ok ){
            alert('Sever Merk Bermasalah !');
        }
        return response.json();
    })
    .then(response => {
        textMerk.textContent = response;
    })
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

    document.location.href = 'login.php';
}) 