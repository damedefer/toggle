
var nom=document.getElementById('nom');
var login=document.getElementById('login');
var passe=document.getElementById('passe');
var calc=document.getElementById('calc');
var moyene=document.getElementById('moyenne');
var facti=document.getElementById('factoriel');
var mail=document.getElementById('email');
function calcule(){
	var i=0;
	var nb1;
	var nb2;
	var addit=0;
	 nb1=prompt("entrer le nombre de chiffre:",);
	while(i<nb1){

		 nb2=prompt("entrer le chiffre:");
		 nb2=parseInt(nb2);
		 addit=addit+nb2;
		 i=i+1;

		 document.getElementById('calc').value= addit ;
	}
	console.log( addit);

	//document.getElementById('calc').value=addit; permet d afficher les reponses dans le html et non sur la console
	document.getElementById('calc').value=addit;
	
}

function affiche(){
	var somme=0;
	var newvar=4;
	var note=0;
	var i=0;
	var k=0;
	i=prompt("Entrer le nombre de matieres");
	while(k<i)
	{

		 newvar=prompt("entrer le chiffre:");
		 newvar=parseInt(newvar);
		 somme=somme+newvar;
		 k=k+1;
		
	}
	note=somme/i;
	document.getElementById('moyenne').value=note;
	
}
function fact(){
	var nombre;
	
	nombre=prompt("entrer le nombre");
	var initial=nombre-1;
	do{

		nombre=nombre*initial;

		initial=initial-1;
	}while(initial!==0);
	document.getElementById('factoriel').value=nombre;

}
function formulaire(){
	var mot=passe.value
	
	var contrainte=/[A-Z]{6}[.;,]*[a-z]{6}/g;
	var test=mail.value;
	 var message=/[a-z].[a-z]{19}@*gmail.com/g;

	//function NomUtilisateur(){
	if(login.value.length==0 ||mail.value.length==0|| mot.length==0|| nom.value.length==0){
		passe.style.border='2px solid red';
		nom.style.border='2px solid red';
		mail.style.border='2px solid red';
		login.style.border='2px solid red';
		alert("ces champs sont obligatoire");
	}
	else if(login.value==nom.value){
		alert("votre login doit etre different de votre nom");
	}

	//function Email()

	
	  if(mail.value.length!==0 &&test.match(message)===null)
	  {
	 	alert("votre email n'est pas conforme");
	 	console.log(test.match(message));
	 }
	 
	 //fonction mot de passe

	
	if(mot.length<6 && mot.length!==0)
	{
		alert("Votre mot de passe doit contenir au moins 6 caracteres");
	}
	else if (!mot.match(contrainte) && mot.value.length!==0){
	  	console.log(mot);
	  	console.log(mot.match(contrainte));
		alert("Votre mot de passe doit debuter par une majuscule et contenir au moins 1 caractere special");
	}
	
	else if (mot.match(contrainte)){
	  	console.log(mot);
	  	console.log(mot.match(contrainte));
		
	}
	
}
function Email(){

	var test=mail.value;
	 var message=/[a-z].[a-z]{19}@*gmail.com/g;
	 console.log(mail.value);
	 console.log(message);
	 console.log(test.match(message));
	 if(mail.value.length==0){
	 	alert("ce champ est obligatoire");
	 }
	 else if(test.match(message)===null)
	  {
	 	alert("votre email n'est pas conforme");
	 	console.log(test.match(message));
	 }
	 else{
	 	alert("email correct");
	 }
}
function NomUtilisateur(){
	console.log("bonjiour");
	console.log(nom.value);
	console.log(login.value);
	if(login.value.length==0){
		alert("ce champ est obligatoire");
	}
	else if(login.value==nom.value){
		alert("votre login doit etre different de votre nom");
	}
	
}
var elt=getElementById('test');
function test(){
	var attribut=elt.getattribute("type");
	if (elt.hasAttribute('type')) {
			elt.setAttribute("type").value='radio';
	}
}

/*var liste=document.querySelector('ul')[0]; sachant que les listes sont des tableau, pour acceder au premier element l'on utilise document.querySelector pour cherc
l element dans le fichier ou se trouve le lien js ensuite on specifie le nom du tableau qui est ul et l indice de l element entre crochet*/
/*var Items=lisyte *children pour preciser que sont tout les enfanyts de l element*/
/*console.log(Items[0].innertext) pour afficher le contenu qui est a l indice 0, deja innertext recupere la valeure d un element html defini d ans le fichier .html*/
/* Item4.innertext='<b>Item</b>':{
	<li>items1</li>

	<li>items1</li>
	<li>items1</li>
	permet de creer un nouveau item
	pour changer le type  du n element cest :nomvariable.type="nouveau type";

}*/
const  btn1=document.getElementById('toggle1');
const btn2=document.getElementById('toggle2');
const inscrire=document.getElementById('inscription');
const conneted=document.getElementById('inscription');
const linear=document.getElementById('ligne');
const cadrer=document.getElementById('mini-cadre');
let variable=false;
console.log(variable);

btn1.addEventListener('click',() =>{
	
	variable=!variable;
	if (variable==true) {
		inscrire.style.display="block";
		linear.style.display="none";
		cadre.style.with="60%";
	}
	else{
		inscrie.style.display="none";
		linear.style.display="block";

	}
	
});