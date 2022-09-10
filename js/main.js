
// cifrado AES
var encrypted_AES = CryptoJS.AES.encrypt("hola mundo", "Passphrase");
console.log(encrypted_AES.toString())
var decrypted_AES = CryptoJS.AES.decrypt(encrypted_AES, "Passphrase")
console.log(decrypted_AES.toString(CryptoJS.enc.Utf8))