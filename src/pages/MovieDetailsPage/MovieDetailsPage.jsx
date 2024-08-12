import { useEffect, useState, lazy, Suspense, useRef } from "react";
import { useParams, Link, Routes, Route, useLocation } from "react-router-dom";
import { fetchMovieDetails } from "../../tmdb-api";
import css from "./MovieDetailsPage.module.css";

const MovieCast = lazy(() => import("../../components/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("../../components/MovieReviews/MovieReviews")
);

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const prevLocation = useRef(location.state?.from || "/movies");

  useEffect(() => {
    fetchMovieDetails(movieId).then((data) => setMovie(data));
  }, [movieId]);
  

  if (!movie) return null;

  const votePercent = Math.floor(movie.vote_average * 10);

  return (
    <div className={css.wrap}>
      <button className={css.backBtn}>
        <Link className={css.backLink} to={prevLocation.current}>
          Go back
        </Link>
      </button>
      <div className={css.wrapper}>
        <div className={css.imgWrapper}>
          <img
            className={css.image}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        <div className={css.detailsWrapper}>
          <h1 className={css.movieTitle}>
            {movie.title} ({movie.release_date.slice(0, 4)})
          </h1>
          <p>User Score: {votePercent}%</p>
          <h2 className={css.header}>Overview</h2>
          <p className={css.about}>{movie.overview}</p>
          <h2 className={css.header}>Genres</h2>
          <p className={css.about}>{movie.genres.map((genre) => genre.name).join(" ")}</p>
        </div>
      </div>

      <div className={css.optionsWrapper}>
        <p className={css.optionsText}>Additional information</p>
        <ul className={css.optionsList}>
          <li>
            <Link
              className={css.optionsLink}
              to={`cast`}
              state={{ from: location.state?.from }}
            >
              Cast
            </Link>
          </li>
          <li>
            <Link
              className={css.optionsLink}
              to={`reviews`}
              state={{ from: location.state?.from }}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Routes>
      </Suspense>
    </div>
  );
}