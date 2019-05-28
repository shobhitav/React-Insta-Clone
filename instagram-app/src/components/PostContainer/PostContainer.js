import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css'

const img_heart = require('./icons8-heart-outline-100.png');
const img_bubble = require('./icons8-topic-100.png');


const PostContainer = props => {
    return (
        <div>
            <div className="post-div">
                <div className="poster">
                    <div className="image-cropper">
                        <img className="logo" src={props.post.thumbnailUrl} alt=""/>
                    </div>
                    <h4 className="poster-name">{props.post.username}</h4>
                </div>
                
                <img className="post-img" src={props.post.imageUrl} alt=""/>
                <div className="heart-and-bubble" >
                    <img src={img_heart} className="img-heart1" alt="" />
                    <img src={img_bubble} className="img-bubble" alt="" />
                </div>
                <p><strong>{props.post.likes} likes</strong></p>
                <CommentSection comments={props.post.comments}/>
                <p>{props.post.timestamp}</p>
                <input className="comment-input" type="text" placeholder="Add a comment..."/>
            </div>
        </div>
    )
};

export default PostContainer;
