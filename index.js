const username = localStorage.getitem('username')

if(!username){
    alert('Login to continue')

    setTimeout(()=>{
        window.location.href ='/signup.html'
    },'1000')
}