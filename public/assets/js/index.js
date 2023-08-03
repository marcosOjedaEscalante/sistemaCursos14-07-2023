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
      const datosRecibidos = await response.json();
      console.log(datosRecibidos);
});