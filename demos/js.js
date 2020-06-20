const btn = document.getElementById('btn');
let count = 0;

function render() {
	btn.innerText = `Count: ${count}`;
}

const someObject = {
	name: 'Joe Bloggs',
	age: 99,
	someFunc: function (input) {
		console.log(input)
	}
}

let random = (num) => {
	return Math.floor(Math.random() * (40 - 10 + 1))
}

btn.addEventListener('click', () => {
	// count from 1 to 10
	if (count < 10) {
		count += 1;
		render();
	}
});