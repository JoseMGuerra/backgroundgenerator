document.addEventListener("DOMContentLoaded", () => {
    
	let css = document.querySelector("h3");
	let color1 = document.querySelector(".color1");
	let color2 = document.querySelector(".color2");
	let body = document.getElementById("gradient");
	let randomColorBtn = document.getElementById("randomColorBtn");
	
	// Display the initial CSS linear gradient property on page load
	setGradient();

	function setGradient() {	
		body.style.background = 
		`linear-gradient(
			to right, ${color1.value}, ${color2.value}
			)`;
	
		css.textContent = `${body.style.background};`;
	}
	
	// generates two random numbers for the color inputs
	function generateRandomGradient() {
		body.style.background = 
		`linear-gradient(
			to right, 
			${color1.value = getRandomColor()}, 
			${color2.value = getRandomColor()}
			)`;
	
		css.textContent = `${body.style.background};`;
	  }
	 
	// generates a random hex colour number
	function getRandomColor() {
		let hex = '0123456789ABCDEF';
		let color = '#';
		for (let i = 0; i < 6; i++) {
			color += hex[Math.floor(Math.random() * 16)];
		}
		return color;
	  }
			
	color1.addEventListener("input", setGradient);
	
	color2.addEventListener("input", setGradient);
	
	randomColorBtn.addEventListener("click", generateRandomGradient);

});