export let  texto_cifrado = (texto_a_cifrar, clave)=>{
    let cipher_AES = CryptoJS.AES.encrypt(texto_a_cifrar, clave)
    let text_cifrado = cipher_AES.toString()
    return text_cifrado
}