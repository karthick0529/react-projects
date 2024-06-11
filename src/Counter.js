import { useState } from "react";
import { Sample } from "./Sample";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';


// Counter Function with Like and Dislike buttons with Sample as Probs for Counter
export function Counter() {
  const [like, setLike] = useState(0);
  console.log("updated Like", like);
  const [dislike, setDislike] = useState(0);
  console.log("Updated Dislike", dislike);
  return (
    <div>

      <IconButton
        color="primary"
        aria-label="likeBtn"
        onClick={() => {
          setLike(like + 1);
        }}
      > 
        <Badge badgeContent={like} color="primary">
        👍
        </Badge>
      </IconButton>

      <IconButton
        color="primary"
        aria-label="dislikeBtn"
        onClick={() => {
          setDislike(dislike + 1);
        }}
      >
         
        <Badge badgeContent={dislike} color="error">
        👎
        </Badge>
      </IconButton>

      <Sample lk={like} dk={dislike} />
    </div>
  );
}
