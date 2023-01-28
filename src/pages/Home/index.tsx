import "./index.css";
import Canvas from "../../components/Canvas";
import BackButton from "../../components/BackButton";
import ColourPicker from "../../components/ColourPicker";
import ToolPicker from "../../components/ToolPicker";
import ExtraDrawingControls from "../../components/ExtraDrawingControls";

export default function Home() {
  return (
    <div className="Home">
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
