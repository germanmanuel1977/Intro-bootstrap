        // Example starter JavaScript for disabling form submissions if there are invalid fields
        (() => {
            'use strict'

            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            const forms = document.querySelectorAll('.registrar_usuario')

            // Loop over them and prevent submission
            Array.from(forms).forEach(form => {
                form.addEventListener('submit', event => {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    }else{
                        RegistrarPersona();
                        event.preventDefault()
                    }

                    form.classList.add('was-validated')
                }, false)
            })
        })()

 function RegistrarPersona(){
     let id = parseInt(document.querySelector("#txtId").value);
     let nombres = document.querySelector("#txtNombres").value;
     let apellidos = document.querySelector("#txtApellidos").value;
     let direccion = document.querySelector("#txtDireccion").value;
     let telefono = document.querySelector("#txtTelefono").value;
     let correo = document.querySelector("#txtCorreo").value;
     let password = document.querySelector("#txtPassword").value;
     let tarjetaprof = document.querySelector("#txtTarjetaprof").value;
     let tipousuarioId = parseInt(document.querySelector("#txtTipousuarioId").value);
     let estadoId = parseInt(document.querySelector("#txtEstadoId").value);

     
     let url = `http://localhost:3000/usuarios`;
     let datos = {
        id: id,
        nombres: nombres,
        apellidos: apellidos,
        direccion: direccion,
        telefono: telefono,
        correo: correo,
        password: password,
        tarjetaprof: tarjetaprof,
        tipousuarioId: tipousuarioId,
        estadoId: estadoId
     };

     fetch(url, {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
            'Content-Type':'application/json'
        }
     }).then(res => res.json())
     .then(mensaje => {
        console.log(mensaje)
     })

 }