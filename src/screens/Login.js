import React from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';

export default class Login extends React.Component {
  render() {
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}>

          <Image
            style={styles.stretch}
            resizeMode={Image.resizeMode.contain}
            source={require('../images/360logo.png')}
          />
          <TextInput style={styles.input}
            autoCapitalize="none"
            onSubmitEditing={() => this.passwordInput.focus()}
            autoCorrect={false}
            keyboardType='email-address'
            returnKeyType="next"
            placeholder='Email'
            placeholderTextColor='rgba(225,225,225,0.7)' />
          <TextInput style={styles.input}
            returnKeyType="go"
            ref={(input) => this.passwordInput = input}
            placeholder='Password'
            placeholderTextColor='rgba(225,225,225,0.7)'
            secureTextEntry />
          <TouchableOpacity style={styles.buttonContainer}
          >
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 20,
    backgroundColor: '#3F51B5',
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(225,225,225,0.2)',
    marginBottom: 10,
    padding: 10,
    color: '#fff'
  },
  buttonContainer: {
    backgroundColor: '#2980b6',
    paddingVertical: 15
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700'
  },
  stretch: {
    width: "100%",
  }
});