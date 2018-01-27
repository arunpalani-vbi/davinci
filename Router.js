import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';

import _ from 'lodash'

import * as session from './src/services/session'

import Login from './src/screens/Login'
import HomeScreen from './src/screens/HomeScreen'
import SplashScreen from './src/screens/SplashScreen'
import Questions from './src/screens/Questions'

import { StackNavigator } from 'react-navigation';
const AppNavigator = StackNavigator({
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
            title: "Home"
        }
    },
    Questions:{
        screen:Questions,
        navigationOptions:{
            title:"Questions"
        }
    }
})

const splashScreenTimeout = 2000;
export default class Router extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            disableRender: true,
            showSplashScreen: true
        }
    }
    componentWillMount() {
        _.delay(function () {
            this.setState({ showSplashScreen: false });
        }.bind(this), splashScreenTimeout);
        if (!this.state.isLoggedIn) {
            session.getToken().then((token)=>{
                console.log(token);
                if (token) {
                    this.setState({ isLoggedIn: true, disableRender: false });
                }
                else {
                    this.setState({ disableRender: false });
                }
            });
        }
    }
    setLoginState = (loginState) => {
        this.setState({ isLoggedIn: loginState });
    }

    render() {
        if (this.state.showSplashScreen || this.state.disableRender) {
            return (<SplashScreen splashScreenTimeout={splashScreenTimeout} />);
        }
        if (this.state.isLoggedIn) {
            return (
                <AppNavigator navigation={this.props.navigation} />
            );
        } else {
            return (
                <Login setLoginState={this.setLoginState} />
            );
        }

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
