// 24222fdae1cd43ea03a000071ac2d7ce
const API_KEY = "24222fdae1cd43ea03a000071ac2d7ce"

const requests = {
    trending: `/trending/all/day?api_key=${API_KEY}`,
    actionMovies : `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
    comedyMovies : `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
    fantacyMovies : `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=14`,
    thrillerMovies : `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=53`,
    scifiMovies : `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=878`,
    horrorMovies : `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
    adventureMovies : `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=12`,
    romanceMovies : `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
    warMovies : `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10752`,
    // genres = `/genre/movie/list?api_key=${API_KEY}&language=en-US`,
    now_playing : `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
    top_rated :`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    get_latest : `/movie/latest?api_key=${API_KEY}&language=en-US`,
    upcoming :`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
}

export default requests;