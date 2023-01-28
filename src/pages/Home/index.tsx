import ImageList from "../../components/ImageList";
import { images } from "../../store";
import "./index.css";

export default function Home() {
  return (
    <div className="Home">
      <ImageList images={images} />
    </div>
  );
}
