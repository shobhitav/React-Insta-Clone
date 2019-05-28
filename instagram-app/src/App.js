import React from 'react';
import PostContainer from "./components/PostContainer/PostContainer"
import dummyData from './data/Instagram/dummy-data'; 
import SearchBar from './components/SearchBar/SearchBar'
import './App.css';

function App() {
  return (
    <div className="App">
    <SearchBar/>
            {dummyData.map(post => (
              <div className="postContainer" key={post.id}>
              <PostContainer className="postContainer" key={post.id} post={post}/>
              </div>
            ))}
    </div>
  );
}

export default App;


