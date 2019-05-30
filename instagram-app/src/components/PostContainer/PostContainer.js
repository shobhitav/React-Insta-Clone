import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css'

const img_heart = require('./icons8-heart-outline-100.png');
const img_bubble = require('./icons8-topic-100.png');

class PostContainer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {comment: ""};
    }

    changeInputHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    
    handleSubmit = event => {
        event.preventDefault();
        this.props.addNewComment(this.props.post.id, this.state.comment);
        this.setState({ comment: "" });
    };

    handleClick = event => {
        event.preventDefault();
        this.props.incrementLikes(this.props.post.id);
    };
    
    render() {
        return (
            <div>
                <div className="post-div">
                    <div className="poster">
                        <div className="image-cropper">
                            <img className="logo" src={this.props.post.thumbnailUrl} alt=""/>
                        </div>
                        <h4 className="poster-name">{this.props.post.username}</h4>
                    </div>

                    <img className="post-img" src={this.props.post.imageUrl} alt=""/>
                    <div className="heart-and-bubble">
                        <img src={img_heart}  onClick={this.handleClick}  className="img-heart1" alt=""/>
                        <img src={img_bubble} className="img-bubble" alt=""/>
                    </div>
                    <p>
                        <strong>{this.props.post.likes} likes</strong>
                    </p>
                    <CommentSection comments={this.props.post.comments}/>
                    <p>{this.props.post.timestamp}</p>
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            type="text" 
                            name="comment"
                            value={this.state.comment}
                            placeholder="Add a comment..."
                            id="new-comment"
                            onChange={this.changeInputHandler}
                            className="comment-input" />
                    </form>
                </div>
            </div>
        )
    }
};

export default PostContainer;
