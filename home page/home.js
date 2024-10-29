
const api = "api_key=7d18fc625a83f3b338831210e866837c";

const base_url = "https://api.themoviedb.org/3";

const banner_url = "https://image.tmdb.org/t/p/original";
const img_url = "https://image.tmdb.org/t/p/w300";

const requests = {

    fecthTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
    fecthNetflixOriginals: `${base_url}/discover/tv?${api}&with_networks=213`,
    fecthActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
    fecthAnimeMovies: `${base_url}/discover/movie?${api}&with_genres=16`,
    fecthComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
    fecthRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=10749`,
    fecthHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
    fecthDocumentries: `${base_url}/discover/movie?${api}&with_genres=99`,
    fecthSciFi: `${base_url}/discover/movie?${api}&with_genres=878`,

};

function truncate(str,n){
    return str?.length > n ? str.substr(0, n-1) + "..." :str;
}

fetch(requests.fecthTrending)
    .then((res) => res.json())

    .then((data) => {

        const setMovie = data.results[Math.floor(Math.random() * data.results.length - 1)];

        console.log(setMovie);
        var banner = document.getElementById('banner');
        var banner_title = document.getElementById('banner-title');
        var banner_desc = document.getElementById('banner-description');
        var banner_media = document.getElementById('banner-media');

        banner.style.backgroundImage ='url('+ banner_url + setMovie.backdrop_path +')';
        banner_desc.innerText = truncate(setMovie.overview, 150);
        banner_media.innerHTML = `Treanding in ${setMovie.media_type}`
        if(setMovie.name == undefined){
            banner_title.innerText = setMovie.title;
        }else{
            banner_title.innerText = setMovie.name;            
        }
    });
 
fetch(requests.fecthNetflixOriginals)
    .then((res) => res.json())

    .then((data) =>{

        const headrow = document.getElementById('headrow');
        const row = document.createElement('div');
        row.className = 'row';
        row.classList.add('netflixrow');
        headrow.appendChild(row);


        const title = document.createElement('h2');
        title.className = 'row-title';
        title.innerText = 'NEXFLIX ORIGINALS';
        row.appendChild(title);


        const  row_posters = document.createElement('div');
        row_posters.className = 'row-posters';
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            
            const poster = document.createElement('img');
            poster.className = 'row-posterLarge';
            var s = movie.name.replace(/\s+/g, "");
            poster.id = s;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    });


    fetch(requests.fecthActionMovies)
        .then((res) => res.json())

        .then((data) =>{

            const headrow = document.getElementById('headrow');
            const row = document.createElement('div');
            row.className = 'row';            
            headrow.appendChild(row);


            const title = document.createElement('h2');
            title.className = 'row-title';
            title.innerText = 'Action Movies';
            row.appendChild(title);


            const  row_posters = document.createElement('div');
            row_posters.className = 'row-posters';
            row.appendChild(row_posters);

            data.results.forEach((movie) => {

                const poster = document.createElement('img');
                poster.className = 'row-posterLarge';
                var s2= movie.id;
                poster.id = s2;
                poster.src = img_url + movie.poster_path;
                row_posters.appendChild(poster);
            });
        });


    fetch(requests.fecthAnimeMovies)
        .then((res) => res.json())

        .then((data) =>{

            const headrow = document.getElementById('headrow');
            const row = document.createElement('div');
            row.className = 'row';            
            headrow.appendChild(row);


            const title = document.createElement('h2');
            title.className = 'row-title';
            title.innerText = 'Animations';
            row.appendChild(title);


            const  row_posters = document.createElement('div');
            row_posters.className = 'row-posters';
            row.appendChild(row_posters);

            data.results.forEach((movie) => {
                
                const poster = document.createElement('img');
                poster.className = 'row-poster';
                var s2 = movie.id;
                poster.id = s2;
                poster.src = img_url + movie.backdrop_path;
                row_posters.appendChild(poster);
            });
        });
        

    fetch(requests.fecthComedyMovies)
        .then((res) => res.json())

        .then((data) =>{

            const headrow = document.getElementById('headrow');
            const row = document.createElement('div');
            row.className = 'row';            
            headrow.appendChild(row);


            const title = document.createElement('h2');
            title.className = 'row-title';
            title.innerText = 'Comedy Movies';
            row.appendChild(title);


            const  row_posters = document.createElement('div');
            row_posters.className = 'row-posters';
            row.appendChild(row_posters);

            data.results.forEach((movie) => {
                
                const poster = document.createElement('img');
                poster.className = 'row-poster';
                var s2 = movie.id;
                poster.id = s2;
                poster.src = img_url + movie.backdrop_path;
                row_posters.appendChild(poster);
            });
        });


    fetch(requests.fecthHorrorMovies)
        .then((res) => res.json())

        .then((data) =>{

            const headrow = document.getElementById('headrow');
            const row = document.createElement('div');
            row.className = 'row';            
            headrow.appendChild(row);


            const title = document.createElement('h2');
            title.className = 'row-title';
            title.innerText = 'Horror Movies';
            row.appendChild(title);


            const  row_posters = document.createElement('div');
            row_posters.className = 'row-posters';
            row.appendChild(row_posters);

            data.results.forEach((movie) => {
                
                const poster = document.createElement('img');
                poster.className = 'row-poster';
                var s2 = movie.id;
                poster.id = s2;
                poster.src = img_url + movie.backdrop_path;
                row_posters.appendChild(poster);
            });
        });
2
    fetch(requests.fecthDocumentries)
        .then((res) => res.json())

        .then((data) =>{

            const headrow = document.getElementById('headrow');
            const row = document.createElement('div');
            row.className = 'row';            
            headrow.appendChild(row);


            const title = document.createElement('h2');
            title.className = 'row-title';
            title.innerText = 'Documentries';
            row.appendChild(title);


            const  row_posters = document.createElement('div');
            row_posters.className = 'row-posters';
            row.appendChild(row_posters);

            data.results.forEach((movie) => {
                
                const poster = document.createElement('img');
                poster.className = 'row-poster';
                var s2 = movie.id;
                poster.id = s2;
                poster.src = img_url + movie.backdrop_path;
                row_posters.appendChild(poster);
            });
        });


    fetch(requests.fecthSciFi)
        .then((res) => res.json())

        .then((data) =>{

            const headrow = document.getElementById('headrow');
            const row = document.createElement('div');
            row.className = 'row';            
            headrow.appendChild(row);


            const title = document.createElement('h2');
            title.className = 'row-title';
            title.innerText = 'Sci-Fi Movies';
            row.appendChild(title);


            const  row_posters = document.createElement('div');
            row_posters.className = 'row-posters';
            row.appendChild(row_posters);

            data.results.forEach((movie) => {
                
                const poster = document.createElement('img');
                poster.className = 'row-poster';
                var s2 = movie.id;
                poster.id = s2;
                poster.src = img_url + movie.backdrop_path;
                row_posters.appendChild(poster);
            });
        });

    window.addEventListener("scroll",function(){

        var nav = document.querySelector(".navbar");
        var nav_item = document.querySelector(".nav-item");

        nav.classList.toggle("active", window.scrollY > 0);
        nav_item.classList.toggle("active", window.scrollY > 0);
    });