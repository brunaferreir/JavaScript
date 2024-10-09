const url = "https://go-wash-api.onrender.com/api/auth/address";

async function cadastroEndereco() {
    try {
        let title = document.getElementById('title').value;
        let cep = document.getElementById('cep').value;
        let address = document.getElementById('address').value;
        let number = document.getElementById('number').value;
        let complement = document.getElementById('complement').value;

        let response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({  
                "title": title,
                "cep": cep,
                "address": address,
                "number": number,
                "complement": complement,
                "user_type_id": 1
            }),
            headers: { 
                'Content-Type': 'application/json',  
                'Authorization': 'Bearer <eyJ0eXAiOiJKV1QiLCJhbGciOizdWIiOiIxIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.z1pdEBkx8Hq01B7jNKa42NGxtFFHwb-7O_0y8krVWUY>'
            }
        });

        if (response.ok) {
            let resposta = await response.json();
            console.log(resposta);
            alert("Endereço cadastrado com sucesso!");
        } else {
            // Captura o erro quando a resposta não for ok (status diferente de 200-299)
            let respostaErro = await response.json();
            console.error('Erro no cadastro:', respostaErro);
            alert('Erro ao cadastrar o endereço: ' + (respostaErro.message || 'Tente novamente.'));
        }

    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao realizar o cadastro. Tente novamente mais tarde.');
    }
}




