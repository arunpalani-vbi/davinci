import endPoints from '../api/endpoints'

export const authenticate = (email, password) => {
    let formData = new FormData();
    formData.append("SCOPE", 'Zohopeople/peopleapi');
    formData.append("EMAIL_ID", email);
    formData.append("PASSWORD", password);
    return fetch(endPoints.zoho.login, {
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        body:formData
        });
}