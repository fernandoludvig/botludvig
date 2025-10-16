# 🤖 Bot Ludvig - Assistente Imobiliário IA

## 📋 Sobre o Projeto

Este é um chatbot inteligente para consultoria imobiliária desenvolvido com Next.js 14, TypeScript e IA (Anthropic Claude). O bot "Juliana" é uma consultora virtual especializada em imóveis em Florianópolis e São José.

## ✨ Funcionalidades

- **Conversação Natural**: IA conversacional inteligente e proativa
- **Busca Inteligente**: Recomenda imóveis baseado em critérios específicos
- **Imagens Reais**: Fotos reais dos apartamentos
- **Não Repetição**: Nunca mostra o mesmo imóvel duas vezes
- **Respeito à Localização**: Foca na região específica solicitada
- **Interface Moderna**: Design responsivo e profissional

## 🚀 Instalação

### 1. Extrair o Projeto
```bash
# Extrair o arquivo ZIP
unzip Bot_ludvig_completo.zip
cd Bot_ludvig
```

### 2. Instalar Dependências
```bash
npm install
```

### 3. Configurar API Key
```bash
# O arquivo .env.local já está incluído com a API key
# Se necessário, edite o arquivo:
nano .env.local
```

### 4. Executar o Projeto
```bash
npm run dev
```

### 5. Acessar
Abra o navegador em: http://localhost:3000

## 🏠 Como Usar

1. **Inicie uma conversa** com "oi" ou "olá"
2. **A Juliana se apresentará** automaticamente
3. **Informe seus critérios**:
   - Orçamento
   - Região preferida
   - Número de quartos
   - Finalidade (morar/investir)
4. **Receba recomendações** com imagens reais
5. **Peça mais opções** se necessário

## 📁 Estrutura do Projeto

```
Bot_ludvig/
├── src/
│   ├── app/
│   │   ├── api/chat/route.ts    # API do chatbot
│   │   └── page.tsx             # Página principal
│   ├── components/
│   │   └── real-estate-chat.tsx # Componente do chat
│   └── lib/
│       ├── properties-database.ts    # Base de dados dos imóveis
│       └── recommendation-engine.ts  # Lógica de recomendação
├── public/images/               # Imagens reais dos imóveis
└── .env.local                  # Configurações (API key)
```

## 🎯 Exemplos de Uso

### Busca Básica
```
Usuário: "quero um apartamento de 2 quartos até 800 mil"
Juliana: [Mostra opções automaticamente]
```

### Busca por Região
```
Usuário: "quero um ap no Estreito"
Juliana: [Mostra apenas imóveis do Estreito]
```

### Investimento
```
Usuário: "quero um ap pra investir"
Juliana: [Foca em opções de investimento]
```

## 🔧 Tecnologias Utilizadas

- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **Anthropic Claude** - IA conversacional
- **Tailwind CSS** - Estilização
- **shadcn/ui** - Componentes UI
- **Vercel AI SDK** - Integração com IA

## 📊 Base de Dados

O projeto inclui 15 imóveis reais com:
- Informações completas (preço, quartos, área, etc.)
- Imagens reais dos apartamentos
- Links para detalhes completos
- Filtros inteligentes por critério

## 🚀 Deploy

Para fazer deploy em produção:

1. **Vercel** (Recomendado):
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Netlify**:
   ```bash
   npm run build
   # Upload da pasta .next
   ```

3. **Railway/Render**:
   ```bash
   # Conectar repositório Git
   ```

## 🛠️ Personalização

### Adicionar Novos Imóveis
Edite `src/lib/properties-database.ts`:
```typescript
{
  id: "novo_id",
  code: "codigo",
  name: "Nome do Imóvel",
  // ... outros campos
}
```

### Modificar Personalidade
Edite o `system` prompt em `src/app/api/chat/route.ts`

### Alterar Imagens
Substitua arquivos em `public/images/`

## 📞 Suporte

Para dúvidas ou problemas:
- Verifique se a API key está configurada
- Confirme se todas as dependências foram instaladas
- Verifique os logs do console para erros

## 🎉 Pronto!

Seu chatbot imobiliário está funcionando perfeitamente! A Juliana está pronta para atender seus clientes com inteligência e profissionalismo.

---
**Desenvolvido com ❤️ para Ludvig Imóveis**
