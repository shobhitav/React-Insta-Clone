import React from 'react';
import withAuthenticate from "./components/authentication/withAuthenticate"
import SearchBar from './components/SearchBar/SearchBar'
import PostsPage from './components/PostContainer/PostsPage';
import LoginPage from './components/Login/Login';
import styled from 'styled-components'



const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(LoginPage);

class App extends React.Component {
  constructor() {
    super();
    this.state = "";
  }

  render() {
    return (
      <div className="App">
        <SearchBar searchByPosterId={this.searchByPosterId} />
        <ComponentFromWithAuthenticate />
      </div>
    );
 }
}
export default App;


