const btnLoguear = document.querySelector('#btnLoguear');
btnLoguear.addEventListener('click', async () => {
      const url = 'http://localhost:8080/auth/login';
      const correo = document.querySelector('#txtCorreo').value;
      const password = document.querySelector('#txtPassword').value;
      const datos = {
            correo,
            password
      }
      const opciones = {
            method: 'POST',
            headers: {
                  'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
      }
      const response = await fetch(url, opciones);
      const { token, msg } = await response.json();
      if(!token){
            console.log(msg);
      }else{
            consumoListadoUsuarios(token);
      }
});

const consumoListadoUsuarios = async (token) => {
      const contenedorPrincipal = document.querySelector('#contenedorPrincipal');
      const url = 'http://localhost:8080/usuarios';
      const opciones = {
            method: 'GET',
            headers: {
                  'Authorization': token
            }
      }
      const response = await fetch(url, opciones);
      const datos = await response.json();
      contenedorPrincipal.innerHTML = '';
      console.log(datos);
}