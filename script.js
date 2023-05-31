let calculate=document.getElementById('submit');
	calculate.addEventListener('click',volume_sphere)
function volume_sphere() {
    //Write your code here
  let radius=document.getElementById("radius");
	let result=(4/3) * Math.PI * Math.pow(radius.value, 3);
	result = result.toFixed(4);
	let volume=document.getElementById("volume");
	volume.value=result;
	return false;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
