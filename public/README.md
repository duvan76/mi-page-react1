# Proyecto de Directorio de Restaurantes

Este proyecto es una aplicación web de directorio de restaurantes construida con React.js. Permite a los usuarios explorar diferentes restaurantes, buscar por nombre o descripción, y agregar nuevos restaurantes al directorio.

## Estructura del Proyecto

El proyecto tiene la siguiente estructura de archivos:

```
mi-page-react
├── public
│   ├── index.html          # Plantilla HTML principal
│   └── README.md           # Documentación del proyecto
├── src
│   ├── components          # Componentes reutilizables
│   │   ├── Header.jsx      # Encabezado y navegación
│   │   ├── RestaurantCard.jsx # Tarjeta de información de un restaurante
│   │   ├── RestaurantList.jsx # Lista de tarjetas de restaurantes
│   │   ├── SearchBar.jsx    # Barra de búsqueda
│   │   └── RestaurantForm.jsx # Formulario para agregar un nuevo restaurante
│   ├── pages               # Páginas de la aplicación
│   │   ├── Home.jsx        # Página principal con la lista de restaurantes
│   │   ├── Search.jsx      # Página de búsqueda de restaurantes
│   │   └── NewRestaurant.jsx # Página para agregar un nuevo restaurante
│   ├── App.jsx             # Componente principal de la aplicación
│   ├── index.js            # Punto de entrada de la aplicación
│   └── styles              # Archivos de estilo
│       └── style.css       # Estilos CSS para la aplicación
├── package.json            # Configuración del proyecto para npm
└── README.md               # Documentación del proyecto
```

## Instalación

1. Clona el repositorio en tu máquina local.
2. Navega al directorio del proyecto.
3. Ejecuta `npm install` para instalar las dependencias.

## Uso

- Para iniciar la aplicación, ejecuta `npm start`. Esto abrirá la aplicación en tu navegador predeterminado.
- Puedes explorar la lista de restaurantes, buscar por nombre o descripción, y agregar nuevos restaurantes utilizando el formulario disponible.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.