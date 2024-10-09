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
          
            // Salva a resposta no localStorage (por exemplo, token ou dados do usuário)
            localStorage.setItem('userToken', resposta.token); // Substitua 'token' pelo campo correto na resposta
            localStorage.setItem('userData', JSON.stringify(resposta.user)); // Caso haja dados do usuário

            // Redireciona o usuário para a página Home
            window.location.href = "home.html"; 

        } else {
            // Trata os possíveis erros de resposta
            let errorResponse = await api.json();

            // Verifica se há erros específicos na resposta e exibe uma mensagem apropriada
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
        // Captura erros que ocorrem durante a requisição
        console.error("Erro na execução da requisição:", error);
        alert("Erro ao conectar ao servidor. Tente novamente mais tarde.");
    }
}
