const body = document.body;

const getHex = () => {
	const date = new Date();
	const hour = date.getHours();
	const minute = date.getMinutes();
	const second = date.getSeconds();
	const hex = `#${hour}${minute}${second}`;

	return hex;
};

const set = () => {
	const hex = getHex();

	body.innerText = hex;
	body.style.backgroundColor = hex;

	requestAnimationFrame(set);
}

set();
