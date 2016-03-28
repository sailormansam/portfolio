function step(dt) {
	var background1 = document.getElementById('hero-background-1');
	var background2 = document.getElementById('hero-background-2');
	var background3 = document.getElementById('hero-background-3');
	var background4 = document.getElementById('hero-background-4');
	var background5 = document.getElementById('hero-background-5');
	var background6 = document.getElementById('hero-background-6');

	if(background1)
		background1.style.transform = 'translateY(' + window.scrollY * 0 + 'px)';

	if(background2)
		background2.style.transform = 'translateY(' + window.scrollY * -0 + 'px)';

	if(background3)
		background3.style.transform = 'translateY(' + window.scrollY * -0.1 + 'px)';

	if(background4)
		background4.style.transform = 'translateY(' + window.scrollY * -0.2 + 'px)';

	if(background5)
		background5.style.transform = 'translateY(' + window.scrollY * -0.3 + 'px)';

	if(background6)
		background6.style.transform = 'translateY(' + window.scrollY * -0.4 + 'px)';

	window.requestAnimationFrame(step);
}

window.requestAnimationFrame(step);