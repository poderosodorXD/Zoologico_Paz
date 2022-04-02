export const validateForm = (formData) => {
    let errores = {};
    let regexNombre = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexCelular = /^\d{9}$/;

    if (!formData.nombre.trim()) {
        errores.nombre = "El Nombre es requerido."
    } else if (!regexNombre.test(formData.nombre.trim())) {
        errores.nombre = "El campo nombre solo acepta letras y espacios en blanco."
    }

    if (!formData.celular.trim()) {
        errores.celular = "El Celular es requerido."
    } else if (!regexCelular.test(formData.celular.trim())) {
        errores.celular = "Debe contener 9 numeros."
    }

    if (!formData.email.trim()) {
        errores.email = "El email es requerido."
    } else if (!regexEmail.test(formData.email.trim())) {
        errores.email = "El correo es incorrecto."
    }

    if (formData.email.trim() !== document.getElementById("emailValida").value) {
        errores.emailValida = "El email no coincide."
    }

    return errores;
};