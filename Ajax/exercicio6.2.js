const Joes = document.getElementsByClassName("Joe");
const valores = document.getElementsByClassName("valor");
const botoes = document.getElementsByTagName("button");
const resposta = document.getElementsByClassName("Answer");


function isJoeHappyCallback(happy, callback){
    setTimeout(() => {
      const happyness = Math.random();
      if (happyness > happy) {
        callback(happyness);
      } else {
        callback(new Error("Joe is sad!"));
      }
    }, 2000);
}

function callback(result){
	if(result instanceof Error){
		resposta[0].innerHTML = "No! " + result.message;
		resposta[0].style.color = "red";
	}
	else{
		resposta[0].innerHTML = "Yes!!! Joe is happy with " + result.toFixed(2) + " " + " happines rate.";
		resposta[0].style.color = "black";
	}
}

function isJoeHappyPromise(happy){
	const Pro = new Promise((resolve, reject) => {
		setTimeout(() => {
			const happyness = Math.random();
			if (happyness > happy) {
			resolve(happyness);
			} else {
			reject(new Error("Joe is sad!"));
			}
		}, 2000);
	})
	return Pro;
}

async function isJoeHappyAsync(happy){
	try{
		const result = await isJoeHappyPromise(happy);
		resposta[2].innerHTML = "Yes!!! Joe is happy with " + result.toFixed(2) + " " + " happines rate.";
		resposta[2].style.color = "black";
	}
	catch(erro){
		resposta[2].innerHTML = "No! " + erro.message;
		resposta[2].style.color = "red";
	}
}

botoes[0].addEventListener("click",() => isJoeHappyCallback(valores[0].value, callback));
botoes[1].addEventListener("click",() => {
	isJoeHappyPromise(valores[1].value)
	.then((result) => {
		resposta[1].innerHTML = "Yes!!! Joe is happy with " + result.toFixed(2) + " " + " happines rate.";
		resposta[1].style.color = "black";
	}).catch((erro) => {
		resposta[1].innerHTML = "No! " + erro.message;
		resposta[1].style.color = "red";
	});
})
botoes[2].addEventListener("click",() => isJoeHappyAsync(valores[2].value));
