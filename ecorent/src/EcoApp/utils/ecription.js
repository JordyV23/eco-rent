import CryptoJS from 'crypto-js';

// // Función para encriptar datos con AES-256-ECB
// export const encryptData = (data) => {
//   // Convertir datos a UTF-8
//   const utf8Data = CryptoJS.enc.Utf8.parse(data);

//   // Asegurarse de que los datos estén correctamente rellenados
//   const paddedData = CryptoJS.pad.Pkcs7.pad(utf8Data);

//   // Encriptar con AES-256-ECB
//   const encrypted = CryptoJS.AES.encrypt(paddedData, "tu_clave_secreta", { mode: CryptoJS.mode.ECB });

//   // Devolver el resultado como Base64
//   return encrypted.toString();
// };

//! Funcion 2
// import CryptoJS from "crypto-js";

// export const encryptData = (data) => {
//   // Clave para el cifrado AES-256 (deberías manejar de manera segura)
//   const secretKey = "tu_clave_secreta";

//   // Convertir el objeto JSON a una cadena
//   const jsonString = JSON.stringify(data);

//   // Cifrar usando AES-256 en modo ECB
//   const cipherText = CryptoJS.AES.encrypt(jsonString, secretKey, {
//     mode: CryptoJS.mode.ECB,
//     padding: CryptoJS.pad.Pkcs7,
//   });

//   // Convertir el texto cifrado a Base64
//   const encryptedBase64 = cipherText.toString();
//   return encryptedBase64;
// };

//! Funcion 3
// export const encryptData = (data) => {
//   var key = CryptoJS.enc.Utf8.parse('clave_secreta');
//   var iv = CryptoJS.enc.Utf8.parse('');
//   var encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), key, {

//     iv: iv,
//     mode: CryptoJS.mode.ECB,
//     padding: CryptoJS.pad.Pkcs7
//   });
//   return encrypted.toString();
// };

