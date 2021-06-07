function makeMadTalk(){
	var Noun = document.getElementById("noun").value;
	var Adjective = document.getElementById("adjective").value;
	var Person = document.getElementById("person").value;
	document.getElementById("story").innerHTML = Person + Adjective + Noun;
}

document.getElementById("lib-button").addEventListener("click", makeMadTalk);
