function showPass(){
    const show = document.getElementById('pass-show');
    const password = document.getElementById('pass');
    show.checked ? password.setAttribute('type', 'text') : password.setAttribute('type', 'password')
}

function hideUser(){
    const hide = document.getElementById('user-hide');
    const username = document.getElementById('user');
    hide.checked ? username.setAttribute('type', 'password') : username.setAttribute('type', 'text')
}


