import React from 'react';
import PropTypes from 'prop-types';

function UserCard({ user }) {
  const {
    name, email, phone, fileName, message,
  } = user;

  return (
    <div>
      <span>{name}</span>
      <span>{email}</span>
      <span>{phone}</span>
      <span>{fileName}</span>
      <span>{message}</span>
    </div>
  );
}

UserCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    fileName: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserCard;
