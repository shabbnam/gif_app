import React, { useState } from "react";
import useGif from "../useGif";

const Tag = () => {
  const [tag, setTag] = useState("dogs");
  const {gif,fetchGif}=useGif(tag);

  const handleClick = (e) => {
    fetchGif(tag)
   
  };
  return (
     gif && <div className="container">
      <h1>Random {tag} Gif</h1>
      <img width="500" src={gif} alt="random gif" />
      <button onClick={handleClick}>Click for new</button>
      <input onChange={(e) => setTag(e.target.value)} value={tag} name="tag" />
    </div>
  );
};
export default Tag
