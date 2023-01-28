import { ChangeEvent } from "react";
import "./index.css";

type Props = {
  value: string;
  onStart: Function;
  onChange: Function;
  onComplete: Function;
};

export default function ColourPicker({ value, onStart, onChange, onComplete }: Props) {
  function onSelectColour(e: ChangeEvent<HTMLInputElement>) {
    onChange(e.target?.value);
  }

  function onFocus() {
    onStart();
  }

  function onBlur() {
    onComplete();
  }

  return (
    <div className="ColourPicker">
      <input type="color" onChange={onSelectColour} onFocus={onFocus} onBlur={onBlur} value={value} />
    </div>
  );
}
