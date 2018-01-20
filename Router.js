import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Login from './src/screens/Login'
import HomeScreen from './src/screens/HomeScreen'

import { StackNavigator } from 'react-navigation';
const AppNavigator = StackNavigator({
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
            title: "Home"
        }
    }
})


export default class Router extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }
    setLoginState=(loginState)=>{
        this.setState({isLoggedIn:loginState});
    }
    
    render() {
        if (this.state.isLoggedIn) {
            return (
                <AppNavigator />
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
