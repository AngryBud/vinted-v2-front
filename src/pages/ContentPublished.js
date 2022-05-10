import "./ContentPublished.css";
import { useState } from "react";
// import Cross from "../../../assets/img/cross.svg";
const ContentPublished = ({publish, setPublish }) => {
  const [picture, setPicture] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");

  let src = "";
  if (picture.name) {
    src = URL.createObjectURL(picture);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newObj = {};
    newObj.title = title;
    description.length > 0 && (newObj.description = description);
    newObj.price = price;
    condition.length > 0 && (newObj.condition = condition);
    city.length > 0 && (newObj.city = city);
    brand.length > 0 && (newObj.brand = brand);
    size.length > 0 && (newObj.size = size);
    color.length > 0 && (newObj.color = color);
    newObj.picture = picture;
    newObj.title && newObj.price && newObj.picture && setPublish(newObj);
  };
  return (
    <div className="publish">
      <h2>Vends ton article</h2>
      <form onSubmit={handleSubmit}>
        <div className="fillPicture">
            <div className="picBorder">
                
          {!picture.name ? (
            <input
              type="file"
              className="picInput"
              placeholder="Ajoute une photo"
              onChange={(event) => setPicture(event.target.files[0])}
            />
          ) : (
            <div className="picturePrev">
              <img src={src} alt="" />

            </div>
          )}
          </div>
        </div>
        <div className="fillInfos">
            <div className="title">
                <h2>Titre</h2>
                <div className="input">
                  <input
                    type="text"
                    name="title"
                    placeholder="ex: basket nike neuve"
                    onChange={(event) => {
                      setTitle(event.target.value);
                    }}/>
                </div>
            </div>
            <div className="title">
                <h2>Decris ton article</h2>
                <div className="input">
                  <textarea
                    name="description"
                    placeholder="ex : jamais porté"
                    onChange={(event) => {
                      setDescription(event.target.value);
                    }}
                  ></textarea>
                </div>
            </div>
        </div>
        <div className="fillDetails">
            <div className="title">
                    <h2>Marque</h2>
                    <div className="input">
                <input
                  type="text"
                  name="brand"
                  placeholder="ex: Nike"
                  onChange={(event) => {
                    setBrand(event.target.value);
                  }}
                />
              </div>
            </div>
            <div className="title">
                <h2>Taille</h2>
                <div className="input">
                    <input
                      type="text"
                      name="size"
                      placeholder="ex: ex M / 40 "
                      onChange={(event) => {
                        setSize(event.target.value);
                      }}
                    />
                </div>
            </div>
            <div className="title">
                <h2>Couleur</h2>
                <div className="input">
                    <input
                      type="text"
                      name="color"
                      placeholder="ex: Bleu"
                      onChange={(event) => {
                        setColor(event.target.value);
                      }}
                    />
                </div>
            </div>
            <div className="title">
                <h2>Etat</h2>
                <div className="input">
                    <input
                      type="text"
                      name="condition"
                      placeholder="ex: Neuf "
                      onChange={(event) => {
                        setCondition(event.target.value);
                      }}
                    />
                </div>
            </div>
            <div className="title">
                <h2>Ville</h2>
                <div className="input">
                    <input
                      type="text"
                      name="city"
                      placeholder="ex: Paris"
                      onChange={(event) => {
                        setCity(event.target.value);
                      }}
                    />
                </div>
            </div>
        </div>
        <div className="fillPrice">
            <div className="title">
                <h2>Prix</h2>
                <div className="input">
                    <input
                      type="text"
                      name="price"
                      placeholder="10.00 €"
                      onChange={(event) => {
                        setPrice(event.target.value);
                      }}
                    />
                </div>
            </div>
            <input id="#checkbox" type="checkbox" name="exchange" /><span>Je suis intéressé(e) par des échanges</span>
        </div>
        <button type="submit" value="">
          Valider
        </button>
      </form>
    </div>
  );
};

export default ContentPublished;