const check = document.getElementById('check');
const pass = document.getElementById('pass');

check.onclick = togglePassword;

const passCheck = ()=>{
    if(check.checked){
        pass.type ='text';
    }else{
        pass.type ="password";
    }

}

const form = document.getElementById('form')
const Login = document.getElementById('Login')

Login.addEventListener('click', (e)=>{
    e.preventDefault();

    var username = document.getElementById('username').value;
    var pass = document.getElementById('pass').value;


    localStorage.setItem('username', username)
    localStorage.setItem('pass', pass);

    window.location.href='/index.html'
});

