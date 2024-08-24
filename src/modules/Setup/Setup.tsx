import { FC } from 'react';
import { Link } from 'react-router-dom';
import './Setup.css';

const Setup: FC = () => {
  return (
    <div className='setup'>
      <div className='navbar'>
        <Link to='/'>
          <i className='fa-solid fa-arrow-left'></i>
        </Link>
      </div>
      Setup
    </div>
  );
};

export default Setup;
