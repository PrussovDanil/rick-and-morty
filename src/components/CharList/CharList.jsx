import "./charList.scss";

import { useEffect, useState } from "react";

import Female from "../../resources/svg/female.svg";
import Male from "../../resources/svg/male.svg";
import { ReactComponent as Star } from "../../resources/svg/star.svg";
import axios from "axios";

const CharList = () => {
  const [charList, setCharList] = useState([]);
  const [favoriteChar, setFavoriteChar] = useState([]);

  useEffect(() => {
    onRequest();
  }, []);

  const onRequest = () => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then(res => {
        res.data.results.forEach((hero,i) =>
          axios.get(hero.episode[hero.episode.length - 1]).then((episode) => {
            let newHero = hero;

            newHero.episodeLast = episode.data.episode;

            setCharList((state) => JSON.stringify(state)!== JSON.stringify(newHero)?[...state, newHero]: console.log(state));
          })
        );
      });
  
  };
  console.log(charList);
  function renderItem(charList) {
    const items = charList.map((item, i) => {
      if (i < 10) {

        return (
          <div key={i} className="char__table--body">
            <div
              className={`char__list--body char__list--container ${
                item.status === "Alive" ? null : "char--dead"
              }`}
            >
              <img src={item.image} alt="" className="char__list--img" />
            </div>
            <div className="char__list--body">{item.id}</div>
            <div className="char__list--body">{item.name}</div>
            <div className="char__list--body">
              <img
                src={item.gender === "Male" ? Male : Female}
                alt=""
                className="char__list--body"
              />
              {item.gender}{" "}
            </div>
            <div className="char__list--body">{item.species}</div>
            <div className="char__list--body">{item.episodeLast}</div>
            <button
              onClick={() => addToFavorite(item)}
              className="char__list--body"
            >
              <Star className={favoriteChar.includes(item)? 'star': ''} />
            </button>
          </div>
        );
      } else {
        return null;
      }
    });
    return items;
  }

  const addToFavorite = (char) => {
    if (!favoriteChar.includes(char)) {
      setFavoriteChar([...favoriteChar, char]);
    } else {
      setFavoriteChar([...favoriteChar.filter((item) => item !== char)]);
    }
  };

  return (
    <div className="char">
      <div className="char__container">
        <div className="char__table">
          <ul className="char__table--head">
            <li className="char__list">Photo</li>
            <li className="char__list">Character ID</li>
            <li className="char__list">Name</li>
            <li className="char__list">Gender</li>
            <li className="char__list">Species</li>
            <li className="char__list">Last Episode</li>
            <li className="char__list">Add To Favorites</li>
          </ul>
          {renderItem(charList)}
        </div>
      </div>
    </div>
  );
};

export default CharList;
