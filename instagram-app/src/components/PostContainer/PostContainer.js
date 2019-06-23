import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import styled from 'styled-components'

const img_heart = require('./icons8-heart-outline-100.png');
const img_bubble = require('./icons8-topic-100.png');

// styling for PostContainer using styled Components.
const PostDivContainer = styled.div `
margin-left:25%;
`
const PostDiv = styled.div `
    float: left;
    margin-bottom: 5%;
`
const Poster = styled.div `
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
const ImageCropper = styled.div `
    width: 50px;
    height: 50px;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
    float: left;
    `
const LogoImage = styled.img `
    height: 100%;
   `
const PosterName = styled.h4 `
    margin-left: 1%;
   `
const PostImg = styled.img `
    width:50vw;
  `
const HeartAndBubble = styled.div `
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
const ImgHeart1 = styled.img `
    width: 5%;
`
const ImgBubble = styled.img `
   margin-left: 1%;
    width: 4%;
`
const CommentInput = styled.input `
  width:55.5%;
  margin-bottom:5%;
`

class PostContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: ""
        };
    }

    changeInputHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this
            .props
            .addNewComment(this.props.post.id, this.state.comment);
        this.setState({comment: ""});
    };

    handleClick = event => {
        event.preventDefault();
        this
            .props
            .incrementLikes(this.props.post.id);
    };

    render() {
        return (

            <PostDivContainer>
                <postDiv>
                    <Poster>
                        <ImageCropper>
                            <LogoImage src={this.props.post.thumbnailUrl} alt=""/>
                        </ImageCropper>
                        <PosterName>{this.props.post.username}</PosterName>
                    </Poster>

                    <PostImg src={this.props.post.imageUrl} alt=""/>
                    <HeartAndBubble>
                        <ImgHeart1 src={img_heart} onClick={this.handleClick} alt=""/>
                        <ImgBubble src={img_bubble} alt=""/>
                    </HeartAndBubble>
                    <p>
                        <strong>{this.props.post.likes}
                            likes</strong>
                    </p>
                    <CommentSection comments={this.props.post.comments}/>
                    <p>{this.props.post.timestamp}</p>
                    <form onSubmit={this.handleSubmit}>
                        <CommentInput
                            type="text"
                            name="comment"
                            value={this.state.comment}
                            placeholder="Add a comment..."
                            id="new-comment"
                            onChange={this.changeInputHandler}/>

                    </form>
                </postDiv>
            </PostDivContainer>
        )
    }
};

export default PostContainer;
