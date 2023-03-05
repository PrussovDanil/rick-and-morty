import './appHeader.scss'

import logo from "../../resources/img/logo.png"
import search from "../../resources/svg/search.svg"

const AppHeader = () => {
  return(
    <div className="header">
      <div className=" header__container">
       <div className="header__logo"><img src={logo} alt=""></img> </div>
       <div className="search">
        <label className='search__label' htmlFor="">Search by</label>
        <select className="search__select" >
          <option value="1" selected>Name</option>
          <option value="2">Пункт №2</option>
          <option value="3">Пункт №3</option>
          <option value="4">Пункт №4</option>
        </select>
       <div className="search__box">
        <input  type="text"  placeholder="" class="search__box--input"> 
        </input>
        <button className="btn">
              <img src={search} alt=""></img>
            </button>
       </div>
       </div>
      </div>
    </div>
  )
}

export default AppHeader