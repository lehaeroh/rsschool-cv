const modal = document.getElementById('myMod');
const origImg = document.getElementById('cerImg');
const modalImg = document.getElementById('certImg');
const captionText = document.getElementById('caption');

origImg.onclick = function () {
 modal.style.display = "block";
 modalImg.src = this.src;
 captionText.innerHTML = this.alt;
}

const span = document.getElementsByClassName('close')[0];
span.onclick = function () {
 modal.style.display = 'none';
}