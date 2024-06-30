function getParameterByName(name) {
    const url = new URL(window.location.href);
    return url.searchParams.get(name);
}

// DATOS ALBUMES

const albumId = getParameterByName('id'); // toma el parámetro 'id' de la URL

if (albumId && listacanciones[albumId]) {
    const album = listacanciones[albumId];
    const tracklistElement = document.querySelector('.tracklist');
    const albumInfoElement = document.querySelector('.album-info');
    const albumCoverElement = document.querySelector('.album-cover');

    // Cargar información del álbum en el header
    albumCoverElement.src = album.info.cover;
    albumInfoElement.innerHTML = `
        <p>Album</p>
        <h2>${album.info.title}</h2>
        <p>${album.info.artist}</p>
        <p>Lanzado el ${album.info.release_date}</p>
        <p>${album.info.description}</p>
    `;

    // Crear elementos para cada canción del álbum
    album.songs.forEach(cancion => {
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

