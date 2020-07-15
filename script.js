let numberOfFilms = prompt("skolko filmov vy uje posmoltreli", "");

console.log(numberOfFilms);

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

while (personalMovieDB.movies < 2) {
  let a = prompt("odin iz poslednix filmov kotorye vy posmotreli", ""),
    b = prompt("naskolko ocenili ego", "");

  if (a != null && b != null && a != "" && b != "" && a.length < 50 && b.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log("done");
  } else {
    i--
    console.log('error');
  }
}


/*for (let i = 0; i < 2; i++) {
  let a = prompt("odin iz poslednix filmov kotorye vy posmotreli", ""),
    b = prompt("naskolko ocenili ego", "");

  if (a != null && b != null && a != "" && b != "" && a.length < 50 && b.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log("done");
  } else {
    i--
    console.log('error');
  }

}

if (personalMovieDB.count < 10) {
  console.log("prosmotreno dovolno malo filmov");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
  console.log("vy kinoman");
} else {
  console.log("ty super")
}
*/
console.log(personalMovieDB);