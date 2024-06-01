import { useState } from "react";
import { Sample } from "./Sample";

// Counter Function with Like and Dislike buttons with Sample as Probs for Counter
export function Counter() {
  const [like, setLike] = useState(0);
  console.log("updated Like", like);
  const [dislike, setDislike] = useState(0);
  console.log("Updated Dislike", dislike);
  return (
    <div>
      <button
        onClick={() => {
          setLike(like + 1);
          console.log(like);
        }}
      >
        👍 {like}
      </button>
      <button
        onClick={() => {
          setDislike(dislike + 1);
        }}
      >
        👎 {dislike}
      </button>
      <Sample lk={like} dk={dislike} />
    </div>
  );
}
