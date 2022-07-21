import React, { useEffect, useState } from 'react';
import { getUsers } from '../../service';
import UserCard from '../UserCard';

import './style.css';

function UserCardList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadAllUsers() {
      const data = await getUsers();

      setUsers(data);
    }

    loadAllUsers();
  }, []);

  return (
    <div className="cards-container">
      {
        users.map((user) => (
          <UserCard key={`${user.name}-${user.date}`} user={user} />
        ))
      }
    </div>
  );
}

export default UserCardList;
