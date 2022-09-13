export async function home() {
    let seccion_cifrado_descifrado = document.querySelector("#seccion_cifrado_descifrado")
    let check_div_main_section = document.querySelector("#div_main_section")
    if (check_div_main_section) {
        check_div_main_section.remove()
    }
    let div_main_section = document.createElement("div")
    div_main_section.setAttribute("id", "div_main_section")

    let div_section_home = document.createElement("div")
    let label_div_section_home = document.createTextNode("Hola mundo")
    let home_img = document.createElement("img")
    home_img.setAttribute("src", "./img/spy.png")
    home_img.style.height = "400px"
    // setting html
    div_section_home.append(home_img)
    div_main_section.append(div_section_home)
    seccion_cifrado_descifrado.append(div_main_section)
}

export async function zona_cifrado() {
    let seccion_cifrado_descifrado = document.querySelector("#seccion_cifrado_descifrado")
    let check_div_main_section = document.querySelector("#div_main_section")
    if (check_div_main_section) {
        check_div_main_section.remove()
    }
    // este es el div en el que se creara los formularios y el home, de esta dorma para cambiar de accion solo es eliminar este div
    let div_main_section = document.createElement("div")
    div_main_section.setAttribute("id", "div_main_section")
    // formulario
    let formulario_cifrado = document.createElement("div")
    formulario_cifrado.setAttribute("class", "cifrador-form validate-form")
    // div text area
    let div_textarea = document.createElement("div")
    div_textarea.setAttribute("class", "wrap-input1 validate-input")
    // tesxt area text to encrypt
    let textarea_text_to_encrypt = document.createElement("textarea")
    textarea_text_to_encrypt.setAttribute("class", "input1")
    textarea_text_to_encrypt.setAttribute("placeholder", "Mensaje para cifrar...")
    textarea_text_to_encrypt.setAttribute("id", "text_to_encrypt")
    textarea_text_to_encrypt.setAttribute("maxlength", "500")
    // configuracion para el efecto verde cuando se da click
    let span_textarea = document.createElement("span")
    span_textarea.setAttribute("class", "shadow-input1")
    // salto de linea para separar los divs
    let salto_linea = document.createElement("br")
    // div para el input ocn la clave
    let div_clave = document.createElement("div")
    div_clave.setAttribute("class", "wrap-input1 validate-input")
    // input para la clave
    let input_clave = document.createElement("input")
    input_clave.setAttribute("class", "input1")
    input_clave.setAttribute("type", "text")
    input_clave.setAttribute("placeholder", "Clave de cifrado")
    input_clave.setAttribute("id", "clave_cifrado")
    input_clave.setAttribute("maxlength", "100")
    // configuracion para el efecto verde cuando se da click
    let span_input_clave = document.createElement("span")
    span_input_clave.setAttribute("class", "shadow-input1")
    // div for button Run
    let div_button = document.createElement("div")
    div_button.setAttribute("class", "container-run-form-btn")
    // create button
    let btn_cifrar = document.createElement("button")
    btn_cifrar.setAttribute("class", "run-form-btn")
    btn_cifrar.setAttribute("id", "btn_cifrar")
    let label_button = document.createTextNode("Run..")
    // config html
    div_textarea.append(textarea_text_to_encrypt, span_textarea)
    div_clave.append(input_clave, span_input_clave)
    btn_cifrar.append(label_button)
    div_button.append(btn_cifrar)
    formulario_cifrado.append(div_textarea, salto_linea, div_clave, div_button)
    div_main_section.append(formulario_cifrado)
    seccion_cifrado_descifrado.append(div_main_section)
}

export async function zona_descifrado() {
    let seccion_cifrado_descifrado = document.querySelector("#seccion_cifrado_descifrado")
    let check_div_main_section = document.querySelector("#div_main_section")
    if (check_div_main_section) {
        check_div_main_section.remove()
    }
    // este es el div en el que se creara los formularios y el home, de esta dorma para cambiar de accion solo es eliminar este div
    let div_main_section = document.createElement("div")
    div_main_section.setAttribute("id", "div_main_section")
    // formulario
    let formulario_descifrado = document.createElement("div")
    formulario_descifrado.setAttribute("class", "descifrador-form validate-form")
    // div text area
    let div_textarea = document.createElement("div")
    div_textarea.setAttribute("class", "wrap-input1 validate-input")
    // tesxt area text to encrypt
    let textarea_text_to_decrypt = document.createElement("textarea")
    textarea_text_to_decrypt.setAttribute("class", "input1")
    textarea_text_to_decrypt.setAttribute("placeholder", "Mensaje cifrado...")
    textarea_text_to_decrypt.setAttribute("id", "text_to_decrypt")
    textarea_text_to_decrypt.setAttribute("maxlength", "1000")
    // configuracion para el efecto verde cuando se da click
    let span_textarea = document.createElement("span")
    span_textarea.setAttribute("class", "shadow-input1")
    // salto de linea para separar los divs
    let salto_linea = document.createElement("br")
    // div para el input ocn la clave
    let div_clave = document.createElement("div")
    div_clave.setAttribute("class", "wrap-input1 validate-input")
    // input para la clave
    let input_clave = document.createElement("input")
    input_clave.setAttribute("class", "input1")
    input_clave.setAttribute("type", "text")
    input_clave.setAttribute("placeholder", "Clave de descifrado")
    input_clave.setAttribute("id", "clave_descifrado")
    input_clave.setAttribute("maxlength", "100")
    // configuracion para el efecto verde cuando se da click
    let span_input_clave = document.createElement("span")
    span_input_clave.setAttribute("class", "shadow-input1")
    // div for button Run
    let div_button = document.createElement("div")
    div_button.setAttribute("class", "container-run-form-btn")
    // create button
    let btn_descifrar = document.createElement("button")
    btn_descifrar.setAttribute("class", "run-form-btn")
    btn_descifrar.setAttribute("id", "btn_descifrar")
    let label_button = document.createTextNode("Run..")
    // config html
    div_textarea.append(textarea_text_to_decrypt, span_textarea)
    div_clave.append(input_clave, span_input_clave)
    btn_descifrar.append(label_button)
    div_button.append(btn_descifrar)
    formulario_descifrado.append(div_textarea, salto_linea, div_clave, div_button)
    div_main_section.append(formulario_descifrado)
    seccion_cifrado_descifrado.append(div_main_section)
}