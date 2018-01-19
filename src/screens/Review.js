import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

    
export default class Review extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Review Employees',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('../images/ic_rate_review.png')}
          />
        ),
      };
    render() {
        return (
            <View>
                <Text>This is Review Screen</Text>
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
