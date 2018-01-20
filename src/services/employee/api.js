import endPoints from '../api/endpoints'

export const getEmployeeList = (token) => {
    return fetch(endPoints.zoho.employeeView + `?authtoken=${token}`, {
        method: 'GET'
    });
}