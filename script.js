const allSongs = [
    { title: '3107', artist: 'W/n', src: './songs/3107.mp3', 
    lyrics: [{ time: "0:00", text: "........" },
        { time: "0:04", text: "Đêm dần buông" },
        { time: "0:07", text: "Chỉ có đôi ta đứng đây hơi buồn" },
        { time: "0:11", text: "Nhấm nháp những suy tư" },
        { time: "0:13", text: "Của ngày hôm qua" },
        { time: "0:15", text: "Vừa đây đã xa" },
        { time: "0:18", text: "Riêng mình ta" },
        { time: "0:22", text: "Vẫn mãi lang thang" },
        { time: "0:24", text: "Dưới ánh chiều tà" },
        { time: "0:27", text: "Vẫn nỗi nhớ miên man" },
        { time: "0:29", text: "Ký ức bên em" },
        { time: "0:30", text: "Bây giờ đang ở một nơi xa" },
        { time: "0:34", text: "Chỉ cần bên nhau như những ngày ấy" },
        { time: "0:38", text: "Anh sẽ cùng em đi hết tháng ngày" },
        { time: "0:42", text: "Để trong cơn mơ anh chẳng tìm thấy" },
        { time: "0:46", text: "Để anh bơ vơ mãi phút nơi đây" },
        { time: "0:29", text: "Tình yêu khi xưa đôi ta vụn vỡ" },
        { time: "0:53", text: "Trong một chiều mưa hai đứa chia tay" },]
        },
    { title: '3107-2', artist: 'W/n', src: './songs/3107-2.mp3', lyrics: [{ time: "0:00", text: "........" },
        { time: "0:04", text: "Đêm dần buông" },
        { time: "0:07", text: "Chỉ có đôi ta đứng đây hơi buồn" },
        { time: "0:11", text: "Nhấm nháp những suy tư" },
        { time: "0:13", text: "Của ngày hôm qua" },
        { time: "0:15", text: "Vừa đây đã xa" },
        { time: "0:18", text: "Riêng mình ta" },
        { time: "0:22", text: "Vẫn mãi lang thang" },
        { time: "0:24", text: "Dưới ánh chiều tà" },
        { time: "0:27", text: "Vẫn nỗi nhớ miên man" },
        { time: "0:29", text: "Ký ức bên em" },
        { time: "0:30", text: "Bây giờ đang ở một nơi xa" },
        { time: "0:34", text: "Chỉ cần bên nhau như những ngày ấy" },
        { time: "0:38", text: "Anh sẽ cùng em đi hết tháng ngày" },
        { time: "0:42", text: "Để trong cơn mơ anh chẳng tìm thấy" },
        { time: "0:46", text: "Để anh bơ vơ mãi phút nơi đây" },
        { time: "0:29", text: "Tình yêu khi xưa đôi ta vụn vỡ" },
        { time: "0:53", text: "Trong một chiều mưa hai đứa chia tay" },] },
    { title: '3107 id 072019', artist: 'W/n ft 267', src: './songs/3107ID.mp3', lyrics: [{ time: "0:00", text: "........" },
        { time: "0:04", text: "Đêm dần buông" },
        { time: "0:07", text: "Chỉ có đôi ta đứng đây hơi buồn" },
        { time: "0:11", text: "Nhấm nháp những suy tư" },
        { time: "0:13", text: "Của ngày hôm qua" },
        { time: "0:15", text: "Vừa đây đã xa" },
        { time: "0:18", text: "Riêng mình ta" },
        { time: "0:22", text: "Vẫn mãi lang thang" },
        { time: "0:24", text: "Dưới ánh chiều tà" },
        { time: "0:27", text: "Vẫn nỗi nhớ miên man" },
        { time: "0:29", text: "Ký ức bên em" },
        { time: "0:30", text: "Bây giờ đang ở một nơi xa" },
        { time: "0:34", text: "Chỉ cần bên nhau như những ngày ấy" },
        { time: "0:38", text: "Anh sẽ cùng em đi hết tháng ngày" },
        { time: "0:42", text: "Để trong cơn mơ anh chẳng tìm thấy" },
        { time: "0:46", text: "Để anh bơ vơ mãi phút nơi đây" },
        { time: "0:29", text: "Tình yêu khi xưa đôi ta vụn vỡ" },
        { time: "0:53", text: "Trong một chiều mưa hai đứa chia tay" },] },
    // ...
];

let songs = [...allSongs]; // Khởi tạo mảng songs ban đầu từ allSongs


const audioPlayer = document.getElementById("audio-player");
const playBtn = document.querySelector(".play-inner");
const nextBtn = document.querySelector(".play-forward");
const prevBtn = document.querySelector(".play-back");
const titleElement = document.querySelector(".title-text");
const rangeInput = document.getElementById("range");
const durationSpan = document.querySelector('.duration');
const remainingSpan = document.querySelector('.remaining');
const repeatButton = document.getElementById('repeat-plist');

let isplaying  = true;
let indexSong = 0;

function updateSong(){
    const currentSong = allSongs[indexSong];
    audioPlayer.src = currentSong.src;
    titleElement.textContent = currentSong.title;
    updateProgress();
}

nextBtn.addEventListener("click", nextSong);
prevBtn.addEventListener("click", prevSong);

function nextSong(){
    indexSong = (indexSong + 1) % allSongs.length;
    updateSong();
    audioPlayer.play();
}

function prevSong() {
    indexSong = (indexSong - 1 + allSongs.length) % allSongs.length;
    updateSong();
    audioPlayer.play();
}

function updateProgress() {
    const currentTime = audioPlayer.currentTime;
    const duration = audioPlayer.duration;

    rangeInput.value = (currentTime / duration) * 100;

    const remainingTime = duration - currentTime;

    const minutes = Math.floor(remainingTime / 60);
    const seconds = Math.floor(remainingTime % 60);

    remainingSpan.innerText = `-${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

rangeInput.addEventListener('input', () => {
    const newTime = (rangeInput.value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = newTime;
});
audioPlayer.addEventListener('ended', nextSong);

window.addEventListener("load", (event) => {
    const currentTime = audioPlayer.currentTime;
    const duration = audioPlayer.duration;

    const minutes = Math.floor(currentTime / 60);
    const seconds = Math.floor(currentTime % 60);

    durationSpan.innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    updateProgress();
  });
audioPlayer.addEventListener('timeupdate', () => {
    const currentTime = audioPlayer.currentTime;
    const duration = audioPlayer.duration; 

    const minutes = Math.floor(currentTime / 60);
    const seconds = Math.floor(currentTime % 60);

    durationSpan.innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    updateProgress();
});


playBtn.addEventListener("click", playPause);
function playPause(){
    if(isplaying){
        audioPlayer.play();
        playBtn.innerHTML=`<ion-icon name="pause-circle" ></ion-icon>`;
        isplaying= false;
    }else{
        audioPlayer.pause();
        playBtn.innerHTML=`<ion-icon name="play" ></ion-icon>`
        isplaying = true;
    }
}
updateSong();

repeatButton.addEventListener('click', () => {
    audioPlayer.loop = !audioPlayer.loop;
    repeatButton.classList.toggle('active', audioPlayer.loop);
});