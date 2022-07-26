import React from 'react';
import { useNavigate } from 'react-router-dom';

import './style.css';

function Header() {
  const navigate = useNavigate();

  function handleClick({ target }) {
    const buttonDictionary = {
      home: () => navigate('/'),
      register: () => navigate('/register'),
    };

    buttonDictionary[target.id]();
  }

  return (
    <div className="header">
      <button
        type="button"
        id="home"
        onClick={handleClick}
      >
        Home
      </button>
      <button
        type="button"
        id="register"
        onClick={handleClick}
      >
        Cadastrar
      </button>
    </div>
  );
}

export default Header;
