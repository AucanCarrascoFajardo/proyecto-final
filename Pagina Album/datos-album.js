if (albumId && datos[albumId]) {
    const data = datos[albumId];
    document.getElementById('titulo-album').textContent = data.albumname;
    document.getElementById('artista-nombre').textContent = data.artista;
    document.getElementById('fecha').textContent = data.fecha;
} else {
    document.getElementById('titulo-album').textContent = "error";
    document.getElementById('artista-nombre').textContent = "error";
    document.getElementById('fecha').textContent = "error";
}