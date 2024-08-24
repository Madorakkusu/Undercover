import { FC } from 'react';
import './Settings.css';
import { Link } from 'react-router-dom';

const Settings: FC = () => {
  return (
    <div className='settings'>
      <div className='navbar'>
        <Link to='/'>
          <i className='fa-solid fa-arrow-left'></i>
        </Link>
      </div>
      Settings
    </div>
  );
};

export default Settings;
