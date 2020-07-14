let numberOfFilms = prompt("skolko filmov vy uje posmoltreli", "");

console.log(numberOfFilms);

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("odin iz poslednix filmov kotorye vy posmotreli", ""),
  b = prompt("naskolko ocenili ego", ""),
  c = prompt("odin iz poslednix filmov kotorye vy posmotreli", ""),
  d = prompt("naskolko ocenili ego", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

const num = 50;
switch (num) {
  case 49:
    console.log("neverno");
    break;
  case 50:
    console.log("v to4ku");
    break;
  default:
    console.log("ne v etot raz");
}
