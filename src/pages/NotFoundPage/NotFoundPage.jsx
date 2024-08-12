import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={css.container}>
      <h1>404 Not Found</h1>
      <Link to="/">Go back to Home</Link>
    </div>
  );
}