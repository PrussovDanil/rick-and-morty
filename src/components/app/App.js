import '../../style/style.scss'

import AppHeader from "../appHeader/AppHeader";
import Footer from '../footer/Footer';
import NavigationMenu from '../navigationMenu/NavigationMenu';

function App() {
  
  return (
    <div className="App">
      <div className="wrapper">
        <AppHeader/>
        <NavigationMenu />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
