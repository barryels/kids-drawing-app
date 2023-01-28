import { ReactSketchCanvas } from "react-sketch-canvas";
import "./index.css";

type Props = {
  disableDrawing: boolean;
  strokeColor: string;
  strokeWidth: number;
  eraserWidth: number;
  backgroundImageURI: string;
};

export default function Canvas({ disableDrawing = false, strokeColor, strokeWidth, eraserWidth, backgroundImageURI }: Props) {
  return (
    <div className="Canvas">
      <div className="Canvas__Container">
        <ReactSketchCanvas className="Canvas__DrawingArea" preserveBackgroundImageAspectRatio="xMidYMid meet" width="100%" height="100%" strokeColor={strokeColor} strokeWidth={strokeWidth} eraserWidth={eraserWidth} />
        <div className="Canvas__ImageOverlay" style={{ backgroundImage: `url(${backgroundImageURI})` }}></div>
      </div>
      {disableDrawing ? <div className="Canvas__Cover"></div> : null}
    </div>
  );
}
