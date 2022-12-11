
  const usuario = document.getElementById('usuario');
  const contraseña = document.getElementById('contraseña');
  const iniciarSesion = document.getElementById('iniciarSesion');
  const formulario = document.getElementById('formLoguin');
  const paginaError = document.getElementById('body_404')
  const textoAviso = document.getElementById ('textoAviso')

  let errores = 0
iniciarSesion.addEventListener ('click', (e) =>{
   if (usuario.value == 'escrotoenmoto' && contraseña.value === '654321')
   {  
      usuario.classList.add('correcto')
      usuario.classList.remove('incorrecto')
      contraseña.classList.add('correcto')
      contraseña.classList.remove('incorrecto')
      console.log ('el campo contraseña es obligatorio')
      
   }else 
   {
    errores ++
    usuario.classList.add('incorrecto')
    contraseña.classList.add('incorrecto')
    e.preventDefault();
    if (errores == 3)
    {
      formulario.classList.add('ocultar')
      paginaError.classList.remove('ocultar')
      textoAviso.classList.remove('ocultar')
    }
   }

  });


  /* document.getElementById('iniciarSesion').addEventListener('click', valida);

  let contador = 1;
  function valida(){
  
          //const campo = document.getElementById('campo');
              valido = document.getElementById('campoOK'),
  
              regex = /^[a-zA-Z0-9\_\-]{4,16}$/;
  
          if (regex.test(usuario.value)) {
              valido.innerHTML = "válido";
  
          } else {
              valido.innerHTML = "incorrecto";
              console.log(`Intento: ${contador}`);
              if(contador === 3){
                document.getElementById('validar').disabled = 'true';
              }
              contador++;
          }
  
  } */

/*   usuario: /^[a-zA-Z0-9\_\-]{4,16}$/                          // Letras, numeros, guion y guion_bajo
nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/                             // Letras y espacios, pueden llevar acentos.
password: /^.{4,12}$/                                       // 4 a 12 digitos.
correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
telefono: /^\d{7,14}$/ */
