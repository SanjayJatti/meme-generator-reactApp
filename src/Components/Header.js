import img from "/src/Components/Images/troll-face.webp";
export default function Header() {
  return (
    <header className="header">
      <img className="header--img" src={img} alt="" />
      <h3 className="header--title">Meme Generator</h3>
      <h4 className="header--sub-title">React Course Project 3</h4>
    </header>
  );
}
