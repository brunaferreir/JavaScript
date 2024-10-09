/*const cadasurl = "https://go-wash-api.onrender.com/api/user"; 
async function cadastroUsuario(){
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let cpf_cnpj = document.getElementById('cpf_cnpj').value
    let api = await fetch(cadasurl,{ /* aguarde a resposta da requisição
        method:"POST",
        body:JSON.stringify({   CONVERTER O OBJETO EM JSON
            "name":name,
            "email":email,
            "user_type_id":1,
            "password": password,
            "cpf_cnpj": cpf_cnpj,
            "terms": 1,
            "birthday":"2000-10-12"    
        }),
        headers:{  /* ENVIAR UM JSON E RECEBER UM JSON */
         /*   'Content-Type':'application/json'
        }
    });

    if(api.ok){
        let resposta = await api.json();
        console.log(resposta)
        return  /* O PRIMEIRO RETURN ENCONTRADA NAO EXECUTA MAIS NADA ABAIXO DA FUNÇÃO 
    }
    let respostaErro = await api.json();
       alert(respostaErro.data.errors.cpf_cnpj)
}*/