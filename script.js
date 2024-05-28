const green = '#017143';
const pink = '#E37383';
const rainbow = '#660066';
const black = '#000000';
const white = '#ffffff';
const greenCoffee = 'img/img1.png';
const pinkCoffee = 'img/img2.png';
const rainbowCoffe = 'img/img3.png';

const allCoffee = document.querySelectorAll('.coffee');

allCoffee.forEach((coffee, i) => {
    coffee.addEventListener('click', function () {
        const image = document.querySelector('.presentationCoffe');
        const infoSelected = document.querySelector('.background');
        if (i === 0) {
            image.src = greenCoffee;
            infoSelected.style.backgroundColor = green;

        } else if (i === 1) {
            image.src = pinkCoffee;
            infoSelected.style.backgroundColor = pink;

        } else {
            image.src = rainbowCoffe;
            infoSelected.style.backgroundColor = rainbow;

        }
    })
});

