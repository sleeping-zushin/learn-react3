export const movies = [
  {
    id:  async () => {
    const response = await axios.get(baseURL + "/GetAllMedicines");
    return response.data;
  },
    title: "Inception",
    year: 2010,
    genre: ["Action", "Sci-Fi"],
    rating: 8.8,
    isShowing: false,
    poster: "https://image.tmdb.org/t/p/w200/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
    duration: 148
  },
  {
    id: 2,
    title: "The Dark Knight",
    year: 2008,
    genre: ["Action", "Crime", "Drama"],
    rating: 9.0,
    isShowing: false,
    poster: "https://image.tmdb.org/t/p/w200/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    duration: 152
  },
  {
    id: 3,
    title: "Interstellar",
    year: 2014,
    genre: ["Adventure", "Drama", "Sci-Fi"],
    rating: 8.6,
    isShowing: false,
    poster: "https://image.tmdb.org/t/p/w200/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    duration: 169
  },
  {
    id: 4,
    title: "Avengers: Endgame",
    year: 2019,
    genre: ["Action", "Adventure", "Sci-Fi"],
    rating: 8.4,
    isShowing: false,
    poster: "https://image.tmdb.org/t/p/w200/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    duration: 181
  },
  {
    id: 5,
    title: "Spider-Man: No Way Home",
    year: 2021,
    genre: ["Action", "Fantasy"],
    rating: 8.2,
    isShowing: true,
    poster: "https://image.tmdb.org/t/p/w200/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    duration: 148
  },
  {
    id: 6,
    title: "Joker",
    year: 2019,
    genre: ["Crime", "Drama", "Thriller"],
    rating: 8.5,
    isShowing: false,
    poster: "https://image.tmdb.org/t/p/w200/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    duration: 122
  },
  {
    id: 7,
    title: "Frozen II",
    year: 2019,
    genre: ["Animation", "Adventure", "Family"],
    rating: 6.9,
    isShowing: false,
    poster: "https://image.tmdb.org/t/p/w200/pjeMs3yqRmFL3giJy4PMXWZTTPa.jpg",
    duration: 103
  },
  {
    id: 8,
    title: "The Lion King",
    year: 2019,
    genre: ["Adventure", "Drama", "Animation"],
    rating: 6.8,
    isShowing: false,
    poster: "https://image.tmdb.org/t/p/w200/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg",
    duration: 118
  },
  {
    id: 9,
    title: "Doctor Strange in the Multiverse of Madness",
    year: 2022,
    genre: ["Action", "Fantasy", "Horror"],
    rating: 6.9,
    isShowing: true,
    poster: "https://image.tmdb.org/t/p/w200/wRnbWt44nKjsFPrqSmwYki5vZtF.jpg",
    duration: 126
  },
  {
    id: 10,
    title: "Oppenheimer",
    year: 2023,
    genre: ["Biography", "Drama", "History"],
    rating: 8.6,
    isShowing: true,
    poster: "https://image.tmdb.org/t/p/w200/baf6P6bqbqlDOLeM0KeF3D9tM0c.jpg",
    duration: 180
  }
];
