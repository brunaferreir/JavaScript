function getWeather() { //serve para buscar e exibir informações meteorológicas para uma cidade informada pelo usuário
    const city = document.getElementById("city").value;
    const resultDiv = document.getElementById("result");//usada para exibir o valor do resultado 

//validação de entrada se o campo estiver vazio    
    if (!city) { 
        resultDiv.innerHTML = '<p class="error">Por favor, insira o nome de uma cidade.</p>';
        return;
    }
//Substitua esta chave pela sua chave real de um serviço de clima como o WeatherAPI.
    const apiKey = "2c9c503160794ddf927211625242711";

//Isso define as opções para a solicitação de API:
//method: Definido como "GET" porque estamos recuperando dados.

    const requestOptions = {
        method: "GET",
        redirect: "follow"
        
    };

//Esta linha usa a Fetch API para fazer uma solicitação GET para a API de clima.
    fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)

    //se a resposta estiver OK
        .then((response) => {
            if (!response.ok) {
                throw new Error("Cidade não encontrada ou erro na API.");
            }
            return response.json();
        })
//Este código é executado se a resposta for analisada com sucesso como JSON.
//A atribuição de desestruturação é usada para extrair informações específicas do objeto de resposta
        .then((data) => {
            const { name, region, country } = data.location;
            const { temp_c, condition } = data.current;

     //é definido com conteúdo HTML formatado:    
            resultDiv.innerHTML = `
                <p><strong>${name}, ${region}, ${country}</strong></p>
                <p>Temperatura: <strong>${temp_c}°C</strong></p>
                <p>Condição: <strong>${condition.text}</strong></p>
                <img src="https:${condition.icon}" alt="${condition.text}">
            `;
        })
     // Este código é executado se houver um erro durante o processo de busca ou análise.
        .catch((error) => {
            resultDiv.innerHTML = `<p class="error">Erro: ${error.message}</p>`;
        });
}

