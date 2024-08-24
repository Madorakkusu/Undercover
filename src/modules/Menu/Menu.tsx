import { FC } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu: FC = () => {
  return (
    <div className='menu'>
      <i className='fa-solid fa-masks-theater logo'></i>
      <h1>Undercover</h1>
      <div className='menu-links'>
        <Link to='play'>
          <i className='fa-solid fa-play' /> Jouer
        </Link>
        <Link to='settings'>
          <i className='fa-solid fa-gears'></i> Réglages
        </Link>
      </div>
    </div>
  );
};

export default Menu;
