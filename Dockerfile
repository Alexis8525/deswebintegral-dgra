# Usa imagen oficial de nginx
FROM nginx:alpine

# Copia los archivos de producción a la carpeta que nginx sirve
COPY build/ /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80

# Inicia nginx
CMD ["nginx", "-g", "daemon off;"]
