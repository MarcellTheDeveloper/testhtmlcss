import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
const HomePage = () => {
  return (
    <div className='mainSection'>
      <div className='navBar'>
        <MenuIcon className='menuIcon' />
      </div>
      <div className='section1'>
        <div className='section1Title'>
          <h3>Jelentkezés</h3>
        </div>
        <input className='normalInput' type='text' placeholder='Név' />
        <input className='normalInput' type='email' placeholder='Email cím' />
        <input
          className='normalInput'
          type='number'
          placeholder='Telefonszám'
        />
        <div className='sectionChecbox'>
          <input type='checkbox' />
          <p>
            Elolvastam és elfogadom az <a href='#'>Adatkezelési tájékoztatót</a>
          </p>
        </div>
        <button>ELKÜLD</button>
      </div>
    </div>
  );
};

export default HomePage;
