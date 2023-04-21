// Array de perguntas e respostas
const perguntas = [
	{
		pergunta: "Quantas jumentas gearlison espocou?",
		respostas: [
			"1",
			"20",
			"56",
			"278",
		],
		respostaCorreta: 56
	},
	{
		pergunta: "aline é falsa?",
		respostas: [
			"sim",
			"sim",
			"sim",
			"sempre"
		],
		respostaCorreta: 1
	},
	{
		pergunta: "nicolas é viado?",
		respostas: [
			"claro",
			"sim",
			"sim",
			"sim"
		],
		respostaCorreta: 1
	},
      
    {
		pergunta: "meuca pega velho?",
		respostas: [
			"claro",
			"sim",
			"sim",
			"so os ricos"
		],
		respostaCorreta: 1
    },

    {
        pergunta: "ewillyn da um tapa'?",
		respostas: [
			"claroo",
			"so do fininn",
			"drogada",
			"maconheira"
		],
		respostaCorreta: 1
    }    
    
];

// Variáveis para controlar o jogo
let perguntaAtual = 0;
let pontos = 0;

// Função para exibir a próxima pergunta
function proximaPergunta() {
	const pergunta = perguntas[perguntaAtual];
	const divPergunta = document.getElementById("pergunta");
	const ulRespostas = document.getElementById("respostas");
	
	// Limpa a pergunta anterior e as respostas
	divPergunta.innerHTML = "";
	ulRespostas.innerHTML = "";
	
	// Exibe a nova pergunta
	divPergunta.innerHTML = pergunta.pergunta;
	
	// Exibe as novas respostas
	for (let i = 0; i < pergunta.respostas.length; i++) {
		const li = document.createElement("li");
		const resposta = pergunta.respostas[i];
		
		li.innerHTML = resposta;
		li.onclick = function() {
			if (i === pergunta.respostaCorreta) {
				alert("Resposta Correta!");
				pontos++;
			} else {
				alert("Resposta Incorreta :(");
			}
			
			// Verifica se é a última pergunta
			if (perguntaAtual === perguntas.length - 1) {
				alert("Fim de Jogo! Você fez " + pontos + " pontos.");
				return;
			}
			
			// Passa para a próxima pergunta
			perguntaAtual++;
			proximaPergunta();
		};
		
		ulRespostas.appendChild(li);
	}
}

// Inicia o jogo
proximaPergunta();
