function logar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "Bimo" && senha == "bimo123"){
        alert('usuari e senha correto');
        location.href = "index.html";
    }else{
        alert('Usuario ou senha incorretos');
    }

}