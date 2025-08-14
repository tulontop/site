const secret_password = "secretpassword67";

const audio = document.getElementById('background_music');
const splash_screen = document.getElementById('splash_screen');
const main_content = document.getElementById('main_content');
const j = "tul";
const password_input = document.getElementById('password_input');
const enter_btn = document.getElementById('enter_btn');
const main_image = document.querySelector('.main_image');

const images = [
    "https://media.discordapp.net/attachments/1241192056882200690/1365761357747716230/catesp.gif?ex=689ed822&is=689d86a2&hm=8b32018b8a44bd53523df62bf4f75b84649531a6b54dad56a381b30d984394c7&=",
    "https://media.discordapp.net/attachments/1328679030895018062/1337150733224775762/attachment.gif?ex=689ee8e9&is=689d9769&hm=d47540de7488a69e9fdc8a20d5ffbeaec3a04c36192920430d7e47770a26dbfd&=",
    "https://media.discordapp.net/attachments/1266506435605303329/1286657770921136188/togif-11.gif?ex=689f20ed&is=689dcf6d&hm=3c5a492e49a28082838521e3bbb9ca08ee42effe9284e1d39d1ac6c477b38ea0&=",
    "https://media.discordapp.net/attachments/1255580492691013782/1282063634037739622/togif-24.gif?ex=689ee50d&is=689d938d&hm=9aa15682842c4c000f24fe67b7fa4754e9f46de00aa3d024e585ad072166ce6e&=",
    "https://media.discordapp.net/attachments/1321073674735976460/1332010915511664742/togif.gif?ex=689f53d5&is=689e0255&hm=571feab05be5d2a0362414d8519766c3287a77b2e770b54321a7eab2fd3098f6&=",
    "https://media.discordapp.net/attachments/989942468348878888/1223642129931304960/caption.gif?ex=689f4609&is=689df489&hm=f27f522d4ec650784ec955100531fed39de56370b76c41f7cdaf02b048fc2791&=",
    "https://media.discordapp.net/attachments/1161930469802246218/1304285505734574130/togif.gif?ex=689f5149&is=689dffc9&hm=66f4f38920721dbda5078711152f3d01ee2ee67e7f30e4b35e6e3f57863b3eb3&=",
    "https://media.discordapp.net/attachments/1276146129372844173/1296985919181815918/ezgif-7-5875e47d1e.gif?ex=689f2103&is=689dcf83&hm=d15261f4b5606708f030ea710ade11a0d586bb25ba5bee525bb9bc16c16f713e&=",
    "https://media.discordapp.net/attachments/1281987587497656340/1352944127775346770/caption.gif?ex=689f0468&is=689db2e8&hm=fbe6e7bac470fe043c0ea52cf89fa7f21d01e3735b35bc0baa975ca6186cff7c&=",
    "https://media.discordapp.net/attachments/1175146419607322626/1188619673789538344/caption.gif?ex=689f1595&is=689dc415&hm=18ad79e3b48b3e4863c168a0a18231239b7eb8cd32afcd78cffd012856073bcb&=",
    "https://media.discordapp.net/attachments/1338601566944362629/1352037363055988878/Headshots_Gif.gif?ex=689f03aa&is=689db22a&hm=973e80d7a5a8f6a838a8707481864298eb3b4428d35ea907febd391c23321d6e&=",
    "https://media.discordapp.net/attachments/1006912549423427675/1087068525451038792/spit-it-troy-v0-bhsb7jrb1a7a1.gif?ex=689ec8b5&is=689d7735&hm=a6e4e4d06475ea99826adb248cd13bfb5561ac9f3a1dd06dc320cebd3ee22a8a&=",
    "https://media.discordapp.net/attachments/1232384444674085015/1250579004184985600/lol.gif?ex=689f0d35&is=689dbbb5&hm=b18a66b9bbc8158e7c041ac20233d17c1e8661e52bd38aadf09447b71d2adfda&=",
    "https://media.discordapp.net/attachments/1353066261441155102/1402665431801794601/heist.gif?ex=689f497b&is=689df7fb&hm=3de42d076e8155272083da5cf566973a1c5bbbe1c502f1d76dd7b64cf3bd0c5e&=",
    "https://media.discordapp.net/attachments/1396254033152315513/1399473039426588762/togif.gif?ex=689ee115&is=689d8f95&hm=3f21e425bbae74aa632610dfa916237c52d30f8ff4b3d3ab990663f4e32a1cf2&=",
];

function set_random_image() {
    const random_index = Math.floor(Math.random() * images.length);
    main_image.src = images[random_index];
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
    audio.play().catch(e => {
        console.log('Audio play failed:', e);
    });

    splash_screen.style.display = 'none';
    main_content.style.display = 'flex';

    set_random_image();
}

password_input.addEventListener('keypress', handle_key_press);
enter_btn.addEventListener('click', check_password);