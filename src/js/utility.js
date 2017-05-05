function random(min, max) {
	if (max === null) { max = min; min = 0; }
	return Math.random() * (max - min) + min;
}