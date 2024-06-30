function getParameterByName(name) {
    const url = new URL(window.location.href);
    return url.searchParams.get(name);
}

// DATOS ALBUMES

const albumId = getParameterByName('id'); // toma el parámetro 'id' de la URL

if (albumId && listacanciones[albumId]) {
    const album = listacanciones[albumId];
    const tracklistElement = document.querySelector('.tracklist');

    // Crear elementos para cada canción del álbum
    album.forEach(cancion => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = cancion.titulo;
        a.href = cancion.link;
        li.appendChild(a);
        tracklistElement.appendChild(li);
        
    });
} else {
    const albumInfo = document.querySelector('.album-info');
    albumInfo.innerHTML = '<p>Error: Álbum no encontrado.</p>';
}

// PORTADAS CANCIONES

