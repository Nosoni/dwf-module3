import { useEffect, useState } from "react";
import memeData from "../data/memesData";
import details from "../data/detalles";

export const Meme = () => {
  const [leftText, setLeftText] = useState("");
  const [rigthText, setRigthText] = useState("");
  const [url, setUrl] = useState(memeData.data.memes[0].url);
  const [id, setId] = useState(memeData.data.memes[0].id);
  const [detalles, setDetalles] = useState({});

  useEffect(() => {
    const finded = details.find((item) => item.id === id);
    setDetalles(finded ?? {});
  }, [id]);

  const handleLeftChange = (e) => {
    setLeftText(e.target.value);
  };

  const handlRigthChange = (e) => {
    setRigthText(e.target.value);
  };

  const handleOnClick = () => {
    const memesArray = memeData.data.memes;
    const randomNumber = Math.floor(Math.random() * 4);
    setUrl(memesArray[randomNumber].url);
    setId(memesArray[randomNumber].id);
  };

  return (
    <main>
      <div className="form">
        <input
          type="text"
          className="form--input"
          placeholder="izquierda"
          onChange={handleLeftChange}
          value={leftText}
        />
        <input
          type="text"
          className="form--input"
          placeholder="derecha"
          onChange={handlRigthChange}
          value={detalles.description}
        />
        <button className="form--button" onClick={handleOnClick}>
          Obtener una nueva imagen
        </button>
        <div className="meme">
          <img alt="random-image" className="meme--image" src={url} />
          <h2 className="meme--text top">{leftText}</h2>
          <h2 className="meme--text bottom">{rigthText}</h2>
        </div>
        <div>
          {Object.keys(detalles).length > 0 ? (
            <>
              <p>{detalles.description}</p>
              <p>{detalles.created_at}</p>
            </>
          ) : (
            <p>no tiene datos</p>
          )}
        </div>
      </div>
    </main>
  );
};
