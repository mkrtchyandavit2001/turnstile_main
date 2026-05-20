# Используем Node.js 20 LTS (x64)
FROM node:20.19.6-bullseye

# Рабочая директория внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь проект
COPY . .

# Экспортируем порт
EXPOSE 3000

# Команда для запуска dev-сервера
CMD ["npm", "run", "dev"]
