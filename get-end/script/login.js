const url = 'https://go-wash-api.onrender.com/api/login' ;
async function fazerLogin(){
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let api = await fetch(url,{
        
        method:"POST",
        body:JSON.stringify({
            "email": "xxxxxx@gmail.com",
            "password": "123456",
            "user_type_id": 1
        }),

        headers:{  /* ENVIAR UM JSON E RECEBER UM JSON */
            'Content-Type':'application/json'
        }
    }); 

    if(api.ok){
        let resposta = await api.json();
        console.log(resposta)
        return  /* O PRIMEIRO RETURN ENCONTRADA NAO EXECUTA MAIS NADA ABAIXO DA FUNÇÃO */
    }
    let respostaErro = await api.json();
       alert(respostaErro.data.errors.email)
       


}