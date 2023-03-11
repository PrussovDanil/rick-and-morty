import '../../style/style.scss'

import { createContext, useState } from 'react';

import AppHeader from "../appHeader/AppHeader";
import Footer from '../footer/Footer';
import NavigationMenu from '../navigationMenu/NavigationMenu';

export const PageContext = createContext(1)

function App() {
  const [page, setPage] = useState(1)
  const [filter, setFilter] = useState({filter: '', input: ''})
  const  onFilter= (data)=> {
    setFilter(data)
  }

  return (
    <div className="App">
      <div className="wrapper">
        <PageContext.Provider value={{page, setPage,filter}}>
          <AppHeader onSubmit={onFilter}/>
          <NavigationMenu filter={filter}/>
          <Footer />
        </PageContext.Provider>
      </div>
    </div>
  );
}

export default App;
