import "./index.css";
import Canvas from "../../components/Canvas";
import BackButton from "../../components/BackButton";
import ColourPicker from "../../components/ColourPicker";
import ToolPicker from "../../components/ToolPicker";
import ExtraDrawingControls from "../../components/ExtraDrawingControls";

export default function Editor() {
  return (
    <div className="Editor">
      <div className="CanvasContainer">
        <Canvas />
      </div>
      <div className="BackButtonContainer">
        <BackButton />
      </div>
      <div className="ColourPickerContainer">
        <ColourPicker />
      </div>
      <div className="ToolPickerContainer">
        <ToolPicker />
      </div>
      <div className="ExtraDrawingControlsContainer">
        <ExtraDrawingControls />
      </div>
    </div>
  );
}
