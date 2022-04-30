import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

const Header = () => (
  <header>
    <h1>Cosmetic Products/ Makeups</h1>
    <div className="icons">
      <FontAwesomeIcon icon={faGear} />
    </div>
  </header>
);

export default Header;
