import './footer.scss'

import { ReactComponent as Arrow } from '../../resources/svg/arrow.svg';

const Footer = () => {
  
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