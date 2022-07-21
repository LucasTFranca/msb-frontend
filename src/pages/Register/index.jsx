import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { sendUser } from '../../service';

import './style.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [archive, setArchive] = useState();
  const [error, setError] = useState('');
  const [errorVisible, setErrorVisible] = useState(false);

  useEffect(() => {
    if (error.length > 0) setErrorVisible(true);
    else setErrorVisible(false);
  }, [error]);

  function handleChange({ target }) {
    const { id, value } = target;

    const inputDictionary = {
      name: () => setName(value),
      email: () => setEmail(value),
      phone: () => setPhone(value),
      message: () => setMessage(value),
      archive: () => setArchive(target.files[0]),
    };

    inputDictionary[id]();
  }

  function verifyInputs() {
    if (name.length < 3) return setError('Nome precisa ter mais de 3 caracteres');

    if (!email.includes('@')) return setError('Email inválido');

    if (phone.length < 8) return setError('Telefone precisa ter mais de 8 dígitos');

    if (message.length < 10 || message.length > 100) return setError('Mensagem precisa ter mais de 10 caracteres e menos de 100');

    if (!archive) return setError('Você deve adicionar um arquivo');

    return setError('');
  }

  function createUser() {
    verifyInputs();

    const user = {
      name,
      email,
      phone,
      message,
    };

    if (!error.length) sendUser(user, archive);
  }

  return (
    <div>
      <Header />
      <div className="register">
        <div className="container">
          <label htmlFor="name">
            Nome:
            <input onChange={handleChange} id="name" type="text" />
          </label>
          <label htmlFor="email">
            Email:
            <input onChange={handleChange} id="email" type="email" />
          </label>
          <label htmlFor="phone">
            Telefone:
            <input onChange={handleChange} id="phone" type="tel" />
          </label>
          <label htmlFor="message">
            Mensagem:
            <textarea onChange={handleChange} id="message" type="text" />
          </label>
          <input onChange={handleChange} id="archive" type="file" />

          <button onClick={createUser} type="button">Cadastrar</button>

          {errorVisible && <span className="error">{error}</span>}
        </div>
      </div>
    </div>
  );
}

export default Register;
