import React, { useEffect, useState } from 'react';
import { getUsers } from '../service';
import UserCard from './UserCard';

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
    <div>
      {
        users.map((user) => (
          <UserCard key={`${user.name}-${user.date}`} user={user} />
        ))
      }
    </div>
  );
}

export default UserCardList;
