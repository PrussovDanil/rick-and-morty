import "./navigationMenu.scss";

import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useEffect, useState } from "react";

import CharList from '../CharList/CharList'
import axios from "axios";

const NavigationMenu = () => {
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
  const addToFavorite = (char) => {
    if (!favoriteChar.includes(char)) {
      setFavoriteChar([...favoriteChar, char]);
    } else {
      setFavoriteChar([...favoriteChar.filter((item) => item !== char)]);
    }
  };
  
  
  console.log(charList);
  return (
    <div className="nav__menu">
      <Tabs className="nav__container">
        <TabList >
          <Tab >All Characters </Tab>
          <Tab >Favorites</Tab>
        </TabList>
        <TabPanel >
          <CharList charList={charList} favoriteChar={favoriteChar} onClick={addToFavorite}/>
        </TabPanel>
        <TabPanel>
          <CharList charList={favoriteChar} favoriteChar={favoriteChar} onClick={addToFavorite}/>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default NavigationMenu;
