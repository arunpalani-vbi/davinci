import React from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
  AsyncStorage,
  ActivityIndicator
} from 'react-native';

import { LinearGradient } from 'expo';
import validate from 'validate.js'
import * as session from '../services/session'

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            showForm:true
          }
    }
  
    _loginToZoho=()=>{
        if(validate(this.state,constraints)){
            console.log(validate(this.state,constraints))
        }
        else{
            Alert("No Props");
        }


        this.setState({showForm:false});
        session.authenticate(this.state.email,this.state.password).then((data)=>{
            this.setState({showForm:true,password:''});
            if(!data.errorMessage){
                this.props.setLoginState(true);
            }
            else{
                Alert.alert(errorMessageMap[data.errorMessage]?errorMessageMap[data.errorMessage]:data.errorMessage);
            }
        });
    }
  render() {
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;
    return (
      <View style={styles.container}>

        <KeyboardAvoidingView
          behavior="position"
          style={{
            width: '100%',
          }}
          keyboardVerticalOffset={keyboardVerticalOffset}>
          <LinearGradient
            style={{
              padding: 20,
            }}
            colors={['#7ac4e8', '#1287d0']}>
            <View style={styles.logoContainer}>
              <Image
                style={styles.stretch}
                resizeMode={Image.resizeMode.contain}
                source={{
                  uri: 'https://raw.githubusercontent.com/DharanBro/VBXSuite/master/Davinci/src/images/360logo.png?token=ATSA1pZfLl3tNvsaVm1wk67jgynNeSkAks5aawH3wA%3D%3D',
                }}
              />
              {this.state.showForm?null:<ActivityIndicator size={50} color="#fff" />}
            </View>
            {this.state.showForm?<View style={styles.formConatiner}>
              <Text style={styles.loginInfoText}>
                Login with Zoho credentials
              </Text>
              <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                value={this.state.email}
                onChangeText={email => this.setState({email})}
                onSubmitEditing={() => this.passwordInput.focus()}
                ref={input => (this.emailInput = input)}
                autoCorrect={false}
                keyboardType="email-address"
                returnKeyType="next"
                placeholder="Email"
                placeholderTextColor="#eee"
              />
              <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                returnKeyType="go"
                onChangeText={password => this.setState({password})}
                ref={input => (this.passwordInput = input)}
                placeholder="Password"
                placeholderTextColor="#eee"
                secureTextEntry
              />
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={this._loginToZoho}>
                <Text style={styles.buttonText}>LOGIN</Text>
              </TouchableOpacity>
            </View>:<View style={styles.formConatiner}></View>}
          </LinearGradient>
        </KeyboardAvoidingView>

      </View>
    );
  }
}
const errorMessageMap={
    'NO_SUCH_USER':'Email does not exist',
    'INVALID_PASSWORD':'Invalid password',
}
const constraints = {
    email: {
        format: {
            pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            message:'Not a valid email'
        },
      presence: true,
    }
  };

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#1287d0',
  },
  input: {
    height: 40,

    backgroundColor: 'rgba(225,225,225,0.2)',
    marginBottom: 10,
    padding: 10,
    color: '#fff',
  },
  buttonContainer: {
    backgroundColor: '#fff',
    paddingVertical: 15,
  },
  buttonText: {
    color: '#2980b6',
    textAlign: 'center',
    fontWeight: '700',
  },
  stretch: {
    width: 150,
    height: 100,
  },
  logoContainer: {
    // order:1, flexGrow:5, flexShrink:1,
    height: '70%',
    // flexBasis:"auto",
    alignItems: 'center',
    justifyContent: 'center',
    // alignSelf:"auto"
  },
  formConatiner: {
    //     order:2, flexGrow:2,   flexShrink:1,
    height: '30%',
    // display:"flex", flexBasis:"auto", alignSelf:"auto",
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingBottom: 50,
  },
  loginInfoText: {
    textAlign: 'center',
    paddingBottom: 20,
    backgroundColor: 'transparent',
    color: '#FFF',
  },
});
