
// API 키
const API_KEY = "3134ef106a0bdea3b6e6b139892bb5bb"


// 영화 장르 주소
const GENRE_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=ko-KR`


// 영화 주소 
const MOVIE_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`

// DOM 요소
// 버튼을 보여줄 영역
let genreButtons = document.querySelector('.genreButtons')

//영화를 검색할 영역
let movieList = document.querySelector('.movie-list');



// 선택된 장르를 저장할 변수
let selectedGenre = 0;


// 영화 장르 배열
let genres = [];

// 영화 목록 배열
let movies = [];

//영화를 보여줄 렌더함수
function showMovies() {
    console.log(movies, selectedGenre);

    // 화면 비우기 -> 영화목록 초기화 
    movieList.innerHTML = '';

    //장르에 맞는 영화를 찾아서 저장할 배열
    let filteredMovies = movies.filter(mov => {
        let matchGenre = selectedGenre === 0 || mov.genre_ids.includes(selectedGenre);
        return matchGenre;
    });
    console.log(filteredMovies);


    // 장르에 맞는 영화를 li안에
    filteredMovies.forEach(movie => {
        let li = document.createElement('li');
        let imgSrc = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        // 이미지, 제목, 별점을 표시할 태그를 만들어서 보여주기
        li.innerHTML = `
            <div class="img-box">
                <img src="${imgSrc}" alt="${movie.title}">
            </div>
            <div class="text-box">
                <h3>${movie.title}</h3>
                <span>${movie.vote_average}</span>
            </div>`
        movieList.append(li);
    // 이미지, 제모그 별점을 표시할 태그를
    // 만들어서 보여주기
});
}

//장르를 보여줄 렌더함수
function showGenres() {
    console.log(genres);
    //전체추가하기
    genres[0] = '전체보기';

    // 장르 버튼 생성
    genres.forEach((name, id) => {
        let btn = document.createElement('button');
        btn.textContent = name;
        btn.setAttribute('data-genre', id);
        genreButtons.append(btn);
    });

    // 모든 버튼을 저장할 배열 변수
    // let genreButtons = document.querySelectorAll('button');
    // genreButtons[0].classList.add('active');

    // 버튼 클릭 이벤트
    let buttons = genreButtons.querySelectorAll('button');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            // 클릭한 버튼의 data-genre 속성값 가져오기
            selectedGenre = Number(btn.getAttribute('data-genre'));
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            showMovies();
        });
    });
}

//장르를 가져 올 초기함수 - async는 비동기 함수
async function fetchGenres() {
    try {
        await fetch(GENRE_URL)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                data.genres.forEach(ele => {
                    genres[ele.id] = ele.name;
                })
                showGenres();
            })
    } catch (error) {
        console.log("영화 장르 불러오기 실패:", error);

    }
}


// 영화를 보여줄 초기 함수
async function fectchMovies() {
    try {
        await fetch(MOVIE_URL)
            .then(res => res.json())
            .then(data => {
                // console.log('영화목록', data);
                movies = data.results;
                showMovies();
            })
    } catch (error) {
        console.log("영화 불러오기 실패:", error);
    }
}




// 초기 함수 호출
fetchGenres();
fectchMovies();