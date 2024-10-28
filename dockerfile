# Usa la imagen base de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia todos los archivos del proyecto al contenedor
COPY . .

# Construye la aplicación de Next.js
RUN npm run build

# Expone el puerto en el que Next.js servirá la aplicación
EXPOSE 3000

# Define el comando para iniciar la aplicación
CMD ["npm", "start"]
