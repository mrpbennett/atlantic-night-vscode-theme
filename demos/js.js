const btn = document.getElementById('btn');
let count = 0;

function render() {
	btn.innerText = `Count: ${count}`;
}

let random = () => {
	return Math.floor(Math.random() * (40 - 10 + 1))
}
console.log(random())

btn.addEventListener('click', () => {
	// count from 1 to 10
	if (count < 10) {
		count += 1;
		render();
	}
});