import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default class Employee extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Manage Employees',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('../images/ic_face.png')}
          />
        ),
      };
    render() {
        return (
            <View>
                <Text>This is Employee Screen</Text>
            </View>
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
