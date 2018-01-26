import React from 'react';
import { StyleSheet, View, Text,FlatList} from 'react-native';
import * as firebase from 'firebase'
import {ReactFireMixin} from 'reactfire';

export default class Questions extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            questions:[]
        }
    }
    componentWillMount() {
        var config = {
            apiKey: "AIzaSyClIA9deJhn3rLS3_TgQ1STWy5XZldPs7s",
            authDomain: "vbi-da-vinci.firebaseapp.com",
            databaseURL: "https://vbi-da-vinci.firebaseio.com",
            projectId: "vbi-da-vinci",
            storageBucket: "vbi-da-vinci.appspot.com",
            messagingSenderId: "685626298086"
        };
        firebase.initializeApp(config);
        var ref = firebase.database().ref("questions");
        ref.on("value",(snapshot)=>{
            this.setState({questions:snapshot.val()})
        });
      }
    render(){
        console.log(this.props.navigation.state.params);
        console.log(this.state.questions);
        if(this.state.questions)
        return (<View>
            <FlatList
            data={this.state.questions}
            renderItem={({question}) => <Text>{console.log(question)}</Text>}
            />
        </View>);
        else
        return(null)
    }
}
