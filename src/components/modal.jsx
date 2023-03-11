import {ReactComponent as Genderless} from "../resources/svg/Genderless.svg";
import { ReactComponent as Star } from "../resources/svg/star.svg";

const Modal = ({item, setOpen, favoriteChar, onClick}) => {
  
  return (
    <div className="modal">
      <div className="modal__container">
        <div className="modal__id">Character ID: {item.id}</div>
        <div className="modal__img"><img src={item.image} alt=""></img></div>
        <div className="modal__name">{item.name}</div>
        <div className="modal__gender">Gender: {item.gender}</div>
        <div className="modal__species">Species:{item.species}</div>
        <div className="modal__episode">Last episode: {item.episodeLast}</div>
        <button
              onClick={() => onClick(item)}
              className="char__list"
            >
              <Star className={favoriteChar.includes(item)? 'star': ''} />
            </button>
        <button className="modal__close" onClick={() => setOpen(false)}><Genderless/></button>
      </div>
    </div>
  );
};
export default Modal;