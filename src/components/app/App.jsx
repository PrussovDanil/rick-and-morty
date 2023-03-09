import '../../style/style.scss'

import AppHeader from "../appHeader/AppHeader";
import Footer from '../footer/Footer';
import NavigationMenu from '../navigationMenu/NavigationMenu';
import { useState } from 'react';

function App() {
  const [filter, setFilter] = useState({})
  const  onFilter= (data)=> {
    setFilter(data)
  }

  return (
    <div className="App">
      <div className="wrapper">
        <AppHeader onSubmit={onFilter}/>
        <NavigationMenu filter={filter}/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
