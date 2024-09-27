
console.log("Welcome");

// Directly load the song "zaalima"
// let audioElement = new Audio(songs[4].filePath);
progressBar = document.getElementById('progressBar');
masterPlay = document.getElementById('masterPlay');
next = document.getElementById('next');
back = document.getElementById('back');
gif = document.getElementById('gif');
gif1 = document.getElementById('gif1');
click = document.getElementById("clickToPlay");

let hasClicked = false;


let songs = [
    { songName: "Tum Hi Ho", filePath: "songs/tumhiho.mp3", coverPath: "images/tumhiho.jpg" },
    { songName: "Soch  na sake", filePath: "songs/sochnasake.mp3", coverPath: "images/sochnasake.jpg" },
    { songName: "Zaalima", filePath: "songs/zaalima.mp3", coverPath: "images/zaalima.jpg" },
    { songName: "Janam janam", filePath: "songs/janamjanam.mp3", coverPath: "images/janamjanam.jpg" },
    { songName: "Kabira", filePath: "songs/kabira.mp3", coverPath: "images/kabira.jpg" },
    { songName: "Khairiyat", filePath: "songs/khairiyat.mp3", coverPath: "images/khairiyat.jpg" },
    { songName: "Channa mereya", filePath: "songs/channamereya.mp3", coverPath: "images/channamereya.jpg" }

]
songIndex = '0';
let audioElement = new Audio(songs[songIndex].filePath);
let songItems = Array.from(document.getElementsByClassName('songItem'));
// let audioElement = new Audio(songs[0].filePath);


// Event listener for the master play button
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.innerHTML = `<svg width="50px" height="50px" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="#fffafa" stroke-width="1.5"/>
        <path d="M8 9.5C8 9.03406 8 8.80109 8.07612 8.61732C8.17761 8.37229 8.37229 8.17761 8.61732 8.07612C8.80109 8 9.03406 8 9.5 8C9.96594 8 10.1989 8 10.3827 8.07612C10.6277 8.17761 10.8224 8.37229 10.9239 8.61732C11 8.80109 11 9.03406 11 9.5V14.5C11 14.9659 11 15.1989 10.9239 15.3827C10.8224 15.6277 10.6277 15.8224 10.3827 15.9239C10.1989 16 9.96594 16 9.5 16C9.03406 16 8.80109 16 8.61732 15.9239C8.37229 15.8224 8.17761 15.6277 8.07612 15.3827C8 15.1989 8 14.9659 8 14.5V9.5Z" stroke="#fffafa" stroke-width="1.5"/>
        <path d="M13 9.5C13 9.03406 13 8.80109 13.0761 8.61732C13.1776 8.37229 13.3723 8.17761 13.6173 8.07612C13.8011 8 14.0341 8 14.5 8C14.9659 8 15.1989 8 15.3827 8.07612C15.6277 8.17761 15.8224 8.37229 15.9239 8.61732C16 8.80109 16 9.03406 16 9.5V14.5C16 14.9659 16 15.1989 15.9239 15.3827C15.8224 15.6277 15.6277 15.8224 15.3827 15.9239C15.1989 16 14.9659 16 14.5 16C14.0341 16 13.8011 16 13.6173 15.9239C13.3723 15.8224 13.1776 15.6277 13.0761 15.3827C13 15.1989 13 14.9659 13 14.5V9.5Z" stroke="#fffafa" stroke-width="1.5"/>
        </svg>`;
        gif.style.opacity = 1;
        gif1.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.innerHTML = ` <svg id="masterPlay" width="50px" height="50px" viewBox="0 0 50 50" fill="white"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#1C274C" stroke-width="1.5" />
                <path
                    d="M15.4137 10.941C16.1954 11.4026 16.1954 12.5974 15.4137 13.059L10.6935 15.8458C9.93371 16.2944 9 15.7105 9 14.7868L9 9.21316C9 8.28947 9.93371 7.70561 10.6935 8.15419L15.4137 10.941Z"
                    stroke="#1C274C" stroke-width="1.5" />
            </svg>`;
        gif.style.opacity = 0;
        gif1.style.opacity = 0;
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


next.addEventListener('click', () => {
    songIndex = (songIndex + 1) % songs.length;
    audioElement.src = songs[songIndex].filePath;
    audioElement.play();

    nav.innerText = songs[songIndex].songName;
    // songCover.src = songs[songIndex].coverPath;

    masterPlay.innerHTML = `<svg width="50px" height="50px" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="#fffafa" stroke-width="1.5"/>
        <path d="M8 9.5C8 9.03406 8 8.80109 8.07612 8.61732C8.17761 8.37229 8.37229 8.17761 8.61732 8.07612C8.80109 8 9.03406 8 9.5 8C9.96594 8 10.1989 8 10.3827 8.07612C10.6277 8.17761 10.8224 8.37229 10.9239 8.61732C11 8.80109 11 9.03406 11 9.5V14.5C11 14.9659 11 15.1989 10.9239 15.3827C10.8224 15.6277 10.6277 15.8224 10.3827 15.9239C10.1989 16 9.96594 16 9.5 16C9.03406 16 8.80109 16 8.61732 15.9239C8.37229 15.8224 8.17761 15.6277 8.07612 15.3827C8 15.1989 8 14.9659 8 14.5V9.5Z" stroke="#fffafa" stroke-width="1.5"/>
        <path d="M13 9.5C13 9.03406 13 8.80109 13.0761 8.61732C13.1776 8.37229 13.3723 8.17761 13.6173 8.07612C13.8011 8 14.0341 8 14.5 8C14.9659 8 15.1989 8 15.3827 8.07612C15.6277 8.17761 15.8224 8.37229 15.9239 8.61732C16 8.80109 16 9.03406 16 9.5V14.5C16 14.9659 16 15.1989 15.9239 15.3827C15.8224 15.6277 15.6277 15.8224 15.3827 15.9239C15.1989 16 14.9659 16 14.5 16C14.0341 16 13.8011 16 13.6173 15.9239C13.3723 15.8224 13.1776 15.6277 13.0761 15.3827C13 15.1989 13 14.9659 13 14.5V9.5Z" stroke="#fffafa" stroke-width="1.5"/>
        </svg>`;
    gif.style.opacity = 1;
    gif1.style.opacity = 1;
});

