import { useState } from "react";
import { ColorBox } from "./ColorBox";

export function AddColor() {
  const [color, setColor] = useState("skyblue");
  const [colorList, setColorList] = useState(["orange", "crimson", "pink"]);

  const inputStyles = {
    fontSize: "25px",
    backgroundColor: color,
  };

  return (
    <div>
      <div className="add-color">
        <input
          style={inputStyles}
          type="text"
          value={color}
          onChange={(event) => setColor(event.target.value)} />
        <button onClick={() => setColorList([...colorList, color])}>Add Color</button>
      </div>
      {colorList.map((ele) => (
        <ColorBox color={ele} />
      ))}
    </div>
  );
}
