import { ReactSketchCanvas } from "react-sketch-canvas";
import "./index.css";

type Props = {
  strokeColor?: string;
  strokeWidth?: number;
  eraserWidth?: number;
};

export default function Canvas({ strokeColor = "#000", strokeWidth = 20, eraserWidth }: Props) {
  return (
    <div className="Canvas">
      <div className="container">
        <ReactSketchCanvas className="drawingArea" width="100%" height="100%" strokeColor={strokeColor} strokeWidth={strokeWidth} eraserWidth={eraserWidth} />
      </div>
    </div>
  );
}
