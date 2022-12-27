import Link from "next/link";
import { useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Petya" },
    { id: 2, name: "Vasya" },
  ]);

  return (
    <div>
      <h1>Users list</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`} legacyBehavior>
              <a>{user.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
