const listurl = "https://go-wash-api.onrender.com/api/auth/address";

async function fetchEnderecos() {
  const userData = JSON.parse(localStorage.getItem('userData'));

  try {
    const response = await fetch(listurl, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + userData.access_token,
      },
    });
    if (!response.ok) {
      throw new Error(`Erro ao buscar endereços: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    alert("Ocorreu um erro ao buscar seus endereços.");
  }
}

function criarTabelaEnderecos(enderecos) {
  const tabelaUsuarios = document.getElementById("tabela-usuarios");
  const corpoTabela = tabelaUsuarios.tBodies[0];

  corpoTabela.innerHTML = "";
  enderecos.forEach(endereco => {
    corpoTabela.innerHTML += `
      <tr>
        <td>${endereco.title}</td>
        <td>${endereco.cep}</td>
        <td>${endereco.address}</td>
        <td>${endereco.number}</td>
        <td><button data-id="${endereco.id}">Atualizar</button></td>
      </tr>
    `;
  });

  // Adiciona evento de clique aos botões de atualizar
  const botoesAtualizar = document.querySelectorAll("button[data-id]");
  botoesAtualizar.forEach(botao => {
    botao.addEventListener('click', () => {
      const idEndereco = botao.dataset.id;
      atualizarEndereco(idEndereco); // Aqui você chama atualizarEndereco
    });
  });
}

async function atualizarEndereco(id) {
  const userData = JSON.parse(localStorage.getItem('userData')); 
  const updatedData = {
    title: "Minha Casa ola",
    cep: "03730000",
    address: "Rua Brazópolis Jardim Jaú (Zona Leste)",
    number: "8A",
    complement: ""
  };

  try {
    const response = await fetch(`${listurl}/${id}`, { // Use listurl aqui
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + userData.access_token,
      },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      throw new Error(`Erro ao atualizar endereço: ${response.status}`);
    }

    // Mensagem de sucesso
    alert("Endereço atualizado com sucesso!");

    // Atualiza a tabela após a atualização
    mostrar_enderecos();
  } catch (error) {
    console.error(error);
    alert("Ocorreu um erro ao atualizar o endereço.");
  }
}

// Função principal para mostrar os endereços
async function mostrar_enderecos() {
  const enderecos = await fetchEnderecos();
  if (enderecos) {
    criarTabelaEnderecos(enderecos.data);
  }
}

// Chama a função principal para exibir os endereços
mostrar_enderecos();
