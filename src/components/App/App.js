import React from 'react';
import './App.css';

import { connect } from 'react-redux';

import LoginPage from '../LoginPage/LoginPage';
import MainPage from '../MainPage/MainPage';

class App extends React.Component {
  constructor ( props ) {
    super ( props ); 
    this.state = {
      curPage : <LoginPage/>,
      curChanges : 0
    }
  }
  retApp = (x) => {
    switch ( x ) {
      case "LOGIN" :
        return <LoginPage/>;
        break;
      case "MAINPAGE" :
        return <MainPage/>;
        break;
      default:
        return <LoginPage/>
    }
  }
  componentDidUpdate = () => {       
    if ( this.state.curChanges === 0) {
      this.setState((state, props) => ({
            curPage: this.retApp(this.props.curPage),
            curChanges : 1
          }));
    }         
  }
  render() {
    return (
      <div className="App">
        {this.state.curPage}
      </div>
    )
  }
}

let mapStateToProps = ( store ) => {
  return {
    curPage : store.curPage
  }
}

export default connect(mapStateToProps) (App);
