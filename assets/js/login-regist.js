/*
function guardarDatos(){
    let user = {
        email: document.getElementById('email').value,
        passw: document.getElementById('password').value
    }
    console.log(user) 
}
*/


/*Iniciar sesion*/
const form = document.getElementById('login-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const userData = {
    email: formData.get('email'),
    password: formData.get('password')
    //Envía los datos a un servidor o realiza otras acciones aquí
};

    //Abre la pagina en una nueva ventana
    const newWindow = window.open('PgPrincipal.html', '_blank');
    newWindow.focus();

  console.log(userData);
});

/*Registrarse*/
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('register-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
  
        const userEmail = document.getElementById('register-email').value;
  
        console.log(`User registered with email: ${userEmail}`);
        //Envía los datos a un servidor o realiza otras acciones aquí
      });

      //Abre la pagina en una nueva ventana
      const newWindow = window.open('PgPrincipal.html', '_blank');
      newWindow.focus();
    } else {
      console.error('El elemento form no existe en el DOM');
    }
  });

