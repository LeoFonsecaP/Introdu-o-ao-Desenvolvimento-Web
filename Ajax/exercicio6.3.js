const ReqresURL = 'https://reqres.in/api/unknown/';
const botao = document.getElementById("Button");
const id = document.getElementById("Cor");
const texto = document.getElementById("HexNome");
const quadrado = document.getElementById("Square");
console.log(botao)

function muda_a_cor(data){
	texto.innerHTML += data.name + '<br>' + data.color;
	quadrado.style.backgroundColor = data.color;
}


async function pega_dados(IdCor){
	texto.innerHTML = "Color: ";
	try{
		const response = await fetch(ReqresURL + IdCor);
		const data = await response.json();
		muda_a_cor(data.data);
	}
	catch(erro){
		console.error(erro);
	}
}

pega_dados(1); //Default
botao.addEventListener("click", () => pega_dados(id.value));

