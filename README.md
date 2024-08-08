# :muscle: Body Forge :muscle:

Body Forge é uma plataforma de fichas de treino projetada para facilitar a criação e personalização de rotinas de exercícios. Com o Body Forge, os usuários podem escolher entre uma variedade de exercícios e montar suas próprias fichas de treino, adaptadas às suas necessidades e objetivos fitness.

Aqui você encontrará informações importantes sobre como configurar e executar o projeto.

## Instalação :robot:

1. Certifique-se de ter o [Node.js](https://nodejs.org/) e o [Yarn](https://yarnpkg.com/) instalados em sua máquina.

2. Execute o comando abaixo para instalar todas as dependências do projeto:

```bash
yarn
```

## Variáveis de Ambiente :book:

Você precisará configurar algumas variáveis de ambiente para o funcionamento correto do projeto. Siga as instruções abaixo:

1. Crie um arquivo `.env` na raiz do projeto, utilizando como base a estrutura do arquivo `.env.example`.
2. Preencha as variáveis no arquivo `.env` com as informações necessárias:

```
POSTGRES_USER={usuário}
POSTGRES_PASSWORD={senha}
DATABASE_URL=postgresql://{usuário}:{senha}@localhost:5432/db

# Master User
MASTER_PASSWORD={senha_usuario}
```

## Banco de Dados :computer:

Com as variáveis de ambiente configuradas, você pode subir o banco de dados executando o seguinte comando:

```bash
docker-compose up
```

## Migrations :m:

Para rodar as migrations e preparar o banco de dados, utilize o seguinte comando:

```bash
yarn prisma migrate dev
```

## Executar o Projeto :white_check_mark:

Por fim, para executar o projeto, utilize o seguinte comando:

```bash
yarn start:dev
```

Isso iniciará o projeto em modo de desenvolvimento.
