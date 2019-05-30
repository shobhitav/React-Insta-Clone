import React from 'react';
import './SearchBar.css';

const img_logo = require('./icons8-instagram-100.png');
const img_label = require('./instagram-label.png');
const img_compass = require('./icons8-compass-48.png');
const img_heart = require('./icons8-heart-outline-100.png');
const img_profile = require('./icons8-customer-32.png');

class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {searchinput: ""};
    }

    changeInputHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    
    handleSubmit = event => {
        event.preventDefault();
        this.props.searchByPosterId(this.state.searchinput);
        this.setState({ searchinput: "" });
    };

    render() {
        return (
            <div className="searchbar">
                <div className="left">
                    <img src={img_logo} className="img-logo" alt=""/>
                    <div className="vertical-line"/>
                    <img src={img_label} className="img-label" alt=""/>
                </div>
                <div className="middle">
                    <form className="search-form" onSubmit={this.handleSubmit}>
                        <input 
                            type="text" 
                            className="search-input" 
                            name="searchinput" 
                            placeholder="Search" 
                            onChange={this.changeInputHandler}/>
                    </form>
                </div>
                <div className="right">
                    <img src={img_compass} className="img-compass" alt="" />
                    <img src={img_heart} className="img-heart" alt="" />
                    <img src={img_profile} className="img-profile" alt=""/>
                </div>
            </div>
        );        
    }
};

export default SearchBar;