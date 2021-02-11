import axios from "axios";
import React, { useEffect, useState } from "react";
import useGif from "../useGif"

function Random_v1(props) {
  // Random GIF V1
  const API_KEY =  process.env.REACT_APP_API_URL 

 const {gif,fetchGif}=useGif()

  const handleClick=(e)=>{
    fetchGif()
   }

  return (
    <div className="container">
      <h1>Random Gif</h1>
      <img width="500" src={gif} alt="random gif"/>
      <button onClick={handleClick}>Click for new</button>

    </div>
  );
}

export default Random_v1;
