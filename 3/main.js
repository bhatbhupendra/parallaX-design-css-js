const parallax_1 = document.getElementById('parallax_1');
const parallax_3 = document.getElementById('parallax_3');

window.addEventListener("scroll", function() {
	let offset = window.pageYOffset;
    parallax_1.style.backgroundPositionY = offset * 0.7 + "px";
    parallax_3.style.backgroundPositionY = (offset - parallax_3.offsetTop) * 0.7 + "px";;
})