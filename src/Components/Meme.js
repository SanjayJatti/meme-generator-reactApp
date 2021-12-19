import React from "react";
import memesData from "../memesData.js";

export default function Meme() {

 const [memeImg, setMemeImg] = React.useState("")

 function getMemeImg(){
   const memesArray = memesData.data.memes;
   const randomNumber = Math.floor(Math.random() * memesArray.length)
   setMemeImg(memesArray.[randomNumber].url)
 } 

  return (
    <main>
      <div className="meme--form">
        <div className="meme--input-div">
          <input className="meme--input" type="text" />
          <input className="meme--input" type="text" />
        </div>
        <button 
        className="meme--button"
        onClick = {getMemeImg}
        >Get a new meme image</button>
      </div>
      <img src ={memeImg} alt="" className="meme-image"/>
    </main>
  );
}