back.addEventListener('click', () => {
    songIndex = (songIndex - 1) % songs.length;
    audioElement.src = songs[songIndex].filePath;
    audioElement.play();

    nav.innerText = songs[songIndex].songName;
    // songCover.src = songs[songIndex].coverPath;

    masterPlay.innerHTML = `<svg width="50px" height="50px" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="#fffafa" stroke-width="1.5"/>
        <path d="M8 9.5C8 9.03406 8 8.80109 8.07612 8.61732C8.17761 8.37229 8.37229 8.17761 8.61732 8.07612C8.80109 8 9.03406 8 9.5 8C9.96594 8 10.1989 8 10.3827 8.07612C10.6277 8.17761 10.8224 8.37229 10.9239 8.61732C11 8.80109 11 9.03406 11 9.5V14.5C11 14.9659 11 15.1989 10.9239 15.3827C10.8224 15.6277 10.6277 15.8224 10.3827 15.9239C10.1989 16 9.96594 16 9.5 16C9.03406 16 8.80109 16 8.61732 15.9239C8.37229 15.8224 8.17761 15.6277 8.07612 15.3827C8 15.1989 8 14.9659 8 14.5V9.5Z" stroke="#fffafa" stroke-width="1.5"/>
        <path d="M13 9.5C13 9.03406 13 8.80109 13.0761 8.61732C13.1776 8.37229 13.3723 8.17761 13.6173 8.07612C13.8011 8 14.0341 8 14.5 8C14.9659 8 15.1989 8 15.3827 8.07612C15.6277 8.17761 15.8224 8.37229 15.9239 8.61732C16 8.80109 16 9.03406 16 9.5V14.5C16 14.9659 16 15.1989 15.9239 15.3827C15.8224 15.6277 15.6277 15.8224 15.3827 15.9239C15.1989 16 14.9659 16 14.5 16C14.0341 16 13.8011 16 13.6173 15.9239C13.3723 15.8224 13.1776 15.6277 13.0761 15.3827C13 15.1989 13 14.9659 13 14.5V9.5Z" stroke="#fffafa" stroke-width="1.5"/>
        </svg>`;
    gif.style.opacity = 1;
    gif1.style.opacity = 1;
});

// Event listener for updating progress bar as the song plays
audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    progressBar.value = progress;
});

// Event listener to allow seeking through the progress bar
progressBar.addEventListener('change', () => {
    audioElement.currentTime = ((progressBar.value * audioElement.duration) / 100);
});

// Reset play button when song ends
audioElement.addEventListener('ended', () => {
    masterPlay.innerHTML =
        songIndex = (songIndex + 1) % songs.length;
    audioElement.src = songs[songIndex].filePath;
    audioElement.play();
    nav.innerText = songs[songIndex].songName;

    masterPlay.innerHTML = `<svg width="50px" height="50px" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="#fffafa" stroke-width="1.5"/>
    <path d="M8 9.5C8 9.03406 8 8.80109 8.07612 8.61732C8.17761 8.37229 8.37229 8.17761 8.61732 8.07612C8.80109 8 9.03406 8 9.5 8C9.96594 8 10.1989 8 10.3827 8.07612C10.6277 8.17761 10.8224 8.37229 10.9239 8.61732C11 8.80109 11 9.03406 11 9.5V14.5C11 14.9659 11 15.1989 10.9239 15.3827C10.8224 15.6277 10.6277 15.8224 10.3827 15.9239C10.1989 16 9.96594 16 9.5 16C9.03406 16 8.80109 16 8.61732 15.9239C8.37229 15.8224 8.17761 15.6277 8.07612 15.3827C8 15.1989 8 14.9659 8 14.5V9.5Z" stroke="#fffafa" stroke-width="1.5"/>
    <path d="M13 9.5C13 9.03406 13 8.80109 13.0761 8.61732C13.1776 8.37229 13.3723 8.17761 13.6173 8.07612C13.8011 8 14.0341 8 14.5 8C14.9659 8 15.1989 8 15.3827 8.07612C15.6277 8.17761 15.8224 8.37229 15.9239 8.61732C16 8.80109 16 9.03406 16 9.5V14.5C16 14.9659 16 15.1989 15.9239 15.3827C15.8224 15.6277 15.6277 15.8224 15.3827 15.9239C15.1989 16 14.9659 16 14.5 16C14.0341 16 13.8011 16 13.6173 15.9239C13.3723 15.8224 13.1776 15.6277 13.0761 15.3827C13 15.1989 13 14.9659 13 14.5V9.5Z" stroke="#fffafa" stroke-width="1.5"/>
    </svg>`;

    gif.style.opacity = 1;
    gif1.style.opacity = 1;
});
