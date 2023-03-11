import '../../style/style.scss'

import logo from "../../resources/img/logo.png"
import search from "../../resources/svg/search.svg"
import { useForm } from 'react-hook-form'

const AppHeader = ({onSubmit}) => {
  const { register, handleSubmit} = useForm();
  
  const onFilter = (data) => {onSubmit(data)};
  
  return(
    <div className="header">
      <div className=" header__container">
       <div className="header__logo"><img src={logo} alt=""></img> </div>
        <form className="search" onSubmit={handleSubmit(onFilter)}>
          <label className='search__label' htmlFor="">Search by</label>
          <select className="search__select" {...register("filter")}>
            <option className="search__select" value="name">Name</option>
            <option className="search__select" value="species">Species</option>
            <option className="search__select" value="gender">Gender</option>
          </select>
          <div className="search__box">
            <input className="search__box--input" {...register("input")} />
            <button type= 'submit'><img src={search} alt=""></img></button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AppHeader