import { Link } from "react-router-dom";
import { Image } from "../../store";
import "./index.css";

type Props = {
  images: Image[];
};

export default function ImageList({ images }: Props) {
  return (
    <div className="ImageList">
      <ul className="ImageList__Items">
        {images.map((image) => {
          return (
            <li key={image.id} className="ImageList__Item">
              <Link to={`/editor/${image.id}`}>
                <span className="ImageList__ItemInner" style={{ backgroundImage: `url(${image.src})` }}></span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
