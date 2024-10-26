const images = [
    'url("./Assect/133366-2000x1191-desktop-hd-harry-potter-wallpaper.jpg")',
    'url("./Assect/33731-1920x1080-desktop-1080p-harry-potter-background-image.jpg")',
    // 'url("image3.jpg")',
    // 'url("image4.jpg")'
];

let currentIndex = 0;
const changeBackground = () => {
    const container = document.querySelector('body');
    container.style.backgroundImage = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
};

// Change background image every 10 seconds (10000 milliseconds)
setInterval(changeBackground, 10000);
// Initial call to set the first background image
changeBackground();