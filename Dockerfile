FROM node:20

WORKDIR /app

COPY . .

WORKDIR /app/backend

RUN npm install

WORKDIR /app/frontend

RUN npm install

EXPOSE 8757 5173

WORKDIR /app

CMD sh -c "cd /app/backend && npm run dev & cd /app/frontend && npm run dev"