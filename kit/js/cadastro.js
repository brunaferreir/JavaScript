const cadasurl = "https://go-wash-api.onrender.com/api/user";

async function cadastroUsuario() {  
    try {
        let name = document.getElementById('name').value; 
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        let cpf_cnpj = document.getElementById('cpf_cnpj').value;

        let response = await fetch(cadasurl, {
            method: "POST",
            body: JSON.stringify({   
                "name": name,
                "email": email,
                "user_type_id": 1,
                "password": password,
                "cpf_cnpj": cpf_cnpj,
                "terms": 1,
                "birthday": "2000-10-12"
            }),
            headers: {  
                'Content-Type': 'application/json'
    
            }
        });

        if (response.ok) { 
            let resposta = await response.json();
            console.log(resposta);
            alert("Usuário cadastrado com sucesso!");
            return; 
        }

        let respostaErro = await response.json();
       
        let errors = respostaErro.data?.errors || {};

        if (errors.cpf_cnpj) {
            alert("Erro no CPF/CNPJ: " + errors.cpf_cnpj);
        }
        
        if (errors.email) {
            alert("Erro no e-mail: " + errors.email);
        }
        
        if (errors.password) {
            alert("Erro na senha: " + errors.password);
        }

        if (errors.name) {
            alert("Erro no nome: " + errors.name);
        }
        
        if (!errors.cpf_cnpj && !errors.email && !errors.password && !errors.name) {
            alert("Erro desconhecido ao realizar o cadastro."); 
        }

    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao realizar o cadastro. Tente novamente mais tarde.');
    }
}


