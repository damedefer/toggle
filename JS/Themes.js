const clique=document.getElementById('favori');
const icone=document.getElementById('icone');

var affiche=false;
clique.addEventListener('click', () => {
	affiche=!affiche;
	console.log(affiche);
	alert("bjr");
		icone.style.color="red";
});