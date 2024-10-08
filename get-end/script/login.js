const loginurl = 'https://go-wash-api.onrender.com/api/login';

async function fazerLogin() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    try {
        let api = await fetch(loginurl, {
            method: "POST",
            body: JSON.stringify({
                "email": email,
                "password": password,
                "user_type_id": 1
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (api.ok) {
            let resposta = await api.json();
            console.log("Login realizado com sucesso:", resposta);
         
            localStorage.setItem('userToken', resposta.token); 
            localStorage.setItem('userData', JSON.stringify(resposta.user));

        
            window.location.href = "home.html"; 

        } else {
       
            let errorResponse = await api.json();

            if (errorResponse.data && errorResponse.data.errors === "Usuário não está ativo") {
                console.error("Erro: O usuário não está ativo.");
                alert("Erro: O usuário não está ativo.");
            } else if (errorResponse.data && errorResponse.data.errors === "Usuário não foi encontrado") {
                console.error("Erro: O usuário não foi encontrado.");
                alert("Erro: O usuário não foi encontrado.");
            } else {
                console.error("Erro desconhecido:", errorResponse.data.errors);
                alert("Erro desconhecido: " + errorResponse.data.errors);
            }
        }
    } catch (error) {
        console.error("Erro na execução da requisição:", error);
        alert("Erro ao conectar ao servidor. Tente novamente mais tarde.");
    }
}
