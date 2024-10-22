🌐 Optimal Tech - Backend
Este es el backend del proyecto Optimal Tech, desarrollado utilizando Node.js y Express. Se encarga de gestionar la persistencia de datos con PostgreSQL y ofrece una API RESTful para realizar operaciones CRUD sobre los items.

📋 Características Principales

🌍 API RESTful: Permite operaciones de Crear, Leer, Actualizar y Eliminar items.

🗄️ Base de Datos: Conexión y manejo eficiente de datos con PostgreSQL.

🚀 Desplegado en Render: El servidor está desplegado en la plataforma Render.

🐳 Contenerización con Docker: Preparado para ser desplegado en cualquier entorno.

🛠️ Guía de Instalación

Paso 1: Clonar el Repositorio

git clone https://github.com/tu-usuario/optimal-tech-backend.git

cd optimal-tech-backend

Paso 2: Instalar las Dependencias
npm install

Paso 3: Configurar Variables de Entorno
Crea un archivo .env en la raíz del proyecto y define las siguientes variables:

PORT=4000
DATABASE_URL=postgresql://mydb_d71p_user:mU4u5tHPjKGKHqGjONALS8fSBXXbcecH@dpg-csbi033tq21c73a0pq60-a.oregon-postgres.render.com/mydb_d71p
NODE_ENV=production

Paso 4: Iniciar en Modo Desarrollo
npm run dev
El backend estará corriendo en http://localhost:4000.

📋 Endpoints del API

GET /items: Obtener todos los items.

POST /items: Crear un nuevo item.

PUT /items/:id: Actualizar un item por ID.

DELETE /items/:id: Eliminar un item por ID.

Ejemplos de Solicitudes

Crear un Item (POST):

curl -X POST http://localhost:4000/items -H "Content-Type: application/json" -d '{"name": "Nuevo Item"}'

Obtener Todos los Items (GET):

curl -X GET http://localhost:4000/items

🐋 Ejecutar con Docker
Construir la Imagen Docker

docker build -t optimal-tech-backend .

Ejecutar el Contenedor

docker run -p 4000:4000 optimal-tech-backend

Accede a la API en http://localhost:4000.

🚀 Despliegue en Render
Este proyecto está listo para ser desplegado en Render:

Crea un nuevo servicio web en Render.

Conecta tu repositorio.

Añade las variables de entorno necesarias en el panel de Render.

Render se encargará del despliegue automático.

🛠️ Tecnologías Utilizadas

Node.js 🚀
Express 🌐
PostgreSQL 🗄️
Docker 🐳
Render 🌍

🤝 Contribuciones
¡Tu contribución es más que bienvenida! Si deseas colaborar, sigue estos pasos:

Haz un fork del repositorio.
Crea una nueva rama con tu funcionalidad:
git checkout -b feature/feature-name

Realiza tus cambios y haz commit:

git commit -am 'Add new feature'
Haz push a la rama:
git push origin feature/feature-name
Abre un Pull Request.

💖 ¿Te Gusta el Proyecto?
Para preguntas o sugerencias, no dudes en contactarme:

📧 Correo: jhandurango03@gmail.com