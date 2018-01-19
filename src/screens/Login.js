import React from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform
} from 'react-native';

import {LinearGradient} from 'expo';
export default class Login extends React.Component {
  render() {
    const keyboardVerticalOffset = Platform.OS === 'ios'
      ? 40
      : 0;
    return (
      <View style={styles.container}>

        <KeyboardAvoidingView
          behavior="position"
          style={{
          width: "100%"
        }}
          keyboardVerticalOffset={keyboardVerticalOffset}>
          <LinearGradient
            style={{
            padding: 20
          }}
            colors={['#7ac4e8', '#1287d0']}>
            <View style={styles.logoContainer}>
              <Image
                style={styles.stretch}
                resizeMode={Image.resizeMode.contain}
                source={{
                uri: 'https://raw.githubusercontent.com/DharanBro/VBXSuite/master/Davinci/src/images/360logo.png?token=ATSA1pZfLl3tNvsaVm1wk67jgynNeSkAks5aawH3wA%3D%3D'
              }}/>
            </View>
            <View style={styles.formConatiner}>
              <Text style={styles.loginInfoText}>Login with Zoho credentials</Text>
              <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                onSubmitEditing={() => this.passwordInput.focus()}
                autoCorrect={false}
                keyboardType="email-address"
                returnKeyType="next"
                placeholder="Email"
                placeholderTextColor="#eee"/>
              <TextInput
                style={styles.input}
                returnKeyType="go"
                ref={input => (this.passwordInput = input)}
                placeholder="Password"
                placeholderTextColor="#eee"
                secureTextEntry/>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>LOGIN</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </KeyboardAvoidingView>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: '100%',

    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#3F51B5'

  },
  input: {
    height: 40,

    backgroundColor: 'rgba(225,225,225,0.2)',
    marginBottom: 10,
    padding: 10,
    color: '#fff'
  },
  buttonContainer: {
    backgroundColor: '#fff',
    paddingVertical: 15
  },
  buttonText: {
    color: '#2980b6',
    textAlign: 'center',
    fontWeight: '700'
  },
  stretch: {
    width: 150,
    height: 100
  },
  logoContainer: {
    // order:1, flexGrow:5, flexShrink:1,
    height: "70%",
    // flexBasis:"auto",
    alignItems: 'center',
    justifyContent: 'center',
    // alignSelf:"auto"

  },
  formConatiner: {
    //     order:2, flexGrow:2,   flexShrink:1,
    height: "30%",
    // display:"flex", flexBasis:"auto", alignSelf:"auto",
    flexDirection: "column",
    justifyContent: 'flex-end',
    paddingBottom: 50

  },
  loginInfoText: {
    textAlign: "center",
    paddingBottom: 20,
    color: "white"
  }
});
