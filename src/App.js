import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/layouts/Navbar";
import Users from "./components/users/Users";
import axios from 'axios';

class App extends Component {
  state = {
    users:[],
    loading: false
  }
  async componentDidMount() {
    this.setState({
      loading: true
    })
    const res = await axios.get('https://api.github.com/users');
    this.setState({
      loading: false,
      users:res.data
    })
  }

  render(){
    return (
      <div className="App">
       <Navbar />
       <div className="container">
       <Users loading={this.state.loading} users={this.state.users}  />
       </div>
      </div>
    );
  }

}

export default App;
