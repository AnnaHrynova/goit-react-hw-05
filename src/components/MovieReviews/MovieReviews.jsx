import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../tmdb-api.js";
import css from "./MovieReviews.module.css";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId).then((data) => setReviews(data.results));
  }, [movieId]);

  return (
    <div>
      {reviews.length === 0 ? (
        <p className={css.noReviews}>We do not have any reviews for this movie.</p>
      ) : (
        <ul className={css.list}>
          {reviews.map((review) => (
            <li className={css.reviewsList} key={review.id}>
              <p className={css.author}>AUTHOR: {review.author}</p>
              <p className={css.review}>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}