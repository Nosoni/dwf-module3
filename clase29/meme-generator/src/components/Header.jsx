import imageTroll from "../images/troll-face.jpg";

export const Header = () => {
  return (
    <header className="header">
      <img src={imageTroll} className="header--image" />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">Senpai Academy - DWF - 1</h4>
    </header>
  );
};
