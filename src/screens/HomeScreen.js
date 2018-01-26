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
        //console.log("HERE",user);
        this.props.navigation.navigate("Questions",{user});
    }

    componentDidMount() {
        console.log('start');
        var config = {
            apiKey: "AIzaSyClIA9deJhn3rLS3_TgQ1STWy5XZldPs7s",
            authDomain: "vbi-da-vinci.firebaseapp.com",
            databaseURL: "https://vbi-da-vinci.firebaseio.com",
            projectId: "vbi-da-vinci",
            storageBucket: "vbi-da-vinci.appspot.com",
            messagingSenderId: "685626298086"
        };
        firebase.initializeApp(config);
        var database = firebase.database();
        var leadsRef = database.ref('categories');
        console.log(leadsRef);
        leadsRef.orderByChild("height").on("child_added", function (snapshot) {
            console.log(snapshot.key + " was " + snapshot.val().height + " meters tall");
        });
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
