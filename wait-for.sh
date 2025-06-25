#!/bin/sh

# Espera o MySQL estar pronto
echo "Aguardando MySQL estar disponível em mysql:3306..."

while ! nc -z mysql 3306; do
  sleep 2
done

echo "MySQL está pronto. Iniciando a API..."

npx prisma migrate deploy &&
  npx prisma generate &&
  exec "$@"
