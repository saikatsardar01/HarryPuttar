const images = [
    'url("./Assect/33731-1920x1080-desktop-1080p-harry-potter-background-image.jpg")',
    'url("./Assect/133366-2000x1191-desktop-hd-harry-potter-wallpaper.jpg")',
    'url("./Assect/248165-1920x1080-desktop-1080p-hogwarts-background.jpg")',
    'url("./Assect/248173-1920x1081-desktop-hd-hogwarts-background-image.jpg")',
    'url("./Assect/248169-1920x1080-desktop-full-hd-hogwarts-wallpaper-photo.jpg")',
    'url("./Assect/248234-3840x2160-desktop-4k-hogwarts-background.jpg")'
];

let currentIndex = 0;
const changeBackground = () => {
    const container = document.querySelector('body');
    container.style.backgroundImage = images[currentIndex];
    container.style.transition = 'background-image 2s ease-in-out';
    currentIndex = (currentIndex + 1) % images.length;
};

// Change background image every 10 seconds (10000 milliseconds)
setInterval(changeBackground, 15000);
// Initial call to set the first background image
changeBackground();