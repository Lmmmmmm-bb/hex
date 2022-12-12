const body = document.body;

const pad = (num) => `${num}`.padStart(2, '0');

const setThemeColor = (hex) => {
	// remove prev meta
	const meta = document.querySelector('meta[name="theme-color"]');
	if (meta) {
		meta.content = hex;
	} else {
		// new meta
		const _meta = document.createElement('meta');
		_meta.name = 'theme-color';
		_meta.content = hex;
		document.head.appendChild(_meta);
	}
}

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
	setThemeColor(hex);

	requestAnimationFrame(set);
}

set();
