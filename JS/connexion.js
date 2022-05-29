const  btn1=document.getElementById('toggle1');
const btn2=document.getElementById('toggle2');
const inscrire=document.getElementById('inscription');
const conneted=document.getElementById('inscription');
const linear=document.getElementById('ligne');
const cadrer=document.getElementById('mini-cadre');
let variable=false;
console.log(variable);
alert("bjr");
btn1.addEventListener('click',() =>{
	
	variable=!variable;
	if (variable==true) {
		inscrire.style.display="block";
		linear.style.display="none";
		cadre.style.with="60%";
		cadre.style.margin-top="2em";
	}
	else{
		inscrie.style.display="none";
		linear.style.display="block";

	}
	
});