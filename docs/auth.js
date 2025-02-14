const auth0Client = new auth0.WebAuth({
    domain: "dev-xl8u673lmuv83zd2.us.auth0.com",  // Reemplaza con tu dominio de Auth0
    clientID: "xMWccyC2G4qDto0ifAsgWs98UfoDdDr1",  // Reemplaza con tu Client ID de Auth0
    redirectUri: "https://jumpcraft08.github.io/Public-Website/index.html",  // Redirección después de login
    responseType: "token id_token",
    scope: "openid profile email"
});

// Función para verificar si el usuario está autenticado
function checkAuthentication() {
    auth0Client.parseHash(window.location.hash, function(err, authResult) {
        if (err) {
            console.error('Error al autenticar:', err);
            return;
        }

        if (authResult && authResult.idToken) {
            // Si está autenticado, mostrar el contenido de la página
            document.body.style.display = 'block';
        } else {
            // Si no está autenticado, redirigir al login
            auth0Client.authorize();
        }
    });
}

function checkAuthentication() {
    auth0Client.parseHash(window.location.hash, function(err, authResult) {
        if (err) {
            console.error('Error al autenticar:', err);
            return;
        }

        if (authResult && authResult.idToken) {
            // Si está autenticado, ocultar la pantalla de carga y mostrar el contenido
            document.querySelector('.loading').style.display = 'none'; // Ocultar pantalla de carga
            document.body.style.display = 'block'; // Mostrar el contenido
        } else {
            // Si no está autenticado, redirigir al login
            auth0Client.authorize();
        }
    });
}

checkAuthentication();

