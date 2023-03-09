import './footer.scss'

import { useEffect, useState } from 'react';

import { ReactComponent as Arrow } from '../../resources/svg/arrow.svg';
import axios from 'axios';

const Footer = () => {
  const [test, setTest] = useState([])
  useEffect(()=> {
    onRequest()
  },[])
  const onRequest = () => {
    for (let index = 1; index <2; index++) {
      axios.get(`https://rickandmortyapi.com/api/character?page=${index}`).then(sata => {console.log(sata.data.info);console.log(sata.data.results[1])})
      
    }
  }
  console.log(test);
  return(
    <div className="footer">
      <div className="footer__container">
        <ul className="pagination">
          <li className="pagination__number pagination--small"><Arrow/></li>
          <li className="pagination__number pagination--active">1</li>
          <li className="pagination__number">2</li>
          <li className="pagination__number">3</li>
          <li className="pagination__number">4</li>
          <li className="pagination__number">...</li>
          <li className="pagination__number">9</li>
          <li className="pagination__number pagination--small revers"><Arrow/></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer;