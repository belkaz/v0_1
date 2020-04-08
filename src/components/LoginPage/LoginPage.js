import React, { Component } from "react";
import "./LoginPage.css";

import { connect, dispatch } from 'react-redux';
import ATryToLogin from '../../redux/actions/ALogin';

class LoginPage extends React.Component {  
    constructor ( props ) {
        super ( props );
    }
    tryToLogin = (params) => {
        console.log ( this.props.curPage);
        this.props.tryToLogin();
        console.log ( this.props.curPage);
    }
    render() {
        return (
            <div className = "LoginPageForm">               
                <h1 className = "LoginPageHeader">ДУА "Гімназія №1 г.Ашмяны"</h1>                
                <input 
                    className = "LoginPageLogin"
                    type="text" 
                    placeholder="Ваш логін" 
                    required=""/>     
                <input                      
                    type="password" 
                    placeholder="Ваш пароль" 
                    required="" 
                    id="password" />               
                <input 
                    className = "LoginPageBut"
                    type="submit" 
                    value="Log in"
                    onClick = {this.tryToLogin}/>                       
            </div>         
        )
    }
}   

let storeToProps = ( store ) => {
    return {
        curPage : store.curPage
    }
}
let dispatchToProps = dispatch => {
    return {
        tryToLogin : ()=> dispatch( ATryToLogin() )
   }
}
export default connect(storeToProps, dispatchToProps) (LoginPage);