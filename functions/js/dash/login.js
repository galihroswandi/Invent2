// Cek Session login
const session = sessionStorage.getItem('id');
if( session ){
    document.location.href = 'dash/dashbor.html';
}

// Cek Cookie
const getCookie = document.cookie
  .split(';')
  .map(cookie => cookie.split('='))
  .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {});

if( !getCookie ){
    document.location.href = 'login.html';
}else{
    const id = getCookie.id;
    const id_admin = getCookie.I;

    $.ajax({
        type : "POST",
        url : "../php/login/CekCookie.php",
        data : `username=${id}&id_admin=${id_admin}`,
        dataType : "JSON",
        success :  (response) => {
            if( response.status == '1' ){
                sessionStorage.setItem("id", response.hash);
                sessionStorage.setItem("I", response.id_admin);

                document.location.href = 'dash/dashbor.html';
            }
        }
    })
}
$(document).ready(function(){

    $('#btn-login').click(() => {
        checkData();
    });
    document.addEventListener('keydown', (e) => {
        if( e.key == 'Enter' ){
            checkData();
        }
    })

    document.getElementById('showPassword').addEventListener('click', function() {
        const input = document.getElementById('password');
        if( input.getAttribute('type') == 'password' ){
            input.setAttribute('type', "text");
            this.innerHTML = `<i class="bi ml-[235px] bi-eye-slash" title="Hide Password"></i>`;
        }else{
            input.setAttribute('type', 'password');
            this.innerHTML = `<i class="bi bi-eye ml-[235px] bg-white px-1" title="Show Password"></i>`
        }
    })

    const checkData = () => {

        const username = $('#username').val();
        const password = $('#password').val();

        // Chexbox remember
        let chexbox = document.getElementsByName('remember');
        let remember = '';
        for( let i = 0; i < chexbox.length; i++ ){
            if( chexbox[i].checked ){
                remember += chexbox[i].value;
            }
        }

        $.ajax({
            type : "POST",
            url : "../php/login/LoginCheck.php",
            data : `username=${username}&password=${password}&check=${check}`,
            dataType : "JSON",
            success : (response) => {
                if( response.status == 1 ){
                    console.log(response.id_admin)
                    if( remember ){
                        sessionStorage.setItem("id", response.hash);
                        sessionStorage.setItem("I", response.id_admin);
                        setCookie('id', response.hash, 30);
                        setCookie('I', response.id_admin, 30);
                    }else{
                        sessionStorage.setItem("id", response.hash);
                        sessionStorage.setItem("I", response.id_admin);
                    }    
                    document.location.href = 'dash/dashbor.html';
                }else{
                    document.getElementById('message').innerHTML = `<i class="text-sm -mt-1">${response.msg}</i>`;
                }
            }
        })

    }

    const setCookie = (name, value, exdays) => {
        let d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = `expires=${d.toGMTString()}`;
        document.cookie = `${name}=${value};${expires} SameSite=None; Secure`;
    }

})