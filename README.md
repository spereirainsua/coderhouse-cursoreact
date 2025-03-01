# Coderhouse Curso React

Este es el repositorio del proyecto final del curso de React en Coderhouse. El proyecto consiste en el desarrollo de una aplicación de comercio electrónico (tienda en línea) con funcionalidades de carrito de compras, formulario de checkout y persistencia de datos en Firebase.

## Descripción

La aplicación permite a los usuarios explorar productos, añadirlos a un carrito de compras, proceder a realizar un pedido, y finalmente confirmar la compra. El proyecto integra las siguientes características:

- Carrito de compras con gestión de productos.
- Persistencia de datos utilizando Firebase.
- Formulario de checkout para completar el proceso de compra.
- Visualización y confirmación del pedido final.

## Tecnologías Utilizadas

- **React**: Biblioteca JavaScript para construir interfaces de usuario.
- **React Router**: Para la navegación entre las páginas de la aplicación.
- **React Loading**: Para el componente de carga.
- **Firebase**: Para la persistencia de datos.
- **CSS**: Estilos para la interfaz.
- **JavaScript**: Lenguaje de programación principal.
- **React Hook Form**: Para la validación de formularios.

## Instalación

### Clonar el repositorio

```bash
git clone https://github.com/spereirainsua/coderhouse-cursoreact.git
```

### Instala el proyecto:

```bash
npm install
npm run dev
```

## Estructura de Carpetas

```bash
/public              # Aquí se guardan los recursos publicos
/src
  /components        # Componentes reutilizables de la interfaz
    /context         # Contexto del carrito de compras
    /styles          # Archivos de estilo (CSS) de los diferentes componentes
  /db                # Archivo de configuración de Firebase y ejecución de consultas con la DB
```

## Funcionalidades

### Carrito de compras

- Añadir productos al carrito.
- Eliminar productos del carrito.
- Ver el subtotal y el total del carrito, incluyendo IVA y costos de envío.

### Checkout

- Formulario para ingresar datos del cliente y método de pago.
- Validación de los campos del formulario.
- Al completar la compra, los datos del pedido son enviados a Firebase.

### Confirmación de Pedido

- Visualización de la información del pedido una vez realizado.

## Licencia
Este proyecto está bajo la licencia MIT.
