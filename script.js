const password_required = false;
const secret_password = "secretpassword67";

const recaptcha_site_key = "6LcnvW4sAAAAABbWVUZjJoZDIBMoB6N8AmQeb9bw";
const audio = document.getElementById('background_music');
const captcha_screen = document.getElementById('captcha_screen');
const splash_screen = document.getElementById('splash_screen');
const main_content = document.getElementById('main_content');
const j = "tul";
const password_input = document.getElementById('password_input');
const enter_btn = document.getElementById('enter_btn');
const main_image = document.querySelector('.main_image');

splash_screen.style.display = 'none';
main_content.style.display = 'none';

function on_recaptcha_success(token) {
    captcha_screen.style.display = 'none';
    if (password_required) {
        splash_screen.style.display = 'block';
    } else {
        unlock();
    }
}

function render_recaptcha() {
    if (typeof grecaptcha === 'undefined') {
        setTimeout(render_recaptcha, 50);
        return;
    }
    grecaptcha.ready(function () {
        grecaptcha.render('recaptcha_widget', {
            sitekey: recaptcha_site_key,
            callback: on_recaptcha_success
        });
    });
}
render_recaptcha();

const images = [
    "images/catesp.gif",
    "images/dfxs.gif",
    "images/driverinsideumcheat.gif",
    "images/earsinthecaption.gif",
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
    "images/werealldetected.gif",
    "images/glazetul.gif",
    "images/memorysense_esp.gif",
    "images/nasa_saturn.gif",
    "images/tuffasfuck.gif",
    "images/che_vid.gif",
    "images/che.gif"
];

const songs = [
    "songs/City - Weiland.mp3",
    "songs/Juvenile - Weiland.mp3",
    "songs/Blue Bands - Weiland.mp3",
    "songs/Demons - Weiland.mp3",
    "songs/[Cold] Offwhite - Uzi.mp3"
];

function set_random_image() {
    const random_idx = Math.floor(Math.random() * images.length);
    main_image.src = images[random_idx];
}

function set_random_audio() {
    if (songs.length === 0) return;
    const random_idx = Math.floor(Math.random() * songs.length);
    audio.src = songs[random_idx];
    audio.volume = 0.3;
    audio.play().catch(e => console.log('Audio play failed:', e));
}


function check_password() {
    const input = password_input.value;
    if (input === j) { unlock();
    } else if (input === secret_password) {
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
    if (event.key === 'Enter') check_password();
}

function unlock() {
    set_random_audio();
    splash_screen.style.display = 'none';
    main_content.style.display = 'flex';
    set_random_image();
}

password_input.addEventListener('keypress', handle_key_press);
enter_btn.addEventListener('click', check_password);
