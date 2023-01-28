import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Image, getImage, ToolAttributes, ToolType } from "../../store";
import "./index.css";
import Canvas from "../../components/Canvas";
import BackButton from "../../components/BackButton";
import ColourPicker from "../../components/ColourPicker";
import ToolPicker from "../../components/ToolPicker";
import ExtraDrawingControls from "../../components/ExtraDrawingControls";

export default function Editor() {
  const { imageID } = useParams();

  const [image, setImage] = useState<Image | null>(null);
  const [isColourPickerBusy, setIsColourPickerBusy] = useState<boolean>(false);
  const [selectedToolType, setSelectedToolType] = useState<ToolType>(ToolType.PENCIL);
  const [selectedColour, setSelectedColour] = useState<ToolAttributes["colour"]>("#ff0000");
  const [selectedStrokeWidth, setSelectedStrokeWidth] = useState<ToolAttributes["strokeWidth"]>(100);

  useEffect(() => {
    setImage(getImage(imageID || ""));
  }, []);

  function onStartChoosingColour() {
    setIsColourPickerBusy(true);
  }

  function onChooseColour(colour: string) {
    setSelectedColour(colour);
  }

  function onCompleteChoosingColour() {
    setIsColourPickerBusy(false);
  }

  function onChangeStrokeWidth(value: number) {
    setSelectedStrokeWidth(value);
  }

  return (
    <div className="Editor">
      <div className="CanvasContainer">
        <Canvas strokeWidth={selectedStrokeWidth} eraserWidth={20} backgroundImageURI={image?.src || ""} strokeColor={selectedColour} disableDrawing={isColourPickerBusy} />
      </div>
      <div className="BackButtonContainer">
        <BackButton />
      </div>
      <div className="ColourPickerContainer">
        <ColourPicker value={selectedColour} onStart={onStartChoosingColour} onComplete={onCompleteChoosingColour} onChange={onChooseColour} />
      </div>
      <div className="ToolPickerContainer">
        <ToolPicker onChangeStrokeWidth={onChangeStrokeWidth} strokeWidth={selectedStrokeWidth} />
      </div>
      <div className="ExtraDrawingControlsContainer">
        <ExtraDrawingControls />
      </div>
    </div>
  );
}
