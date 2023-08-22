const allSongs = [
    { title: '3107', artist: 'Artist 1', src: './songs/3107.mp3', lyrics: 'Lyrics for Song 1...' },
    { title: '3107-2', artist: 'Artist 2', src: './songs/3107-2.mp3', lyrics: 'Lyrics for Song 2...' },
    { title: '3107 id 072019', artist: 'Artist 3', src: './songs/3107ID.mp3', lyrics: 'Lyrics for Song 3...' },
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
