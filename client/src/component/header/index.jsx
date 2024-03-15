import { Link } from "react-router-dom";
import classes from "./styles.module.css";

export default function Header() {
  return (
    <div className={classes.header}>
      <h3>Blog App</h3>
      <ul>
        <Link to={"/"}className={classes.link}>
          <li>Home</li>
        </Link>
        <Link to={"/add-blogs"}className={classes.link}>
          <li>Add Blog</li>
        </Link>
      </ul>
    </div>
  );
}
