import { Link } from "react-router-dom";
import "./index.css";

export default function BackButton() {
  return (
    <Link className="BackButton" to="/">
      &lt;
    </Link>
  );
}
