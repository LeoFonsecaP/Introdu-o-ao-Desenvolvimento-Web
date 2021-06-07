const tamanho = document.createElement("h2"); //Variavel para o tamanho do paragrafo
const link = document.createElement("a"); //Variavel para o link para si mesmo
var para = document.getElementsByTagName('p')[0]; //Variavel para o paragrafo


// Cria o link
link.href = "exercicio4.html";
link.textContent = " Home";
para.appendChild(link); //Adiciona o link


// Separar em linha
const sep_linha = new RegExp('(?<!\<[^\>]*)[\.?!]', 'g');
function quebra_linha(delimitador){
	return `${delimitador}<br>`;
}
function separa_frase(txt){
	return txt.replace(sep_linha, quebra_linha);
}
para.innerHTML = separa_frase(para.innerHTML);


// Conta e escreve
const contagem = new RegExp('(?<!\<[^\>]*)[a-zA-Z\'\-]+', 'g');
function conta_palavras(txt){
	return txt.match(contagem).length;
}
const palavras = conta_palavras(para.textContent);
document.body.innerHTML = palavras.toString().concat(document.body.innerHTML);


// Coloca as cores
const cores = {'8': 'pink', '6': 'blue', '4': 'purple', '5': 'purple'};

function colore(palavra){
	if(cores[palavra.length] != undefined){
    	return `<span style=\"background-color: ${cores[palavra.length]}\">${palavra}</span>`
	}
	else{
		return palavra;
	}
}

para = document.getElementsByTagName('p')[0];
document.getElementsByTagName("button")[0].addEventListener("click", function(){ //Muda cor no clique
	para.innerHTML = para.innerHTML.replace(contagem, colore);
});
