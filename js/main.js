
// cifrado AES
var encrypted_AES = CryptoJS.AES.encrypt("hola mundo", "Passphrase");
console.log(encrypted_AES.toString())
var decrypted_AES = CryptoJS.AES.decrypt(encrypted_AES, "Passphrase")
console.log(decrypted_AES.toString(CryptoJS.enc.Utf8))

async function main(){
    const html = await import("./html.js")
    
    html.home()
    let acciones = document.querySelectorAll(".accion")
    acciones.forEach((acccion)=>{
        acccion.addEventListener("click", (evento)=>{
            if (evento.target.id == "cifrar"){
                html.zona_cifrado()
            }
            if (evento.target.id == "descifrar"){
                html.zona_descifrado()
            }
            
        })
    })

}

main()