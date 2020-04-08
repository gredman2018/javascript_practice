
window.onload=function(){

function h1_count() {
	const h1_element = document.querySelectorAll('h1');
	let count = 0;
	h1_element.forEach(element => count +=1);
   	document.getElementById("one").innerHTML = `There are ${count} header tags in this page!`;
}

function div1_count() {
	
	let count = div1.getElementsByTagName("*").length;

	document.getElementById("two").innerHTML = `There are ${count} elements in this div!`;

}

function div2_count() {
	
	let count = div2.getElementsByTagName("*").length;

	document.getElementById("three").innerHTML = `There are ${count} elements in this div!`;

}

document.getElementById('button_1').addEventListener('click', e => {
  h1_count();
})

document.getElementById('button_2').addEventListener('click', e => {
  div1_count();
})

document.getElementById('button_3').addEventListener('click', e => {
  div2_count();
})

}

