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

const audioPlayer = document.getElementById('audio-player');
const songTitle = document.getElementById('song-title');
const artistName = document.getElementById('artist-name');
const lyricsText = document.getElementById('lyrics-text');
const playlistItems = document.getElementById('playlist-items');

// Tạo danh sách bài hát từ dữ liệu songs
function createPlaylist() {
    playlistItems.innerHTML = ''; // Xóa bỏ các phần tử cũ

    songs.forEach((song, index) => {
        const li = document.createElement('li');
        li.textContent = song.title;
        li.className = 'list-group-item';
        li.addEventListener('click', () => playSong(index));
        playlistItems.appendChild(li);
    });
}

// Phát bài hát khi chọn từ danh sách
function playSong(index) {
    const song = songs[index];
    audioPlayer.src = song.src; // Cập nhật nguồn (source) của audio
    songTitle.textContent = song.title;
    artistName.textContent = song.artist;
    lyricsText.textContent = song.lyrics;
    audioPlayer.play();
}

// Tìm kiếm bài hát
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredSongs = allSongs.filter(song => song.title.toLowerCase().includes(searchTerm));
    
    updatePlaylist(filteredSongs);
});

// Cập nhật danh sách phát dựa trên kết quả tìm kiếm
function updatePlaylist(filteredSongs) {
    songs = [...filteredSongs]; // Cập nhật biến songs

    playlistItems.innerHTML = '';

    filteredSongs.forEach((song, index) => {
        const li = document.createElement('li');
        li.textContent = song.title;
        li.className = 'list-group-item';
        li.addEventListener('click', () => playSong(index));
        playlistItems.appendChild(li);
    });
}

// Khởi tạo danh sách bài hát ban đầu
createPlaylist();

let currentSongIndex = 0; // Chỉ số bài hát đang phát

// Lắng nghe sự kiện thay đổi thời gian phát nhạc để cập nhật lời bài hát thời gian thực
audioPlayer.addEventListener('timeupdate', () => {
    const currentTime = audioPlayer.currentTime;
    updateLyrics(currentTime);
});

// Cập nhật lời bài hát theo thời gian thực
function updateLyrics(currentTime) {
    const currentSong = allSongs[currentSongIndex];
    let currentLyrics = "";

    for (let i = 0; i < currentSong.lyrics.length; i++) {
        const sectionTime = getSecondsFromTimestamp(currentSong.lyrics[i].time);
        if (sectionTime <= currentTime) {
            currentLyrics = currentSong.lyrics[i].text;
        } else {
            break;
        }
    }

    lyricsText.textContent = currentLyrics;
}

// Chuyển đổi thời gian định dạng "0:00" sang giây
function getSecondsFromTimestamp(timestamp) {
    const [minutes, seconds] = timestamp.split(":");
    return parseInt(minutes) * 60 + parseInt(seconds);
}

// Khi phát bài hát, cập nhật chỉ số bài hát và lời bài hát
function playSong(index) {
    currentSongIndex = index;
    const song = allSongs[index];
    audioPlayer.src = song.src;
    lyricsText.textContent = ""; // Đặt lời bài hát về trạng thái rỗng
    audioPlayer.play();
}


// Lắng nghe sự kiện nhấn nút toggle
const toggleButton = document.getElementById('toggle-button');
toggleButton.addEventListener('click', togglePlaylistAndSearch);

// Hàm ẩn/hiện playlist và search
function togglePlaylistAndSearch() {
    const playlistAndSearch = document.querySelector('.playlist-and-search');

    if (playlistAndSearch.style.display === 'none') {
        playlistAndSearch.style.display = 'block';
        toggleButton.textContent = 'Hide Playlist and Search';
    } else {
        playlistAndSearch.style.display = 'none';
        toggleButton.textContent = 'Show Playlist and Search';
    }
}
