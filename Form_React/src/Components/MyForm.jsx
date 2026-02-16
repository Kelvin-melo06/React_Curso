import './MyForm.css'
import { useState } from 'react'

const MyForm = ({userName, userEmail, userBio}) => {
    const [name, setName] = useState(userName || "");
    const [email, setEmail] = useState(userEmail || "");
    const [bio, setBio] = useState(userBio || "");
    const [role, setRole] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, bio, role);

        // Validação
        // Envio para o backend

        setName("");
        setEmail("");
        setBio("");
        setRole("");
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name"></label>
                    <input 
                    type="text"
                    name='name'
                    value={name}
                    placeholder='Digite seu nome'
                    onChange={(e) => setName(e.target.value)} 
                />
            </div>
            <div>
                <label>
                    <input 
                    type="email"
                    value={email}
                    placeholder='Digite seu email'
                    onChange={(e) => setEmail(e.target.value)} 
                    />
                </label>
            </div>
            <div>
                <label>
                    <textarea 
                    name="bio"
                    placeholder='Digite algo neste campo'
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    >
                    </textarea>
                </label>
            </div>
            <div>
                <label>
                    <select name="role" value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="">Selecione um papel</option>
                        <option value="admin">Administrador</option>
                        <option value="editor">Editor</option>
                        <option value="viewer">Visualizador</option>
                    </select>
                </label>
            </div>
            <input 
                type="submit"
                value="Enviar" 
             />
        </form>
    </div>
  )
}

export default MyForm