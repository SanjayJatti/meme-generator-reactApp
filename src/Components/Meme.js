import React from "react";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    botttomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  });

  const [allMemes, setAllMemes] = React.useState("");

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function handleChange(event) {
    setMeme((prevMeme) => ({
      ...prevMeme,
      [event.target.name]: event.target.value
    }));
  }

  function getMemeImg() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url
    }));
  }

  return (
    <main>
      <div className="meme--form">
        <div className="meme--input-div">
          <input
            className="meme--input"
            type="text"
            placeholder="Top text"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />
          <input
            className="meme--input"
            type="text"
            placeholder="Bottom text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />
        </div>
        <button className="meme--button" onClick={getMemeImg}>
          Get a new meme image
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} alt="" className="meme-image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText} </h2>
      </div>
    </main>
  );
}
