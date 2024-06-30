function getParameterByName(name) {
    const url = new URL(window.location.href);
    return url.searchParams.get(name);
} // esto toma los datos en base al ID que se elige en la URL

const songId = getParameterByName('id'); // crea un ID en base al numero que se muestre en la misma URL
//o toma el primero por defecto

if (songId && canciones[songId]) {
    const song = canciones[songId];
    document.getElementById('letra-cancion').textContent = song.letra;
    document.getElementById('titulo-cancion').textContent = song.titulo;
    document.getElementById('artista-cancion').textContent = song.artista;
    document.getElementById('year-cancion').textContent = song.year;
    document.getElementById('album-cancion').textContent = song.album;
    document.getElementById('youtube-video').src = song.youtube;

} else {
    document.getElementById('letra-cancion').textContent = "error";
    document.getElementById('titulo-cancion').textContent = "error";
    document.getElementById('artista-cancion').textContent = "error";
    document.getElementById('year-cancion').textContent = "error";
    document.getElementById('album-cancion').textContent = "error";
    document.getElementById('youtube-link').textContent = "Video no disponible";
}