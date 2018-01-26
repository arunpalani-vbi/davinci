import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

export default class Questions extends React.Component{
  
    render(){
        console.log(this.props.navigation.state.params);
        return (<View><Text> Hello</Text></View>);
    }
}
