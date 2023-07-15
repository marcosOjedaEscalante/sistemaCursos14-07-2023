fetch('http://localhost:8080/estudiantes/')
      .then(response => response.json())
      .then(json => console.log(json));