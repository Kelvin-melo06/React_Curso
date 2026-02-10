import { useState } from 'react';

const ListRender = () => {
    const [users, setUsers] = useState([
        {id: 1, name: "Matheus", age: 30},
        {id: 2, name: "Pedro", age: 25},
        {id: 3, name: "Maria", age: 28}
    ]);

    const deleteRandom = () => {
        const randomUser = users[Math.floor(Math.random() * users.length)];

        setUsers((prevUsers) =>
            prevUsers.filter((user) => user.id !== randomUser.id)
        );
    }
  return (
    <div>
        <h2>Renderização de Listas</h2>
        <ul>

            {users.map((user) => (

                <li key={user.id}>

                    {user.name} - {user.age}
                    
                </li>

            ))}

        </ul>

        <button onClick={deleteRandom}>         
            Deletar Usuário

        </button>
    </div>
  )
}

export default ListRender