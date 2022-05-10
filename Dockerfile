FROM node:16-alpine
WORKDIR /app
COPY frontend/package.json ./
COPY frontend/package-lock.json ./
COPY ./frontend/ ./
RUN npm i
CMD ["npm", "run", "start"]