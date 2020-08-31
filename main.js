const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

/* Looping through images */

for (let i = 1; i <= 3; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'img/' + i + '.jpg');
    newImage.onclick = function (e) {
        displayedImage.src = e.target.src;
    }
    thumbBar.appendChild(newImage);
}

