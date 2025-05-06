
const movies = [
  {
    title: "The Matrix",
    director: "Wachowski Brothers",
    year: 1999,
    rating: 8.7,
  },
  {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    rating: 8.8,
  },
  {
    title: "Interstellar",
    director: "Christopher Nolan",
    year: 2014,
    rating: 8.6,
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    rating: 9.2,
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    rating: 9.0,
  },
  { title: "Fight Club", director: "David Fincher", year: 1999, rating: 8.8 },
];


console.log("<<<<<<<< 1. احصل على عنوان أول فيلم تم إصداره بعد عام 2000. >>>>>>>>");
let firstMovieAfter2000 = movies.find(function(value){
  return value.year > 2000
})

console.log(firstMovieAfter2000.title);


console.log("<<<<<<<< 2. احصل على عنوان أول فيلم تقييمه أعلى من 9. >>>>>>>>");

let firstMovieRatingMoreThan9 = movies.find(function(value){
  return value.rating > 9
})

console.log(firstMovieRatingMoreThan9.title);

console.log("<<<<<<<< 3. احصل على الأفلام التي أخرجها 'Christopher Nolan' فقط. >>>>>>>>");

let directoChristopherNolanMovies = movies.filter(function(value){
  return value.director == "Christopher Nolan"
})

console.log(directoChristopherNolanMovies);

console.log("<<<<<<<< 4. احصل على الأفلام التي تم إصدارها قبل عام 2010. >>>>>>>>");

let moviesBefore2010 = movies.filter(function(value){
  return value.year < 2010
})

console.log(moviesBefore2010);

console.log("<<<<<<<< 5. احصل على مصفوفة تحتوي فقط عناوين الأفلام. >>>>>>>>");
let arrayOfMovieTitle = movies.map(function(value){

  return value.title
})

console.log(arrayOfMovieTitle);



console.log("<<<<<<<< 6. احصل على متوسط تقييم جميع الأفلام. >>>>>>>>");
let averageRatingOfMovies = movies.reduce(function(sum,value){

  return sum + value.rating
},0) / movies.length;

console.log(averageRatingOfMovies);


console.log("<<<<<<<< 7. قم بترتيب الأفلام حسب السنة (الأقدم إلى الأحدث). >>>>>>>>");
let sortByMoivesYear = movies.sort(function(a,b){

  return a.year - b.year;
})

console.log(sortByMoivesYear);

console.log("<<<<<<<< 8. قم بترتيب الأفلام حسب التقييم (من الأعلى إلى الأقل). >>>>>>>>");

let sortByMoivesRating = movies.sort(function(a,b){

  return b.rating - a.rating;
})

console.log(sortByMoivesRating);


console.log("<<<<<<<< 9. هل جميع الأفلام تقييمها أعلى من 8؟ >>>>>>>>");
let isAllMoviesRatingMoreThan8 = movies.every(function(value){

  return value.rating > 8
})

console.log(isAllMoviesRatingMoreThan8);


console.log("<<<<<<<< 10. هل يوجد فيلم واحد على الأقل تم إصداره في عام 1999؟ >>>>>>>>");

let isThereOneMovieIssueAt1999 = movies.some(function(value){

  return value.year == 1999
})

console.log(isThereOneMovieIssueAt1999);

console.log("<<<<<<<< 11. هل جميع الأفلام أخرجها نفس المخرج؟ >>>>>>>>");
let isAllMovieDirectByOneDirector = movies.every(function(value){

  return value.director == movies[0].director
})

console.log(isAllMovieDirectByOneDirector);


console.log("<<<<<<<< 12. هل يوجد فيلم واحد على الأقل تقييمه أقل من 8.5؟ >>>>>>>>");
let isThereOneMovieRatingLessThan8p5 = movies.some(function(value){

  return value.rating < 8.5
})

console.log(isThereOneMovieRatingLessThan8p5);