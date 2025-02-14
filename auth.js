const auth0Client = new auth0.WebAuth({
    domain: "dev-xl8u673lmuv83zd2.us.auth0.com",  // Reemplaza con tu dominio de Auth0
    clientID: "xMWccyC2G4qDto0ifAsgWs98UfoDdDr1",  // Reemplaza con tu Client ID de Auth0
    redirectUri: "https://jumpcraft08.github.io/Public-Website/index.html",  // Redirección después de login
    responseType: "token id_token",
    scope: "openid profile email"
});

// Verifica si el usuario está autenticado
function checkAuthentication() {
    auth0Client.checkSession({}, function(err, authResult) {
        if (err) {
            console.log('No autenticado, redirigiendo a Auth0');
            // Si el usuario no está autenticado, redirige a Auth0
            auth0Client.authorize(); // Esto redirige a Auth0 para autenticación
        } else {
            console.log('Usuario autenticado', authResult);
            // Aquí puedes manejar lo que sucede cuando el usuario está autenticado
            // Por ejemplo, mostrar contenido o cargar la página principal
        }
    });
}

// Llama a la función cuando la página se cargue
window.onload = checkAuthentication;
