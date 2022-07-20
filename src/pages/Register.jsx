import React, { useState } from 'react';
import Header from '../components/Header';
import sendUser from '../service';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [archive, setArchive] = useState();
  const [error, setError] = useState('');

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

    if (message.length < 10) return setError('Mensagem precisa ter mais de 10 caracteres');

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
      <div>
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

        {error.length && <span>{error}</span>}

        <button onClick={createUser} type="button">Cadastrar</button>
      </div>
    </div>
  );
}

export default Register;
