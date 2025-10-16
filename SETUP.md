# Configuração do Projeto

## 1. Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto com o seguinte conteúdo:

```env
ANTHROPIC_API_KEY=sua_chave_api_aqui
```

## 2. Como obter a API Key da Anthropic

1. Acesse [console.anthropic.com](https://console.anthropic.com)
2. Crie uma conta ou faça login
3. Vá para a seção "API Keys"
4. Clique em "Create Key"
5. Copie a chave gerada
6. Cole no arquivo `.env.local`

## 3. Instalação e Execução

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Acessar no navegador
http://localhost:3000
```

## 4. Estrutura de Arquivos

O projeto está organizado da seguinte forma:

- `src/app/` - Páginas e rotas da API
- `src/components/` - Componentes React
- `src/lib/` - Utilitários e lógica de negócio
- `package.json` - Dependências do projeto
- `tailwind.config.ts` - Configuração do Tailwind CSS
- `tsconfig.json` - Configuração do TypeScript

## 5. Personalização

### Adicionar Novos Imóveis
Edite `src/lib/properties-database.ts` para adicionar novos imóveis à base de dados.

### Modificar o Comportamento do Chat
Edite o system prompt em `src/app/api/chat/route.ts` para personalizar as respostas do chatbot.

### Alterar Visual
Modifique os estilos em `src/app/globals.css` e nos componentes para ajustar o design.
