const UserGlobal = {
    userName:''
};

const form = document.querySelector('form');

form.addEventListener('submit', function(event) {

    event.preventDefault();

    const FirstName = document.getElementById('PrimeiroNome').value;
    const LastName = document.getElementById('UltimoNome').value;
    const UserName = document.getElementById('Usernamer').value;
    

    UserGlobal.userName = UserName;

    console.log("Primeiro nome: ", FirstName);
    console.log("Sobrenome: ", LastName);
    console.log("Username: ", UserName);
 
});


