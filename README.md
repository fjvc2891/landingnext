Este es un proyecto Next.js iniciado con create-next-app.

Comenzando

Primero, ejecuta el servidor de desarrollo:

npm run dev
# o
yarn dev

Abre http://localhost:3000 en tu navegador para ver el resultado.

Puedes comenzar a editar la página modificando pages/index.js. La página se actualizará automáticamente a medida que edites el archivo.

Las rutas de la API se pueden acceder en http://localhost:3000/api/hello. Este endpoint se puede editar en pages/api/hello.js.

El directorio pages/api está mapeado a /api/*. Los archivos en este directorio se tratan como rutas de API en lugar de páginas de React.

Configuración de Docker

Este proyecto incluye una configuración de Docker para facilitar su implementación.

Archivos incluidos:

Dockerfile: Define el entorno y el proceso de construcción.

docker-compose.yml: Administra la ejecución del contenedor.

.dockerignore: Excluye archivos innecesarios del contenedor.

Ejecutar con Docker:

Construir la imagen de Docker

docker build -t landingnext .

Ejecutar el contenedor

docker run -p 3000:3000 landingnext

(Opcional) Ejecutar usando Docker Compose

docker-compose up --build

Aprende más

Para obtener más información sobre Next.js, consulta los siguientes recursos:

Documentación de Next.js - aprende sobre las características y API de Next.js.

Aprende Next.js - un tutorial interactivo de Next.js.

Puedes revisar el repositorio de Next.js en GitHub - tus comentarios y contribuciones son bienvenidos.

Implementar en Vercel

La forma más fácil de implementar tu aplicación Next.js es usar la Plataforma Vercel de los creadores de Next.js.

Consulta nuestra documentación de implementación de Next.js para más detalles.

