import "./App.css";
import { useState } from "react"


//For using useState we need to import useState from react
import { Counter } from "./Counter";

export default function App() {
  return (
    <div className="App">
      <AddColor />
    </div>
  );
}

function AddColor() {
  const [color, setColor] = useState("skyblue")
  const [colorList, setColorList] = useState(["orange", "crimson", "pink"])

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
          onChange={(event) => setColor(event.target.value)}
        />
        <button onClick={()=> setColorList([...colorList, color])}>Add Color</button>
      </div>
      {colorList.map((ele) => (
        <ColorBox color={ele} />
      ))}
    </div>
  );
}

function ColorBox({ color }) {
  const styles = {
    width: "315px",
    height: "30px",
    backgroundColor: color,
    marginTop:"15px",
  };
  return <div style={styles}></div>;
}
