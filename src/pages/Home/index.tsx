import ImageList from "../../components/ImageList";
import { state } from "../../store";
import "./index.css";

export default function Home() {
  return (
    <div className="Home">
      <ImageList images={state.images} />
    </div>
  );
}
