const url = 'https://go-wash-api.onrender.com/api/login';

async function fazerLogin() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    try {
        let api = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
                "email": email,    // Usando o valor dinâmico capturado do input
                "password": password,
                "user_type_id": 1   // Se precisar, ajuste esse valor conforme a lógica do seu sistema
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (api.ok) {
            let resposta = await api.json();
            console.log(resposta);
            return;  // Para evitar execução abaixo se o login for bem-sucedido
        } else {
            let respostaErro = await api.json();
            // Tente exibir toda a resposta para entender o formato do erro
            console.log(respostaErro);  
            alert(respostaErro.data?.errors?.email || 'Erro no login');
        }
    } catch (error) {
        console.error('Erro ao realizar login:', error);
        alert('Ocorreu um erro ao tentar fazer login. Tente novamente mais tarde.');
    }
}
