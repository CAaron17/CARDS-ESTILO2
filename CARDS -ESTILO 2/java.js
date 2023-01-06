const container = document.querySelector('.contenedor');

// **********************************************************************************

function animeConPelicula(pic, namef, nameb, estado, temp, cap, pel) {

    const div_general = document.createElement('div');
    div_general.setAttribute('class', 'card');

    // ****************************** PARTE DELANTERA *******************************

    const div_front = document.createElement('div');
    const img = document.createElement('img');
    const h2_front = document.createElement('h2');

    div_front.setAttribute('class', 'face front');

    img.setAttribute('src', `media/${pic}.jpg`);
    h2_front.innerHTML = namef;

    div_front.appendChild(img);
    div_front.appendChild(h2_front);

    div_general.append(div_front);

    // ****************************** PARTE TRASERA *******************************

    const div_back = document.createElement('div');
    const h2_back = document.createElement('h2');
    const p_back = document.createElement('p');
    const div_linea = document.createElement('div');

    div_back.setAttribute('class', 'face back');
    div_linea.setAttribute('class', 'linea');

    h2_back.innerHTML = nameb;

    p_back.innerHTML =
        `
            Estado: ${estado} <br>
            <br>
            Temporadas: ${temp} <br>
            <br>
            Capítulos: ${cap} <br>
            <br>
            Películas: ${pel}
        `;

    div_back.appendChild(h2_back);
    div_back.appendChild(p_back);
    div_back.appendChild(div_linea);

    div_general.appendChild(div_back);

    container.appendChild(div_general);
}

// **************************************************************************************

function animeSinPelicula(pic, namef, nameb, estado, temp, cap) {

    const div_general = document.createElement('div');
    div_general.setAttribute('class', 'card');

    // ******************************** PARTE DELANTERA ********************************

    const div_front = document.createElement('div');
    const img = document.createElement('img');
    const h2 = document.createElement('h2');

    div_front.setAttribute('class', 'face front');

    img.setAttribute('src', `media/${pic}.jpg`);
    h2.innerHTML = namef;

    div_front.appendChild(img);
    div_front.appendChild(h2);

    div_general.append(div_front);

    // ******************************** PARTE TRASERA ********************************

    const div_back = document.createElement('div');
    const h2_back = document.createElement('h2');
    const p_back = document.createElement('p');
    const div_linea = document.createElement('div');

    div_back.setAttribute('class', 'face back');
    div_linea.setAttribute('class', 'linea');

    h2_back.innerHTML = nameb;

    p_back.innerHTML =
        `
            Estado: ${estado} <br>
            <br>
            Temporadas: ${temp} <br>
            <br>
            Capítulos: ${cap}
        `;

    div_back.appendChild(h2_back);
    div_back.appendChild(p_back);
    div_back.appendChild(div_linea);

    div_general.appendChild(div_back);

    container.appendChild(div_general);
}

animeConPelicula('bunny', 'BUNNY GIRL SENPAI', 'BUNNY GIRL SENPAI', 'en emisión', 1, 13, 1);
animeSinPelicula('snk', 'ATTACK ON TITAN', 'SHINGEKI NO KYOJIN', 'en emisión', 4, 74);
animeSinPelicula('fmab', 'FULL METAL ALCHEMIST BROTHERHOOD', 'FULL METAL ALCHEMIST BROTHERHOOD', 'finalizado', 1, 64);
animeSinPelicula('note', 'DEATH NOTE', 'DEATH NOTE', 'finalizado', 1, 37);
animeConPelicula('pokemon', 'POKEMON', 'POKEMON', 'en emisión', 24, 'más de 1100', 22);
animeSinPelicula('another', 'ANOTHER', 'ANOTHER', 'finalizado', 1, 12);
animeSinPelicula('dress', 'MY DRESS UP DARLING', 'SONO BISQUE DOLL', 'en emisión', 1, 12);
animeSinPelicula('record', 'RECORD OF RAGNAROK', 'SHUUMATSU NO VALKYRIE', 'en emisión', 1, 12);
animeConPelicula('rengoku', 'DEMON SLAYER', 'KIMETSU NO YAIBA', 'en emisión', 2, 44, 1);
animeSinPelicula('arcane', 'ARCANE', 'ARCANE', 'en emisión', 1, 19);
animeSinPelicula('kake', 'KAKEGURUI', 'KAKEGURUI', 'en emisión', 2, 24);
animeConPelicula('jujutsu', 'JUJUTSU KAISEN', 'JUJUTSU KAISEN', 'en emisión', 1, 24, 1);