import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import EmployeeScreen from './Employee';
import ReviewScreen from './Review';


const HomeDrawer = DrawerNavigator({
    Review: {
        screen: ReviewScreen,
    },
    Employee: {
        screen: EmployeeScreen,
    },
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
    render() {
        return (
            <HomeDrawer />

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
