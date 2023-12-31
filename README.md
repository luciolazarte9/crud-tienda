# Desarrrollo Front-End - Tec. en Desarrollo y calidad de software. UNSTA.


Este proyecto de React es una tienda que incluye un login de administrador, una página de registro y una página de administrador. La página de administrador permite cargar, borrar y eliminar productos, y se conecta a una API local utilizando JSON Server.

## Herramientas utilizadas
- JSON Server: Se utilizó para simular una API local y realizar las solicitudes HTTP. Puede interactuar con él utilizando Postman u otras herramientas similares tales como Thunder Client entre otras.
- React: Se utilizó como el lenguaje principal para desarrollar la interfaz de usuario y la lógica del proyecto.
- JavaScript: Se utilizó junto con React para la programación del proyecto.
- CSS: Se utilizó para el diseño y la presentación visual de los componentes.
- Bootstrap: Se utilizó para estilizar y dar formato a los elementos de la interfaz de usuario.
- React Hook Form: Se utilizó como una librería para facilitar el manejo de formularios en React.
- React Router DOM: Se utilizó para la navegación entre diferentes páginas y el enrutamiento en la aplicación.
## Instalación
1. Clona este repositorio en tu máquina local.
```
git clone https://github.com/luciolazarte9/crud-tienda.git
```
2. Abre la carpeta del proyecto en tu terminal.
3. Ejecuta el siguiente comando para instalar las dependencias necesarias:

```
npm i
```

## Uso
1. Inicia el servidor JSON

```
json-server --watch db.json --port 3004
```

Esto iniciara el servidor JSON en http://localhost:3004 y cargara los datos de ejemplo. 

2. Inicia la aplicacion de React:

```
npm run dev
```
Esto abrira la aplicacion en tu navegador en algun puerto de tu local host. Ejemplo: https://localhost:5173

3. Navega por las diferentes páginas de la aplicación, inicia sesión como administrador, regístrate como nuevo usuario y accede a la página de administrador para cargar, borrar y eliminar productos.

## Autores
1. Lucio Agustin Lazarte
2. Andres Ramirez
3. Santiago Perelmuter

## Licencia
Este proyecto está bajo la Licencia MIT. Puedes consultar el archivo LICENSE para más detalles.
