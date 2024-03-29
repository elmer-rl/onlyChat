# OnlyChat

## Descripción

OnlyChat es una aplicación de chat en tiempo real, inspirada en la funcionalidad y simplicidad de aplicaciones líderes como WhatsApp, enfocada en ofrecer una experiencia de chat simplificada. Este proyecto se distingue por su stack tecnológico, utilizando Angular en el frontend y Firebase como una solución backend robusta, ofreciendo una alternativa moderna a las arquitecturas tradicionales basadas en Express, Socket.io y MongoDB. OnlyChat brinda una plataforma ágil y accesible para comunicaciones instantáneas, manteniendo la escalabilidad y la seguridad en su núcleo.

## Características Principales

- **Chat en tiempo real**: Gracias a Firebase, los mensajes se envían y reciben de manera instantánea.
- **Interfaz amigable y responsive**: Una experiencia de usuario fluida en cualquier dispositivo.
- **Desarrollo moderno**: Utilizando Angular, OnlyChat representa lo último en desarrollo de aplicaciones web SPA (Single Page Application).

## Tecnologías Utilizadas

- **Frontend**: Angular, proporcionando una estructura sólida para el desarrollo de SPA.
- **Backend**: Firebase, ofreciendo una base de datos en tiempo real, autenticación y hosting, sirviendo como una alternativa contemporánea a la combinación de Express, Socket.io y MongoDB.

## Capturas de Pantalla

Captura de pantalla de OnlyChat en vista de escritorio:

- Iniciar Sesión

 ![Pantalla de inicio de sesión](https://raw.githubusercontent.com/elmer-rl/onlyChat/master/src/assets/images/login.png)

- Registro

 ![Pantalla de registro](https://raw.githubusercontent.com/elmer-rl/onlyChat/master/src/assets/images/register.png)

- Login incorrecto

 ![Pantalla de alerta de login fallido](https://raw.githubusercontent.com/elmer-rl/onlyChat/master/src/assets/images/login-alert.png)

 - onlyChat en acción

 ![Chat en Acción](https://raw.githubusercontent.com/elmer-rl/onlyChat/master/src/assets/images/messages-page.png)

Captura de pantalla de OnlyChat en vista mobile:

 ![OnlyChat mobile](https://raw.githubusercontent.com/elmer-rl/onlyChat/master/src/assets/images/onlyChat-mobile.png) 


## Cómo Empezar

### Prerrequisitos

- Instalación de [Angular v17](https://angular.io/) Angular cli.

- Instalación de [Node.js](https://nodejs.org/en/) y npm.

### Instalación

1. Clona el repositorio:

```sh
git clone https://github.com/tuUsuario/OnlyChat.git

cd OnlyChat

```
### Configuración de Firebase

Para que OnlyChat funcione correctamente, necesitarás configurar Firebase:

- Crear un Proyecto en Firebase:

1. Ve a [Firebase Console.](https://firebase.google.com/)
2. Haz clic en "Añadir proyecto" y sigue las instrucciones.
3. Nombrar el proyecto "OnlyChat" (el nombre es opcional).
4. Crear una Aplicación Web:

Dentro de tu proyecto de Firebase, navega a la sección "Visión general" y haz clic en "Añadir aplicación" para agregar una nueva aplicación web.
Sigue los pasos para registrar tu aplicación.

- Configurar el SDK de Firebase:

Al finalizar el registro de tu aplicación web, Firebase te proporcionará tu configuración personalizada del SDK en formato JSON.

- Implementar la Configuración del SDK en Angular:

1. En tu proyecto Angular, encuentra el archivo environment.ts dentro de la carpeta src/environments/.
1. Añade tu configuración de Firebase a este archivo de la siguiente manera:
```sh
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "tuApiKey",
    authDomain: "tuAuthDomain",
    projectId: "tuProjectId",
    storageBucket: "tuStorageBucket",
    messagingSenderId: "tuMessagingSenderId",
    appId: "tuAppId",
    measurementId: "tuMeasurementId"
  }
};
```
- Asegúrate de realizar la configuración de acuerdo a los pasos indicados anteriormente, de esta manera no tendrá errores al levantar el proyecto.

Continuar con la instalación de dependencias y levantar el servidor local,
```sh
### Instalación de dependencias

npm install

### Iniciar el servidor local

npm start
