const body = document.body;

const pad = (num) => `${num}`.padStart(2, '0');

const getHex = () => {
	const date = new Date();
	const hour = pad(date.getHours());
	const minute = pad(date.getMinutes());
	const second = pad(date.getSeconds());
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
