
document.addEventListener('DOMContentLoaded', function() {  // Espera o DOM carregar para executar o código abaixo

    var listados = [];      // Cria um array vazio para armazenar os nomes listados

    var sorteados = [];     // Cria um array vazio para armazenar os nomes sorteados

    var falta = [];        // Cria um array vazio para armazenar os nomes que ainda não foram sorteados

    var revelados = [];    // Cria um array vazio para armazenar os nomes que já foram sorteados

    function incluir() {    // Função para incluir os nomes na lista de participantes

        var nome = document.getElementById('nomeParticipante').value.toUpperCase(); // Pega o valor do input e transforma em maiúsculo

        if (!listados.includes(nome) && isNaN(nome)) { // Verifica se o nome já foi listado e se não é um número

            listados.push(nome);    // Adiciona o nome ao array listados

            document.querySelector('.participantes').innerText = listados.join(', ');   // Exibe os nomes listados na tela

        } else {   // Caso o nome já tenha sido listado ou seja um número, exibe um alerta

            alert("Nome já listado ou é um número. Insira um nome válido.");    // Exibe um alerta

        }

    }

    function sortear() {   // Função para sortear os nomes

        if (listados.length % 2 === 0) { // Verifica se o número de participantes é par

            sorteados = []; // Limpa o array de sorteados

            for (var i = 0; i < listados.length; i++) { // Loop para sortear os nomes

                var indiceAleatorio; // Variável para armazenar o índice aleatório

                do { // Loop para verificar se o índice já foi sorteado ou se é o mesmo do participante

                    indiceAleatorio = Math.floor(Math.random() * listados.length); // Gera um índice aleatório
 
                } while (sorteados.includes(listados[indiceAleatorio]) || indiceAleatorio === i); // Verifica se o índice já foi sorteado ou se é o mesmo do participante

                sorteados[i] = listados[indiceAleatorio]; // Adiciona o nome sorteado ao array de sorteados

            }

            falta = [...listados];       

            document.querySelector('.falta').innerText = falta.join(', '); // Exibe os nomes que ainda não foram sorteados na tela

        } else { // Caso o número de participantes não seja par, exibe um alerta

            alert("O número de participantes precisa ser par.");    // Exibe um alerta

        }

    }

    function revelar() {  // Função para revelar o nome do participante

        if (sorteados.length > 0) {  // Verifica se já houve sorteio

            var nomeParaRevelar = document.getElementById("nomeParticipanteRevelar").value.toUpperCase(); // Pega o valor do input e transforma em maiúsculo

            if (falta.includes(nomeParaRevelar)) { // Verifica se o nome já foi revelado ou se faz parte dos participantes

                var indiceParticipante = falta.indexOf(nomeParaRevelar); // Pega o índice do participante

                alert(nomeParaRevelar + " tirou " + sorteados[indiceParticipante]); // Exibe um alerta com o nome do participante e o nome que ele tirou

                revelados.push(nomeParaRevelar);        // Adiciona o nome do participante ao array de revelados

                falta.splice(indiceParticipante, 1);  // Remove o nome do participante do array de falta

                document.querySelector('.falta').innerText = falta.join(', ');  // Exibe os nomes que ainda não foram sorteados na tela

                document.querySelector('.revelados').innerText = revelados.join(', ');  // Exibe os nomes que já foram sorteados na tela

            } else { // Caso o nome já tenha sido revelado ou não faça parte dos participantes, exibe um alerta

                alert("Nome já revelado ou não faz parte dos participantes.");   // Exibe um alerta

            }

        } else { // Caso não tenha havido sorteio, exibe um alerta

            alert("Ainda não houve sorteio. Por favor, clique em 'Sortear' primeiro.");  // Exibe um alerta

        }

    }


    document.getElementById('btnIncluir').addEventListener('click', incluir); // Adiciona um evento de clique ao botão de incluir

    document.getElementById('btnSortear').addEventListener('click', sortear); // Adiciona um evento de clique ao botão de sortear

    document.getElementById('btnRevelar').addEventListener('click', revelar);   // Adiciona um evento de clique ao botão de revelar

}); 