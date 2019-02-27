const URL = 'http://192.168.0.150:8001/smartads/api/v1/';
import {Alert} from "react-native";

  
export const getAllServices = (type,jwt_token) => {
    console.warn(type);
   console.warn("AFTERAPI ",jwt_token);
   let data = {
        method:'GET',
         credentials: 'same-origin',
        mode: 'same-origin',
        headers: {
          'Accept':       'application/json',
          'Content-Type': 'application/json',

          'Authorization':jwt_token,
          
        }
      }
    return fetch(URL + type,data)
        .then((response) => response.json()).then((responseData)=>{console.warn(responseData); return responseData;});
}
export const getAllServicesById = (type, no) => {
    return fetch(URL + type + no)
        .then((response) => response.json());
}

export const postcustomer = (type, value) => {

    let data = {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'same-origin',
        body: JSON.stringify(value),
        headers: {
          'Accept':       'application/json',
          'Content-Type': 'application/json',

          'Authorization':'jwt_token',
          
        }
      }
      console.log('out of the')
      return fetch(URL+type, data)
              .then(response => response.json())
              .then((responseData) => {
      console.warn(responseData);
      
      return responseData;

    })  ;// promise
              
      } 