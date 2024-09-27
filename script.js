
console.log("Welcome");
progressBar = document.getElementById('progressBar');
masterPlay = document.getElementById('masterPlay');
next = document.getElementById('next');
back = document.getElementById('back');
gif = document.getElementById('gif');
gif1 = document.getElementById('gif1');
click = document.getElementById("clickToPlay");
play = document.getElementById("play");
loop = document.getElementById("loop");
volumeBar = document.getElementById("volumeBar");
let hasClicked = false;
let isLooping = true;

let songs = [
    { songName: "Mai hu saath tere", filePath: "songs/maihusaathtere.mp3", coverPath: "images/maihusaathtere.jpg" },
    { songName: "Soch  na sake", filePath: "songs/sochnasake.mp3", coverPath: "images/sochnasake.jpg" },
    { songName: "Zaalima", filePath: "songs/zaalima.mp3", coverPath: "images/zaalima.jpg" },
    { songName: "Tum Hi Ho", filePath: "songs/tumhiho.mp3", coverPath: "images/tumhiho.jpg" },
    { songName: "Kabira", filePath: "songs/kabira.mp3", coverPath: "images/kabira.jpg" },
    { songName: "Khairiyat", filePath: "songs/khairiyat.mp3", coverPath: "images/khairiyat.jpg" },
    { songName: "Channa mereya", filePath: "songs/channamereya.mp3", coverPath: "images/channamereya.jpg" }

]
songIndex = 0;
let audioElement = new Audio(songs[songIndex].filePath);
let songItems = Array.from(document.getElementsByClassName('songItem'));
function nextSong() {
    next.addEventListener('click', () => {
        songIndex = (songIndex + 1) % songs.length;
        audioElement.src = songs[songIndex].filePath;
        audioElement.play();
        nav.innerText = songs[songIndex].songName;
        // songCover.src = songs[songIndex].coverPath;
        gifs();
        pauseIcon();
        nav.style.opacity = 1;

    });
}
function backSong() {
    back.addEventListener('click', () => {
        songIndex = (songIndex - 1) % songs.length;
        audioElement.src = songs[songIndex].filePath;
        audioElement.play();
        nav.innerText = songs[songIndex].songName;
        // songCover.src = songs[songIndex].coverPath; 
        gifs();
        pauseIcon();
        nav.style.opacity = 1;
    });

}
function gifs() {
    gif.style.opacity = 1;
    gif1.style.opacity = 1;
};
function gifsoff() {
    gif.style.opacity = 0;
    gif1.style.opacity = 0;
};
function pauseIcon() {
    masterPlay.innerHTML = `<svg width="50px" height="50px" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="#fffafa" stroke-width="1.5"/>
        <path d="M8 9.5C8 9.03406 8 8.80109 8.07612 8.61732C8.17761 8.37229 8.37229 8.17761 8.61732 8.07612C8.80109 8 9.03406 8 9.5 8C9.96594 8 10.1989 8 10.3827 8.07612C10.6277 8.17761 10.8224 8.37229 10.9239 8.61732C11 8.80109 11 9.03406 11 9.5V14.5C11 14.9659 11 15.1989 10.9239 15.3827C10.8224 15.6277 10.6277 15.8224 10.3827 15.9239C10.1989 16 9.96594 16 9.5 16C9.03406 16 8.80109 16 8.61732 15.9239C8.37229 15.8224 8.17761 15.6277 8.07612 15.3827C8 15.1989 8 14.9659 8 14.5V9.5Z" stroke="#fffafa" stroke-width="1.5"/>
        <path d="M13 9.5C13 9.03406 13 8.80109 13.0761 8.61732C13.1776 8.37229 13.3723 8.17761 13.6173 8.07612C13.8011 8 14.0341 8 14.5 8C14.9659 8 15.1989 8 15.3827 8.07612C15.6277 8.17761 15.8224 8.37229 15.9239 8.61732C16 8.80109 16 9.03406 16 9.5V14.5C16 14.9659 16 15.1989 15.9239 15.3827C15.8224 15.6277 15.6277 15.8224 15.3827 15.9239C15.1989 16 14.9659 16 14.5 16C14.0341 16 13.8011 16 13.6173 15.9239C13.3723 15.8224 13.1776 15.6277 13.0761 15.3827C13 15.1989 13 14.9659 13 14.5V9.5Z" stroke="#fffafa" stroke-width="1.5"/>
        </svg>`;
}
function playIcon() {
    masterPlay.innerHTML = ` <svg id="masterPlay" width="50px" height="50px" viewBox="0 0 50 50" fill="white"
    xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="#1C274C" stroke-width="1.5" />
    <path
        d="M15.4137 10.941C16.1954 11.4026 16.1954 12.5974 15.4137 13.059L10.6935 15.8458C9.93371 16.2944 9 15.7105 9 14.7868L9 9.21316C9 8.28947 9.93371 7.70561 10.6935 8.15419L15.4137 10.941Z"
        stroke="#1C274C" stroke-width="1.5" />
</svg>`;


}
songItems.forEach((item, i) => {
    item.addEventListener('click', () => {
        // Get the index from the data attribute
        songIndex = i; // Update the song index to the clicked song        
        audioElement.src = songs[songIndex].filePath;
        nav.innerText = songs[songIndex].songName;
        nav.style.opacity = 1;
        audioElement.play();
        // play.innerHTML = `<svg width="50px" height="50px" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        // <circle cx="12" cy="12" r="10" stroke="#fffafa" stroke-width="1.5"/>
        // <path d="M8 9.5C8 9.03406 8 8.80109 8.07612 8.61732C8.17761 8.37229 8.37229 8.17761 8.61732 8.07612C8.80109 8 9.03406 8 9.5 8C9.96594 8 10.1989 8 10.3827 8.07612C10.6277 8.17761 10.8224 8.37229 10.9239 8.61732C11 8.80109 11 9.03406 11 9.5V14.5C11 14.9659 11 15.1989 10.9239 15.3827C10.8224 15.6277 10.6277 15.8224 10.3827 15.9239C10.1989 16 9.96594 16 9.5 16C9.03406 16 8.80109 16 8.61732 15.9239C8.37229 15.8224 8.17761 15.6277 8.07612 15.3827C8 15.1989 8 14.9659 8 14.5V9.5Z" stroke="#fffafa" stroke-width="1.5"/>
        // <path d="M13 9.5C13 9.03406 13 8.80109 13.0761 8.61732C13.1776 8.37229 13.3723 8.17761 13.6173 8.07612C13.8011 8 14.0341 8 14.5 8C14.9659 8 15.1989 8 15.3827 8.07612C15.6277 8.17761 15.8224 8.37229 15.9239 8.61732C16 8.80109 16 9.03406 16 9.5V14.5C16 14.9659 16 15.1989 15.9239 15.3827C15.8224 15.6277 15.6277 15.8224 15.3827 15.9239C15.1989 16 14.9659 16 14.5 16C14.0341 16 13.8011 16 13.6173 15.9239C13.3723 15.8224 13.1776 15.6277 13.0761 15.3827C13 15.1989 13 14.9659 13 14.5V9.5Z" stroke="#fffafa" stroke-width="1.5"/>
        // </svg>`;
        pauseIcon()
        gifs();
    });
});


