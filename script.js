const audio = document.getElementById('background_music');
const splash_screen = document.getElementById('splash_screen');
const main_content = document.getElementById('main_content');
const enter_btn = document.getElementById('enter_btn');
const main_image = document.querySelector('.main_image');

const repo_contents_api = "https://api.github.com/repos/tulontop/site/contents";
const image_exts = [".gif", ".png", ".jpg", ".jpeg", ".webp"];
const song_exts = [".mp3"];

function fetch_file_list(folder, exts) {
    return fetch(`${repo_contents_api}/${folder}`)
        .then(res => res.json())
        .then(list => Array.isArray(list)
            ? list.filter(f => f.type === "file" && exts.some(ext => f.name.toLowerCase().endsWith(ext))).map(f => f.download_url)
            : [])
        .catch(e => {
            console.log(`Failed to load ${folder} from GitHub:`, e);
            return [];
        });
}

const images_ready = fetch_file_list("images", image_exts);
const songs_ready = fetch_file_list("songs", song_exts);

function set_random_image(images) {
    if (images.length === 0) return;
    const random_idx = Math.floor(Math.random() * images.length);
    main_image.src = images[random_idx];
}

function set_random_audio(songs) {
    if (songs.length === 0) return;
    const random_idx = Math.floor(Math.random() * songs.length);
    audio.src = songs[random_idx];
    audio.volume = 0.3;
    audio.play().catch(e => console.log('Audio play failed:', e));
}

async function unlock() {
    const [images, songs] = await Promise.all([images_ready, songs_ready]);
    set_random_audio(songs);
    splash_screen.style.display = 'none';
    main_content.style.display = 'flex';
    set_random_image(images);
}

enter_btn.addEventListener('click', unlock);
