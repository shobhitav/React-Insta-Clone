import React from 'react';
import PostContainer from "./components/PostContainer/PostContainer"
import {default as dummyDataFile} from './data/Instagram/dummy-data'; 
import SearchBar from './components/SearchBar/SearchBar'
import ls from 'local-storage'
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    var lsArr = ls.get('dummyData')||[];
    this.state = lsArr.length == 0 ? {dummyData:dummyDataFile} : {dummyData:lsArr};
  }

  addNewComment = (postId, commentText) => {
    var maxId = 0;
    // this.state.dummyData.forEach(obj => {
    //   if (obj.id == postId) {
    //     obj.comments.forEach ( comment => maxId = maxId > comment.id ? maxId : comment.id);
    //     var newComment = {};
    //     newComment["id"] = ""+ (parseInt(maxId)+1);
    //     newComment["username"] = "shobhitav";
    //     newComment["text"] = commentText;
    //     obj.comments.push(newComment);
    //     console.log(obj.comments);
    //   }
    // })

    //find the current post
    var currentPost = this.state.dummyData.find(post => post.id === postId);

    //find the maxium comment id in current post
    currentPost.comments.forEach ( comment => Math.max(comment.id, maxId));

    //create a new comment JS object corresponding to passed commentText
    var newComment = {};
    newComment["id"] = ""+ (parseInt(maxId)+1);
    newComment["username"] = "shobhitav";
    newComment["text"] = commentText;

    //append the newly created comment object to current post's comments
    currentPost.comments.push(newComment);

    ls.set("dummyData", this.state.dummyData);
  };

  incrementLikes = postId => {
    // this.state.dummyData.forEach(obj => {
    //   if (obj.id == postId) {
    //     obj.likes = obj.likes+1;
    //   }
    // });
    
    this.state.dummyData.find(post => post.id === postId).likes++;

    this.setState({dummyData:this.state.dummyData});

    ls.set("dummyData", this.state.dummyData);
  };

  searchByPosterId = posterId => {
    this.setState({dummyData:this.state.dummyData.filter(post => post.username === posterId)});
  };

  render() {
    return (
      <div className="App">
      <SearchBar searchByPosterId={this.searchByPosterId} />
        {
          this.state.dummyData.map (
            post => (
              <div className="postContainer" key={post.id}>
                <PostContainer className="postContainer" key={post.id} post={post} addNewComment={this.addNewComment} incrementLikes={this.incrementLikes} />
              </div>
            )
          )
        }
      </div>
    );
 }
}
export default App;


