import * as api from './api'
import { AsyncStorage} from 'react-native'

const onRequestSuccess =async function(response) {
    let responseArray=response._bodyText.split('\n');
    let errorMessage='';
    let authToken='';
    let responseData=responseArray[2];
    if(responseData.indexOf("CAUSE")==0){
        errorMessage=responseData.replace("CAUSE=","");
    }
    else if(responseData.indexOf("AUTHTOKEN")==0){
        authToken=responseData.replace("AUTHTOKEN=","");
    }
    else{
        errorMessage='UNKOWN';
    }
    if(!errorMessage){
        try {
            await AsyncStorage.setItem('authToken', authToken);
          } catch (error) {
              console.log(error);
            errorMessage='SAVE_ERROR'
          }
    }
   
    return {errorMessage,authToken};
};

const onRequestFail=(error)=>{
    let  errorMessage='UNKOWN';
    return {errorMessage}
}

export const authenticate = (email, password) =>
	  api.authenticate(email, password)
        .then(onRequestSuccess).catch(onRequestFail)

