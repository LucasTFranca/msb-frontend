import React, { useState } from 'react';

function Home() {
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
      archive: () => setArchive(value),
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

    if (!error.length) {
      console.log('Criando usuário');
    }
  }

  return (
    <div>
      <label htmlFor="name">
        <input onChange={handleChange} id="name" type="text" />
      </label>
      <label htmlFor="email">
        <input onChange={handleChange} id="email" type="email" />
      </label>
      <label htmlFor="phone">
        <input onChange={handleChange} id="phone" type="text" />
      </label>
      <label htmlFor="message">
        <textarea onChange={handleChange} id="message" type="text" />
      </label>
      <label htmlFor="archive">
        <input onChange={handleChange} id="archive" type="file" />
      </label>

      {error.length && <span>{error}</span>}

      <button onClick={createUser} type="button">Cadastrar</button>
    </div>
  );
}

export default Home;
