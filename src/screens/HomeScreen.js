import React from 'react';
import {StyleSheet} from 'react-native';
import {DrawerNavigator} from 'react-navigation';
import * as firebase from 'firebase'

import EmployeeScreen from './Employee';
import ReviewScreen from './Review';

const HomeDrawer = DrawerNavigator({
    Review: {
        screen:ReviewScreen
    },
    Employee: {
        screen: EmployeeScreen,
    }
}, {
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle',
        initialRouteName: 'Review',
        contentOptions: {
            activeTintColor: '#e91e63',
        },
    });

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    navigateToQuestions=(user)=>{
        this.props.navigation.navigate("Questions",{user});
    }

    render() {
        return (
            <HomeDrawer screenProps={{navigateToQuestion:this.navigateToQuestions}} />

        );
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
