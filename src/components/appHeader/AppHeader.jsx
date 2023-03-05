import './appHeader.scss'

import logo from "../../resources/img/logo.png"
import search from "../../resources/svg/search.svg"
import { useState } from 'react'

const init = [{
  name: 'rick',
  species: 'human',
  gender: 'Male'
},
{
  name: 'Dick',
  species: 'human',
  gender: 'Male'
},
{
  name: 'mick',
  species: 'human',
  gender: 'Male'
}
]
const AppHeader = () => {
  const [filterItem, setFilterItem] = useState(init);
  function onFilter() {
    
  }
  return(
    <div className="header">
      <div className=" header__container">
       <div className="header__logo"><img src={logo} alt=""></img> </div>
       <div className="search">
        <label className='search__label' htmlFor="">Search by</label>
        <select className="search__select" onChange={e=>console.log(e.target.value)} >
          <option className="search__select" value='name' >Name</option>
          <option className="search__select" value="specie">Species</option>
          <option className="search__select" value="gender">Gender</option>
        </select>
       <div className="search__box">
        <input  type="text"  placeholder="" class="search__box--input"> 
        </input>
        <button onClick={onFilter} className="btn">
              <img src={search} alt=""></img>
            </button>
       </div>
       </div>
      </div>
    </div>
  )
}

export default AppHeader