// Event listener for the master play button
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        pauseIcon();
        gifs();

    } else {
        audioElement.pause();
        playIcon();
        gifsoff();
    }

    if (!hasClicked) {
        // Actions to perform on the first click
        // console.log("This is the first click!");
        nav.innerText = songs[0].songName;
        nav.style.opacity = 1;

        // Update the flag to true so this code won't run again
        hasClicked = true;
    }
});

nextSong();

backSong();
// Event listener for updating progress bar as the song plays
audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    progressBar.value = progress;
});

// Event listener to allow seeking through the progress bar
progressBar.addEventListener('change', () => {
    audioElement.currentTime = ((progressBar.value * audioElement.duration) / 100);
});
audioElement.addEventListener('ended', () => {
    songIndex = (songIndex + 1) % songs.length;
    audioElement.src = songs[songIndex].filePath;
    audioElement.play();
    nav.innerText = songs[songIndex].songName;

    pauseIcon();
    gifs();

})

loop.addEventListener('click', () => {


    if (isLooping) {
        loop.innerHTML = `<svg id="loop" fill="#fafafa" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="600px" height="600px" viewBox="0 0 487.63 487.63" xml:space="preserve" stroke="#fafafa" stroke-width="40.240293"><g id="SVGRepo_bgCarrier" stroke-width="300"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="6.826862"> <g> <path d="M474.381,119.249h-219.49l45.895-26.492c6.34-3.656,8.51-11.76,4.852-18.101c-3.656-6.338-11.764-8.518-18.102-4.85 l-88.719,51.213c-4.099,2.365-6.625,6.738-6.625,11.475c0,4.733,2.526,9.107,6.625,11.476l88.719,51.225 c2.088,1.206,4.363,1.779,6.613,1.779c4.58,0,9.035-2.378,11.486-6.629c3.658-6.338,1.488-14.442-4.85-18.101L254.9,145.752h206.23 v247.354H26.502V145.751h96.729c7.317,0,13.251-5.933,13.251-13.251s-5.934-13.251-13.251-13.251H13.251 C5.933,119.249,0,125.182,0,132.5v273.856c0,7.318,5.933,13.252,13.251,13.252h461.132c7.316,0,13.25-5.934,13.25-13.252V132.5 C487.633,125.182,481.699,119.249,474.381,119.249z"></path> </g> </g><g id="SVGRepo_iconCarrier"> <g> <path d="M474.381,119.249h-219.49l45.895-26.492c6.34-3.656,8.51-11.76,4.852-18.101c-3.656-6.338-11.764-8.518-18.102-4.85 l-88.719,51.213c-4.099,2.365-6.625,6.738-6.625,11.475c0,4.733,2.526,9.107,6.625,11.476l88.719,51.225 c2.088,1.206,4.363,1.779,6.613,1.779c4.58,0,9.035-2.378,11.486-6.629c3.658-6.338,1.488-14.442-4.85-18.101L254.9,145.752h206.23 v247.354H26.502V145.751h96.729c7.317,0,13.251-5.933,13.251-13.251s-5.934-13.251-13.251-13.251H13.251 C5.933,119.249,0,125.182,0,132.5v273.856c0,7.318,5.933,13.252,13.251,13.252h461.132c7.316,0,13.25-5.934,13.25-13.252V132.5 C487.633,125.182,481.699,119.249,474.381,119.249z"></path> </g> </g></svg>`
        console.log("hello")
        isLooping = false;
        songIndex = songIndex - 1;
    }
    else if (!isLooping) {
        loop.innerHTML = `<svg fill="#ffffff" height="600px" width="600px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 587.163 587.163" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M539.655,340.297c-14.929-14.925-39.125-14.925-54.054,0c-14.925,14.927-14.925,39.127,0,54.054l8.726,8.726h-50.745 c-36.955,0-63.735-35.973-100.758-96.033c37.689-61.308,64.665-98.122,102.044-98.122h49.458l-8.724,8.724 c-14.925,14.927-14.925,39.127,0.002,54.052c7.463,7.463,17.241,11.193,27.025,11.193c9.781,0,19.566-3.732,27.027-11.195 l52.083-52.086c13.067-13.063,20.262-30.432,20.262-48.909c0-18.475-7.192-35.842-20.257-48.912l-52.087-52.084 c-14.927-14.925-39.129-14.924-54.054,0.002c-14.925,14.927-14.925,39.127,0.002,54.052l8.726,8.726h-49.461 c-39.772,0-74.956,16.767-107.561,51.26c-14.434,15.27-27.468,33.099-39.785,51.797c-11.546-16.5-23.92-32.238-37.724-46.286 c-37.55-38.202-78.693-56.771-125.78-56.771H38.22C17.112,132.483,0,149.595,0,170.703s17.112,38.22,38.22,38.22h95.797 c48.538,0,80.845,37.948,118.974,98.08c-37.573,58.957-69.702,96.072-117.694,96.072H39.498c-21.108,0-38.222,17.111-38.222,38.22 s17.112,38.22,38.222,38.22h95.797c47.087,0,88.232-18.57,125.782-56.771c13.282-13.511,25.238-28.584,36.408-44.398 c11.947,18.011,24.59,35.154,38.537,49.909c32.604,34.493,67.787,51.26,107.559,51.26h50.746l-8.728,8.729 c-14.925,14.925-14.925,39.125,0.002,54.051c7.463,7.463,17.241,11.193,27.025,11.193c9.78,0,19.566-3.732,27.027-11.195 l52.087-52.089c26.964-26.966,26.966-70.844,0-97.818L539.655,340.297z"></path> </g> </g></svg>`
        isLooping = true;
    }
})

volumeBar.addEventListener('change', () => {
    audioElement.volume = volumeBar.value;
    console.log(volumeBar.value);
})
volumeBar.addEventListener('input', function () {
    const value = (volumeBar.value - volumeBar.min) / (volumeBar.max - volumeBar.min) * 100;
    volumeBar.style.background = `linear-gradient(to right, #ca0d9b ${value}%, #fff ${value}%)`;
});