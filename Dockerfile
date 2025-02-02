# Usa una imagen base de Node.js con Alpine para reducir tamaño
FROM node:18-alpine

# Define el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de dependencias primero (mejor caché)
COPY package.json package-lock.json ./

# Instala las dependencias de npm
RUN npm install --production

# Copia el resto del código
COPY . .

# Compila la aplicación de Next.js
RUN npm run build

# Expone el puerto en el que correrá la aplicación
EXPOSE 3000

# Comando para iniciar la aplicación en modo producción
CMD ["npm", "start"]
