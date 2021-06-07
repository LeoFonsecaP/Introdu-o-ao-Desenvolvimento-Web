// Cria a div que sera adicionada 
var novo = document.createElement("div");
novo.setAttribute("class", "purple"); //Começa na classe purple

// Tem como objetivo randomizar a classe do elemento
function cor(){
	var cores = new Array ('brown', 'blue', 'green', 'purple', 'yellow'); // Vetor com as cores
	var rand = Math.floor(Math.random() * 5); // Gera uma posicao aleatoria no vetor
	novo.setAttribute("class", cores[rand]); // Atribui a classe
}

// Tem como objetivo escrever o nome da cor apos o hover
function muda_nome(divs){
	var selected = document.getElementsByClassName("selected")[0]; //Onde deve ser escrito
	//Verifica o hover em todas as divs
	for(var i = 0; i<5; i++){
		let aux = divs[i];
		divs[i].addEventListener("mouseover", function() {
			selected.innerHTML = aux.className; // muda o texto para o nome da cor
		})
		divs[i].addEventListener("mouseout", function() {
			selected.innerHTML = "None!"; // muda o texto para o padrao
		})
	}

}

//Executa apos o load
function main(){
	window.setInterval(cor, 500); //Randomiza a cor
	document.getElementById("change_heading").innerHTML = "Cores:"; // muda o texto
	var sel = document.getElementsByTagName("section")[0];
	sel.appendChild(novo); //Insere a nova div
	var classes = document.getElementsByTagName("div");
	muda_nome(classes);
}

window.addEventListener("DOMContentLoaded", main); //Apos load
