import React from 'react';
import ls from 'local-storage';

const withAuthenticate = PostsPage => LoginPage => class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loggedIn: false};
  }

  componentDidMount() {
    //ls.clear();
    var lsCookie = ls.get('cookie');
    this.setState(lsCookie ? {loggedIn: true} : {loggedIn: false});
  }
  
  setLoggedIn = () => {
    this.setState({loggedIn: true});
  }

  render() {
    if (this.state.loggedIn) {
      return <PostsPage />;
    } else {
      return <LoginPage setLoggedIn={this.setLoggedIn}/>;
    }
  }
};

// const withAuthenticate = App =>
//   class extends React.Component {
//     render() {
//       return <App />;
//     }
//   };

export default withAuthenticate;


