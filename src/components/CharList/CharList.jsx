import Female from "../../resources/svg/female.svg";
import Genderless from "../../resources/svg/Genderless.svg";
import Male from "../../resources/svg/male.svg";
import Modal from "../modal";
import { ReactComponent as Star } from "../../resources/svg/star.svg";
import Unknown from "../../resources/svg/Unknown.svg";
import { useState } from "react";

const CharList = ({charList, onClick, favoriteChar}) => {
  const [open, setOpen] = useState(false);
  const [hero, setHero] = useState()
  const iconGender = (gender) =>{
    switch (gender) {
      case 'Male':
        return Male
      case 'Genderless':
        return Genderless
      case 'Female':
        return Female
      case 'unknown':
        return Unknown
        
      default:
        break;
    }
  }
  const modalWindow = (item) => {
    let screen = window.screen.width;
   
    if(screen<= 992){
      setHero(item)
      setOpen(true)
    }
  }
 
  function renderItem(charList) {
    const items = charList.map((item, i) => {
        return (
          <div key={i} className="char__table--body">
            <div
              className={`char__list char__list--container ${
                item.status === "Alive" ? null : "char--dead"
              }`}
            >
              <img src={item.image} alt="" className="char__list--img" />
            </div>
            <div className="char__list">{item.id}</div>
            <div className="char__list char__list--name" onClick={()=> modalWindow(item)} >{item.name}</div>
            
            <div className="char__list">
              <img
                src={iconGender(item.gender)}
                alt=""
                className="char__list--gender"
              />
              {item.gender}
            </div>
            <div className="char__list">{item.species}</div>
            <div className="char__list">{item.episodeLast}</div>
            <button
              onClick={() => addToFavorite(item)}
              className="char__list"
            >
              <Star className={favoriteChar.includes(item)? 'star': ''} />
            </button>
          </div>
        );
      
    });
    return items;
  }

  const addToFavorite = (char) => {
    onClick(char)
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
          {open ? <Modal item={hero} setOpen={setOpen} favoriteChar={favoriteChar} onClick={onClick}/> : null}
        </div>
      </div>
    </div>
  );
};

export default CharList;
