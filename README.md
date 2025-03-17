# Quizfy

## Visão Geral

Quizfy é uma aplicação de quiz construída como um projeto monorepo. Este repositório contém os componentes de cliente e servidor da aplicação, permitindo um desenvolvimento e implantação integrados.

**⚠️ Em Desenvolvimento ⚠️**

Este projeto está atualmente em desenvolvimento ativo e ainda não está pronto para uso em produção.

## Estrutura do Projeto

O projeto está organizado como um monorepo com a seguinte estrutura:

```
quizfy/
├── client/         # Aplicação frontend em React
├── server/         # API backend em Express
└── package.json    # package.json raiz para configuração dos workspaces
```

### Cliente

O frontend é desenvolvido com:
- React 19
- TypeScript
- Vite
- Tailwind CSS
- DaisyUI
- React Router

### Servidor

O backend é desenvolvido com:
- Express.js
- TypeScript
- Node.js

## Desenvolvimento

### Pré-requisitos

- [Bun](https://bun.sh/) como gerenciador de pacotes

### Para Começar

1. Clone o repositório
2. Instale as dependências:
   ```
   bun install
   ```

3. Inicie os servidores de desenvolvimento:

   Para executar tanto o cliente quanto o servidor:
   ```
   bun run dev:all
   ```

   Para executar apenas o cliente:
   ```
   bun run dev:client
   ```

   Para executar apenas o servidor:
   ```
   bun run dev:server
   ```

## Implantação

A aplicação está configurada para implantação na Vercel, com arquivos de configuração separados para o cliente e o servidor.