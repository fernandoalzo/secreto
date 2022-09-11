
// cifrado AES
var encrypted_AES = CryptoJS.AES.encrypt("hola mundo", "Passphrase");
console.log(encrypted_AES.toString())
var decrypted_AES = CryptoJS.AES.decrypt(encrypted_AES, "Passphrase")
console.log(decrypted_AES.toString(CryptoJS.enc.Utf8))

function main(){
    let acciones = document.querySelectorAll(".accion")
    acciones.forEach((acccion)=>{
        acccion.addEventListener("click", (evento)=>{
            if (evento.target.id == "cifrar"){
                console.log("cifrar")
            }
            if (evento.target.id == "descifrar"){
                console.log("descifrar")
            }
            
        })
    })
}

main()