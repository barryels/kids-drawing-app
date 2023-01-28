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
    { name: "xxxs", value: "2" },
    { name: "dm", value: "10" },
    { name: "md", value: "20" },
    { name: "lg", value: "50" },
    { name: "xxlg", value: "100" },
  ];

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setSelectedStrokeWidth(Number(e.target.value));
  }

  function onSelectPredefinedStrokeWidthOption(value: string) {
    setSelectedStrokeWidth(Number(value));
  }

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

          return <li key={predefinedStrokeWidthOption.name} className={classList.join(" ")} onClick={onSelectPredefinedStrokeWidthOption.bind(null, predefinedStrokeWidthOption.value)}></li>;
        })}
      </ul>
    </div>
  );
}
