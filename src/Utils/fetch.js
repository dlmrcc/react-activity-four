import { serverRoutes } from './const';

export const LoginAPI = (username, password) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
        "username": username,
        "password": password
    });
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw
    };
    return fetch(serverRoutes.Login, requestOptions)
}

export const AddEmployeeAPI = (
    lastname,
    firstname,
    middlename,
    sex,
    civilStatus,
    birthdate,
    street,
    barangay,
    municipalCity,
    province,
    country
) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
        "lastname": lastname,
        "firstname": firstname,
        "middlename": middlename,
        "sex": sex,
        "civilStatus": civilStatus,
        "birthdate": birthdate,
        "street": street,
        "barangay": barangay,
        "municipalCity": municipalCity,
        "province": province,
        "country": country


    });
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw
    };
    return fetch(serverRoutes.AddEmployee, requestOptions)
}

