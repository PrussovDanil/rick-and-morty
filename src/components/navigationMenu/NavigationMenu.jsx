import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useContext, useEffect, useState } from "react";

import CharList from '../CharList/CharList'
import { PageContext } from "../app/App";
import axios from "axios";

const NavigationMenu = ({filter}) => {
  const [charList, setCharList] = useState([]);
  const [favoriteChar, setFavoriteChar] = useState([]);
  const {page} = useContext(PageContext)

  useEffect(() => {
      setCharList([])
      onRequest(page);
    
  }, [page]);
 
  const onFilter = (filter) =>{

    switch (filter.filter) {
      case 'name':
        return  charList.filter( item => item.name.toLowerCase().indexOf(filter.input.toLowerCase()) !== -1 )
        
      case 'species':
        return  charList.filter(item => item.species.toLowerCase().indexOf(filter.input.toLowerCase()) !== -1)
        
      case 'gender':
        return  charList.filter( (item) => item.gender.toLowerCase().indexOf(filter.input.toLowerCase()) !== -1)
        
      default:
        return charList
       
    }
    
    
  }  

  const onRequest = (page) => {
    axios
      .get(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then(res => {
        res.data.results.forEach((hero) =>
          axios.get(hero.episode[hero.episode.length - 1]).then((episode) => {
            let newHero = hero;

            newHero.episodeLast = episode.data.episode;

            setCharList((state) => [...state, newHero])
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

  return (
    <div className="nav__menu">
      <Tabs className="nav__container">
        <TabList >
          <Tab >All Characters </Tab>
          <Tab >Favorites</Tab>
        </TabList>
        <TabPanel >
          <CharList charList={filter.input !== ''? onFilter(filter) : charList} favoriteChar={favoriteChar} onClick={addToFavorite}/>
        </TabPanel>
        <TabPanel>
          <CharList charList={favoriteChar} favoriteChar={favoriteChar} onClick={addToFavorite}/>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default NavigationMenu;
