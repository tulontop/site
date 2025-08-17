const secret_password = "secretpassword67";

const audio = document.getElementById('background_music');
const splash_screen = document.getElementById('splash_screen');
const main_content = document.getElementById('main_content');
const j = "tul";
const password_input = document.getElementById('password_input');
const enter_btn = document.getElementById('enter_btn');
const main_image = document.querySelector('.main_image');

const images = [
    "images/catesp.gif",
    "images/dfxs.gif",
    "images/driverinsideumcheat.gif",
    "images/earsinthecaption.gif",
    "images/headshots.gif",
    "images/kx code.gif",
    "images/lilbaby.gif",
    "images/minion.gif",
    "images/nettspend-lazer.gif",
    "images/pastecheat.gif",
    "images/pastesuccess.gif",
    "images/skiddedbutundetected.gif",
    "images/skiddingleveltoday.gif",
    "images/spityoshittroy.gif",
    "images/thinkingcat.gif",
    "images/werealldetected.gif"
];

const songs = [
    "songs/City - Weiland.mp3",
    "songs/Juvenile - Weiland.mp3",
    "songs/Blue Bands - Weiland.mp3",
    "songs/Demons - Weiland.mp3",
];

function set_random_image() {
    const random_index = Math.floor(Math.random() * images.length);
    main_image.src = images[random_index];
}

function set_random_audio() {
    if (songs.length === 0) return;
    const random_index = Math.floor(Math.random() * songs.length);
    audio.src = songs[random_index];
    audio.play().catch(e => console.log('Audio play failed:', e));
}

function check_password() {
    const check_string = password_input.value;
    if (check_string === j) { 
        ban(); 
    } 
    else if (check_string === secret_password) {
        password_input.value = "";
        password_input.placeholder = "nice inspect element";
        password_input.style.borderColor = "red";
        setTimeout(() => {
            password_input.placeholder = "password";
            password_input.style.borderColor = "var(--inline)";
        }, 2000);
    } else {
        password_input.value = "";
        password_input.placeholder = "wrong password";
        password_input.style.borderColor = "red";
        setTimeout(() => {
            password_input.placeholder = "password";
            password_input.style.borderColor = "var(--inline)";
        }, 2000);
    }
}

function handle_key_press(event) {
    if (event.key === 'Enter') {
        check_password();
    }
}

function ban() {
    set_random_audio(); // play random song
    splash_screen.style.display = 'none';
    main_content.style.display = 'flex';
    set_random_image();
}

password_input.addEventListener('keypress', handle_key_press);
enter_btn.addEventListener('click', check_password);
