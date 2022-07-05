import React, {useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Cadastro() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [enderecoWeb, setEnderecoWeb] = useState('');
    const [professionalExp, setProfessionalExp] = useState('');

    const handleChange =(e)=>{
      setName(e.target.value);
    }
    
    const handleTelefoneChange =(e)=>{
      setTelefone(e.target.value);
    }

    const handleEmailChange =(e)=>{
      setEmail(e.target.value);
    }

    const handleEnderecoWebChange =(e)=>{
      setEnderecoWeb(e.target.value);

    }

    const handleProfessionalExperience =(e)=>{
      setProfessionalExp(e.target.value);
    }

    const handleSubmit=(e)=>{

      let json = {
        name: `${name}`,
        email: `${email}`,
        telefone: `${telefone}`,
        enderecoWeb: `${enderecoWeb}`,
        professionalExperience: `${professionalExp}`
      }

      axios.post('http://localhost:8082/users', json)
        .then(res => console.log(res))
        .catch(err => console.log(err))

    }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={(e) => {handleSubmit(e)}}>
        <nav>
          <Link to='/'>home</Link>
        </nav>
        <h3> Sign-up Form </h3>
          <label >Name:</label><br/>
          <input type="text" value={name} required onChange={(e) => {handleChange(e)}} /><br/>
          
          <label>Email:</label><br/>
              <input type="email" value={email} required onChange={(e) => {handleEmailChange(e)}} /><br/>
          
          <label>Telefone:</label><br/>
          <input type="text" value={telefone} onChange={(e) => {handleTelefoneChange(e)}} /><br/>

          <label>Endereco Web:</label><br/>
          <input type="text" value={enderecoWeb} onChange={(e) => {handleEnderecoWebChange(e)}} /><br/>

          <label>Professional Experience:</label><br/>
          <input type="text" value={professionalExp} required onChange={(e) => {handleProfessionalExperience(e)}} /><br/>
                  
          <input type="submit" value="Submit"/>
        </form>
      </header>
    </div>
  );
}

export default Cadastro;