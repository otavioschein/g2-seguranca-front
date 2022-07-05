import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Users extends React.Component {
  
  state = {
    users: []
  }

  componentDidMount() {
    axios.get('http://localhost:8082/users')
      .then(res => {
        console.log(res)
        this.setState({users: res.data});
      })
  }

  render() {
    return (
      <div>
        <nav>
          <Link to='/cadastro'>cadastrar</Link>
        </nav>
        <h2>List Users</h2>
        <ul>
          {this.state.users.map(user => 
            <li key={user}>
              <Link to='/user' state={{ name: user.name}}>{user.name}</Link>
              <label> </label>
              <Link to='/user' state={{ name: user.name}}>{user.email}</Link>
            </li>
          )}
        </ul>
        
      </div>
    );
  }
}

