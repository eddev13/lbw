# Usa uma imagem oficial do Node como base
FROM node:18-alpine

# Define o diretório dentro do container
WORKDIR /api/app

# Copia os arquivos package.json e package-lock.json
COPY package*.json ./

# Copiar o script de espera
COPY wait-for.sh /api/app/wait-for.sh

# Deixar o script executável
RUN chmod +x /api/app/wait-for.sh

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos para dentro do container
COPY . .

# Gerar o Prisma Client dentro do container
RUN npx prisma generate

# Expõe a porta que seu app usa (ajuste se for diferente)
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["/api/app/wait-for.sh", "npm", "run", "dev"]
