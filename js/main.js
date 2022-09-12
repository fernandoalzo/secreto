async function main() {
    const html = await import("./html.js")
    const cifrado = await import("./cifrado.js")
    const descifrado = await import("./descifrado.js")
    // create the home section   
    html.home()
    let acciones = document.querySelectorAll(".accion")
    acciones.forEach((acccion) => {
        acccion.addEventListener("click", (evento) => {
            if (evento.target.id == "cifrar") {
                html.zona_cifrado()
                let btn_cifrar = document.querySelector("#btn_cifrar")
                btn_cifrar.addEventListener("click", _ => {
                    let text_to_encrypt = document.querySelector("#text_to_encrypt")
                    let clave_cifrado = document.querySelector("#clave_cifrado")
                    if (text_to_encrypt.value == "" || clave_cifrado.value == "") {
                        console.log("Hay campos vacios!!!")
                    }
                    if (text_to_encrypt.value != "" && clave_cifrado.value != "") {
                        let texto_cifrado = cifrado.texto_cifrado(text_to_encrypt.value, clave_cifrado.value)
                        console.log(texto_cifrado)
                    }
                })
            }
            if (evento.target.id == "descifrar") {
                html.zona_descifrado()
                let btn_descifrar = document.querySelector("#btn_descifrar")
                btn_descifrar.addEventListener("click", _ => {
                    let text_to_decrypt = document.querySelector("#text_to_decrypt")
                    let clave_descifrado = document.querySelector("#clave_descifrado")
                    if (text_to_decrypt.value == "" || clave_descifrado.value == "") {
                        console.log("Hay campos vacios!!!")
                    }
                    if (text_to_decrypt.value != "" && clave_descifrado.value != "") {
                        let texto_descifrado = descifrado.texto_descifrado(text_to_decrypt.value, clave_descifrado.value)
                        console.log(texto_descifrado)
                    }
                })
            }
        })
    })
}

main()