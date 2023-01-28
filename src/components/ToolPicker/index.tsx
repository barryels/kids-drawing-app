import { ChangeEvent, useEffect, useState } from "react";
import { ToolAttributes } from "../../store";
import "./index.css";

type Props = {
  strokeWidth: number;
  onChangeStrokeWidth: Function;
};

export default function ToolPicker({ strokeWidth, onChangeStrokeWidth }: Props) {
  const [selectedStrokeWidth, setSelectedStrokeWidth] = useState<ToolAttributes["strokeWidth"]>(strokeWidth);

  const predefinedStrokeWidthOptions = [
    { name: "xxxs", value: "10" },
    { name: "md", value: "50" },
    { name: "xxlg", value: "80" },
  ];

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setSelectedStrokeWidth(Number(e.target.value));
  }

  function onSelectPredefinedStrokeWidthOption(value: string) {
    setSelectedStrokeWidth(Number(value));
  }

  useEffect(() => {
    setSelectedStrokeWidth(Number(predefinedStrokeWidthOptions[1].value));
  }, []);

  useEffect(() => {
    onChangeStrokeWidth(Number(selectedStrokeWidth));
  }, [selectedStrokeWidth]);

  return (
    <div className="ToolPicker">
      <input type="range" min="2" max="80" onChange={onChange} value={String(selectedStrokeWidth)} />
      <ul className="ToolPicker_StrokeWidthOptions">
        {predefinedStrokeWidthOptions.map((predefinedStrokeWidthOption) => {
          const classNameBase = "ToolPicker_StrokeWidthOption";

          let classList: string[] = [classNameBase, `${classNameBase}--${predefinedStrokeWidthOption.name}`];

          if (Number(predefinedStrokeWidthOption.value) === selectedStrokeWidth) {
            classList.push(`${classNameBase}--selected`);
          }

          return (
            <li key={predefinedStrokeWidthOption.name} className={classList.join(" ")} onClick={onSelectPredefinedStrokeWidthOption.bind(null, predefinedStrokeWidthOption.value)}>
              <span className="ToolPicker_StrokeWidthOption__inner" style={{ height: `${predefinedStrokeWidthOption.value}px`, width: `${predefinedStrokeWidthOption.value}px` }}></span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
