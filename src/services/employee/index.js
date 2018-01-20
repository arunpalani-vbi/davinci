import * as api from './api'
import { AsyncStorage } from 'react-native'

const processEmployeeList = (response) => {
    return JSON.parse(response._bodyText);
};

const onRequestFail = (error) => {
    let errorMessage = 'UNKOWN';
    return { errorMessage }
}

export const getEmployeeList = (token) =>
    api.getEmployeeList(token)
        .then(processEmployeeList).catch(onRequestFail)

