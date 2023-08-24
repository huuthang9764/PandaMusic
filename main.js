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
// Lấy các phần tử cần thiết từ DOM
const audioPlayer = document.getElementById('audio-player');
const playButton = document.querySelector('.play-inner');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const lyricsText = document.getElementById('lyrics-text');
const titleElement = document.querySelector('.title-text');
const rangeInput = document.getElementById('range');
const durationSpan = document.querySelector('.duration');
const remainingSpan = document.querySelector('.remaining');
const repeatButton = document.getElementById('repeat-plist');

// Khởi tạo các biến
let currentSongIndex = 0;
let isPlaying = false;

// Cập nhật thông tin bài hát hiện tại
function updateSongInfo() {
    const currentSong = allSongs[currentSongIndex];
    audioPlayer.src = currentSong.src;
    lyricsText.innerText = currentSong.lyrics.map(line => line.text).join('\n');
    titleElement.textContent = currentSong.title;
}

// Play hoặc pause nhạc
function togglePlay() {
    if (isPlaying) {
        audioPlayer.pause();
    } else {
        audioPlayer.play();
    }
    
    isPlaying = !isPlaying;
    updatePlayButtonIcon();
}

// Chuyển bài hát tiếp theo
function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % allSongs.length;
    updateSongInfo();
    audioPlayer.play();
}

// Quay lại bài hát trước
function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + allSongs.length) % allSongs.length;
    updateSongInfo();
    audioPlayer.play();
}

// Cập nhật thời gian nhạc và hiển thị
function updateProgress() {
    const currentTime = audioPlayer.currentTime;
    const duration = audioPlayer.duration;

    rangeInput.value = (currentTime / duration) * 100;

    const remainingTime = duration - currentTime;

    const minutes = Math.floor(remainingTime / 60);
    const seconds = Math.floor(remainingTime % 60);

    remainingSpan.innerText = `-${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}



// Sự kiện khi nhấn nút play/pause
playButton.addEventListener('click', () => {
    togglePlay();
});
function updatePlayButtonIcon() {
    const playIcon = playButton.querySelector('ion-icon[name="play"]');
    const pauseIcon = playButton.querySelector('ion-icon[name="pause"]');
    
    if (isPlaying) {
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'inline';
    } else {
        playIcon.style.display = 'inline';
        pauseIcon.style.display = 'none';
    }
}

// Sự kiện khi nhấn nút next
nextButton.addEventListener('click', nextSong);

// Sự kiện khi nhấn nút prev
prevButton.addEventListener('click', prevSong);

// Sự kiện khi nhấn vào thanh progress
rangeInput.addEventListener('input', () => {
    const newTime = (rangeInput.value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = newTime;
});

// Sự kiện khi bài hát kết thúc
audioPlayer.addEventListener('ended', nextSong);

// Cập nhật thời gian và progress của nhạc
audioPlayer.addEventListener('timeupdate', () => {
    const currentTime = audioPlayer.currentTime;
    const duration = audioPlayer.duration;

    const minutes = Math.floor(currentTime / 60);
    const seconds = Math.floor(currentTime % 60);

    durationSpan.innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    updateProgress();
});

// Khởi tạo bài hát đầu tiên
updateSongInfo();

// Sự kiện khi nhấn nút repeat
repeatButton.addEventListener('click', () => {
    audioPlayer.loop = !audioPlayer.loop;
    repeatButton.classList.toggle('active', audioPlayer.loop);
});
