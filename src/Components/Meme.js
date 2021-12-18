export default function Meme() {
  return (
    <main>
      <form className="meme--form">
        <div className="meme--input-div">
          <input className="meme--input" type="text" />
          <input className="meme--input" type="text" />
        </div>
        <button className="meme--button">Get a new meme image</button>
      </form>
    </main>
  );
}
