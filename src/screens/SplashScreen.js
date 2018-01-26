import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Animated
} from 'react-native';

import { LinearGradient } from 'expo';

export default class SplashScreen extends React.Component {

  state = {
    fadeAnim: new Animated.Value(0),  
  }
  componentDidMount() {
    Animated.timing(                  
      this.state.fadeAnim,          
      {
        toValue: 1,                   
        duration: this.props.splashScreenTimeout,              
      }
    ).start();                       
  }
  render() {
    let { fadeAnim } = this.state;
    return (

      <View style={styles.container}>


        <LinearGradient
          style={{
            padding: 20,
          }}
          colors={['#7ac4e8', '#1287d0']}>
          <Animated.View               
            style={{
              opacity: fadeAnim,         
            }}>
            <View style={styles.logoContainer}>

              <Image
                style={styles.stretch}
                resizeMode={Image.resizeMode.contain}
                source={require('../images/360logo.png')}
              />
            </View>
          </Animated.View>
        </LinearGradient>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    backgroundColor: '#1287d0',
  },
  stretch: {
    width: 150,
    height: 100,
  },
  logoContainer: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
