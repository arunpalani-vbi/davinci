import * as api from './api'
import { AsyncStorage } from 'react-native'

const processEmployeeList = (response) => {
    var responseData=JSON.parse(response._bodyText);
    if(responseData.errors && responseData.errors.code==7202){
        //Need to rewrite -  AsyncStorage.removeItem is a promise
        AsyncStorage.removeItem("authToken");
        return {errorMessage:"Invalid Token",responseData:responseData}
    }
    return responseData;
};

const onRequestFail = (error) => {
    console.log(error);
    //Need to rewrite -  AsyncStorage.removeItem is a promise
    AsyncStorage.removeItem("authToken");
    let errorMessage = 'UNKNOWN';
    return { errorMessage }
}

export const getEmployeeList = (token) =>
    api.getEmployeeList(token)
        .then(processEmployeeList).catch(onRequestFail)

