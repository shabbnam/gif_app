import React, { useState, useEffect } from "react";
import axios from "axios";

function Tag_v1(props) {
  const API_KEY = process.env.REACT_APP_API_URL;
  const [tag, setTag] = useState("dog");
  const [gif, setGif] = useState("");

  const fetchGIF = async (tag) => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const {
      data: {
        data: {
          images: { downsized_large },
        },
      },
    } = await axios.get(url);
    console.log(downsized_large)
    setGif(downsized_large.url);
  };

  useEffect(() => {
    fetchGIF(tag);
  },[tag]);

  const handleClick = (e) => {
    fetchGIF();
  };

  return (
    <div className="container">
      <h1>Random {tag} Gif</h1>
      <img width="500" src={gif} alt="random gif" />
      <button onClick={handleClick}>Click for new</button>
      <input onChange={(e) => setTag(e.target.value)} value={tag} name="tag" />
    </div>
  );
}

export default Tag_v1;
