async function main() {
    const html = await import("./html.js") 
    html.home()
    let acciones = document.querySelectorAll(".accion")
    acciones.forEach((acccion) => {
        acccion.addEventListener("click", (evento) => {
            if (evento.target.id == "cifrar") {
                html.zona_cifrado()
                let btn_cifrar = document.querySelector("#btn_cifrar")
                btn_cifrar.addEventListener("click", async _ => {
                    const cifrado = await import("./cifrado.js")
                    let text_to_encrypt = document.querySelector("#text_to_encrypt")
                    let clave_cifrado = document.querySelector("#clave_cifrado")
                    if (text_to_encrypt.value == "" || clave_cifrado.value == "") {
                        console.log("Hay campos vacios!!!")
                    }
                    if (text_to_encrypt.value != "" && clave_cifrado.value != "") {
                        let texto_cifrado = cifrado.texto_cifrado(text_to_encrypt.value, clave_cifrado.value)
                        text_to_encrypt.value = texto_cifrado
                        btn_cifrar.remove()
                        html.button_copy_text_cifrado()
                        // copy cipher text to clipboard
                        let btn_copiar_text_cifrado = document.querySelector("#copiar_text_cifrado")
                        btn_copiar_text_cifrado.addEventListener("click", _=>{
                            text_to_encrypt.select()
                            navigator.clipboard.writeText(text_to_encrypt.value)
                        })
                    }
                })
            }
            if (evento.target.id == "descifrar") {
                html.zona_descifrado()
                let btn_descifrar = document.querySelector("#btn_descifrar")
                btn_descifrar.addEventListener("click", async _ => {
                    const descifrado = await import("./descifrado.js")
                    let text_to_decrypt = document.querySelector("#text_to_decrypt")
                    let clave_descifrado = document.querySelector("#clave_descifrado")
                    if (text_to_decrypt.value == "" || clave_descifrado.value == "") {
                        console.log("Hay campos vacios!!!")
                    }
                    if (text_to_decrypt.value != "" && clave_descifrado.value != "") {
                        let texto_descifrado = descifrado.texto_descifrado(text_to_decrypt.value, clave_descifrado.value)
                        text_to_decrypt.value = texto_descifrado
                        btn_descifrar.remove()
                        html.button_copy_text_descifrado()
                        // copy text to clipboard
                        let btn_copiar_text_descifrado = document.querySelector("#copiar_text_descifrado")
                        btn_copiar_text_descifrado.addEventListener("click", _=>{
                            text_to_decrypt.select()
                            navigator.clipboard.writeText(text_to_decrypt.value)
                        })
                    }
                })
            }
        })
    })
}

main()