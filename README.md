# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



npm install bootstrap@4.0.0
npm install reactstrap@5.0.0


#Header and Footer 
npm install font-awesome@4.7.0
npm install bootstrap-social@5.1.1

#React-router
react-router-dom@4.2.2

#Insatll redux and React-redux
  npm install --save redux@3.7.2
  npm install --save react-redux@5.0.7

1. Despues de instalar redux and react-redux debemos crear una carpeta redux en scr
2. Dentro de la carpeta redux, debemos como primer paso crear una funcion reductora (reducer function) en reducer.js
   es donde implementaremos nuestra funcion reductora, que será una funcion pura.
3. Actualizaremos nuestro componente principal para hacer uso de redux, y dentro del componente principal cortaremos
   dishes, leaders, comments and promotions ya que el componente principal ahora ontendra el estado de mi Redux Store.
4. Creamos nuestra funcion reductora (funcion pura) que recibe el state actual y una action e inicializada, esta funcion 
   por ahora va retornar el mismo state.
5. Creamos el archivo configureStore.js para crear el createStore que me permitira crear el redux store para luego 
   importar el reductor e initialState porque los necesito para configurar/crear el store createStore que recibe 2 parametros, un reducer, otros parametros y el initialState, con esto retornara una funcion que nos permite crear un redux store
6. Actualizar la app para hacer uso de este store, vamos al componenete principal <App></App> e importamos Provider y 
   nuestro configureStore, y configuramos para Redux Store este disponible para todos los componentes de mi app

7. El ultimo paso es hacer uso de connect de react-redux para conectar mi aplicacion react a Redux store y eso lo 
   hacemos en nuestro componente principal <Main></Main> y como estamos haciendo uso de react-router importaremos withRouter desde react-router-dom porque es necesario para configurar mi componente react para conectarse con Redux, e
   importar connect desde react-redux. 
   ¿Pero como conecto mis componentes principales?, pero como <Main></Main> era el componente que estaba manteniendo el estado de mi aplicacion, y ahora este componente "Main" necesita obtener ese estado del Redux Store necesito conectar este componenet "Main" a mi Redux Store a traves de connect. 
   Pero antes de conectar este componente a mi Redux Store necsito definir la funcion "mapStateToProps" que recibe como parametro el state y lo que hara es mapear el state con las props que esten disponibles en mi componente (dishes, comments, leaders y promotions).
   Pero antes nos habiamos preguntado ¿como conectamos el componente Main al Redux Store? 
   ESto se hace en donde hacemos el export del componente, "export default Main", basicaente wrappeamos el componente a exportar "Main" dentro de un connect

