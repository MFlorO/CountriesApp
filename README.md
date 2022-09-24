

 <br />

#

# COUNTRIES APP

## Tecnologías utilizadas:

* __Javascript__
* __ReactJS__
* __Redux__
* __Hooks__
* __Css Puro__
* __Node.Js__
* __Express__
* __PostgreSQL / Sequelize__


<p align="left"> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/></a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://www.postgresql.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> <a href="https://es.redux.js.org/" target="_blank" rel="noreferrer"> <img src="https://www.svgrepo.com/svg/303557/redux-logo" alt="redux" width="40" height="40"/> </a> </p>


## Antes de empezar
Es necesario tener, al menos, la última versión estable de Node y NPM. Asegurese de tenerlas para instalar correctamente las dependencias necesarias para correr el proyecto.

Las versiones requeridas son:
- **Node**: 14.20 o superior
- **NPM**: 6.14 o superior

Para chequear que versiones tiene instaladas:
> node -v
>
> npm -v

## Instrucciones para correr el servidor de desarrollo
**ESTE REPOSITORIO SOLO ES EL BACK DE LA APLICACION**

1. Clonar el repositorio
2. Crear una base de datos en postgres llamada countries.
3. Crear un archivo en api llamado .env, que tendrá la siguiente estructura: 
4. Clonar el repositorio del front que esta en un repositorio aparte, llamado: "Countries-app-front "

```
DB_USER=USUARIO_DE_DB
DB_PASSWORD=CONTRASEÑA_DE_DB
DB_HOST=localhost
DB_NAME=countries

```
Reemplazar postgresUser y postgresPassword por tus propias credenciales para conectarse a postgres.


5. Correr los siguientes comandos:
```
npm install
npm run sync (en api para sincronizar la base de datos con la API externa)
npm start
```

## Descripción

## Descripción
La aplicación tiene como finalidad poder buscar diferentes paises del mundo y entrar al detalle para mas informacion. Ademas, cuenta con un formulario controlado donde puedo crear distintas actividades turisticas y asociarlas a diferentes paises del mundo.
Cuenta con un CRUD entero con respecto a las actividades turisticas: se pueden crear, editar, eliminar y ver mas informacion de ellas. 



## Deployment

La aplicación tiene el backend y bases de datos en [RAILWAY](https://railway.app/)

[Link](https://countries-flor.netlify.app) para visitar la app.




