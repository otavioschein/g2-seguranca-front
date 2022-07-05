import react from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cadastro from '../cadastroUser';
import Users from '../users.js';
import User from '../user.js';
import React from 'react';

export default class Routing extends React.Component {
    render() {
      return (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Users />} exact />
            <Route path='cadastro' element={<Cadastro />} />
            <Route path='user' element={<User />} />
          </Routes>
        </BrowserRouter>
      )
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Routing />);