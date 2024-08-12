import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../tmdb-api";
import css from "./MovieCast.module.css";

export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const defaultImg =
  "https://dummyimage.com/200x300/cdcdcd/000.jpg&text=No+Image";

  useEffect(() => {
    fetchMovieCast(movieId).then((data) => setCast(data.cast));
  }, [movieId]);

  return (
    <ul className={css.castList}>
      {cast.map((actor) => (
        <li className={css.castItem} key={actor.id}>
          <img
            className={css.castImg}
            src={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                : defaultImg
            }
            alt={actor.name}
          />
          <div className={css.actorWrap}>
          <p className={css.actor}>{actor.name}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}