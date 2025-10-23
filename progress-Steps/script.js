const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

let width = 0;
next.addEventListener('click', (e) => {
	currentActive++;
	let increaseProgress = 33;

	circles.forEach((btn) => {
		if (btn.textContent.includes(currentActive)) {
			addActiveClass(btn);
			width += increaseProgress;
			progress.style.width = width + '%';
			console.log(width);
			if (currentActive >= 2) {
				prev.disabled = false;
			}
			console.log(currentActive);
			if (btn.textContent == 4) {
				next.disabled = true;
			}
		}
		if (btn.textContent == 1) {
			addActiveClass(btn);
		}
	});
});

prev.addEventListener('click', (e) => {
	currentActive--;
	let decreaseProgress = 33;
	circles.forEach((btn) => {
		if (btn.textContent.includes(currentActive)) {
			removeActiveClass(btn);
			width -= decreaseProgress;
			progress.style.width = width + '%';
			if (currentActive == 1) {
				prev.disabled = true;
			}
			console.log(currentActive);
			if (btn.textContent < 4) {
				next.disabled = false;
			}
		}
		if (btn.textContent == 4) {
			removeActiveClass(btn);
		}
	});
});

function addActiveClass(elem) {
	elem.classList.add('active');
}
function removeActiveClass(elem) {
	elem.classList.remove('active');
}
