import React from 'react';
import Comment from './Comment';

const CommentSection = props => {
    return (
        <div>
            {props.comments.map(comment => (
              <Comment key={comment.id} comment={comment}/>
              ))}
        </div>
    )
};

export default CommentSection;
