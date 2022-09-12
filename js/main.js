// cifrado AES
// var encrypted_AES = CryptoJS.AES.encrypt("hola mundo", "Passphrase");
// console.log(encrypted_AES.toString())
// var decrypted_AES = CryptoJS.AES.decrypt(encrypted_AES, "Passphrase")
// console.log(decrypted_AES.toString(CryptoJS.enc.Utf8))

async function main(){
    const html = await import("./html.js")
    const cifrado = await import("./cifrado.js")
    const descifrado = await import("./descifrado.js")
    
    html.home()
    let acciones = document.querySelectorAll(".accion")
    acciones.forEach((acccion)=>{
        acccion.addEventListener("click", (evento)=>{
            if (evento.target.id == "cifrar"){
                html.zona_cifrado()
                let btn_cifrar = document.querySelector("#btn_cifrar")
                btn_cifrar.addEventListener("click", _=>{
                    let texto_cifrado = cifrado.texto_cifrado("hola mundo", "mundo")
                    console.log(texto_cifrado)
                })
            }
            if (evento.target.id == "descifrar"){
                html.zona_descifrado()
                let btn_descifrar = document.querySelector("#btn_descifrar")
                btn_descifrar.addEventListener("click", _=>{
                    let texto_descifrado = descifrado.texto_descifrado("U2FsdGVkX1816As7nOT3B4MGLY1dWJWvnhVwx/2ndN0=", "Passphrase")
                    console.log(texto_descifrado)                    
                })
            }            
        })
    })
}

main()