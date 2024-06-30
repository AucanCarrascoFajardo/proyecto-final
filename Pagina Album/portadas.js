function getParameterByName(name) {
    const url = new URL(window.location.href);
    return url.searchParams.get(name);
}

function fetchAlbumCover(mbid) {
    const url = `https://coverartarchive.org/release/${mbid}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.images && data.images.length > 0) {
                const imageUrl = data.images[0].image;
                document.querySelector('.album-cover').src = imageUrl;
            } else {
                console.error('No cover art found for this album');
            }
        })
        .catch(error => console.error('Error fetching cover art:', error));
}

const albumId = getParameterByName('id'); // toma el parámetro 'id' de la URL

// Supongamos que tienes un objeto que mapea albumId a MBID de MusicBrainz
const albumMBID = {
    '1': '12345', // MBID del álbum "El Mal Querer"
    '2': '67890'  // MBID de otro álbum
};

// Obtener y mostrar la portada del álbum
if (albumId && albumMBID[albumId]) {
    fetchAlbumCover(albumMBID[albumId]);
} else {
    console.error('Album ID not found or invalid');
}