const urlListarEnderecos = 'https://go-wash-api.onrender.com/api/auth/address'; 

async function listarEnderecos() {
    try {
        const userData = localStorage.getItem('userData');
        if (!userData) {
            throw new Error('Usuário não autenticado.');
        }

        let token = JSON.parse(localStorage.getItem('userData')).access_token;

        let response = await fetch(urlListarEnderecos, {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',  
                'Authorization' : "Bearer" + token
            }
        });

        if (!response.ok) {
            throw new Error('Erro ao buscar os endereços: ' + response.status);
        }

        const resultado = await response.json();
        // console.log(resultado); // Para verificar a estrutura da resposta

        const dados = resultado.data; 

        const tabelaBody = document.querySelector('#tabela-enderecos tbody');
        if (!tabelaBody) {
            throw new Error('Elemento de tabela não encontrado.');
        }

        tabelaBody.innerHTML = '';

        dados.forEach(dado => {
            const row = document.createElement('tr');

            const cellTitle = document.createElement('td');
            cellTitle.textContent = dado.title || 'N/A';
            row.appendChild(cellTitle);

            const cellCep = document.createElement('td');
            cellCep.textContent = dado.cep || 'N/A';
            row.appendChild(cellCep);

            const cellAddress = document.createElement('td');
            cellAddress.textContent = dado.address || 'N/A';
            row.appendChild(cellAddress);

            const cellNumber = document.createElement('td');
            cellNumber.textContent = dado.number || 'N/A';
            row.appendChild(cellNumber);

            tabelaBody.appendChild(row);
        });
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao listar os endereços. Tente novamente mais tarde.');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    listarEnderecos();
});
