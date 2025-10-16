# 🤖 Bot Ludvig - Assistente Imobiliário IA

## 📍 Localização do Projeto
**Pasta**: `/Users/manoellaludvig/bot ludvig/`

## 🚀 Como Executar

### 1. Abrir Terminal
```bash
cd "/Users/manoellaludvig/bot ludvig"
```

### 2. Instalar Dependências (se necessário)
```bash
npm install
```

### 3. Executar o Projeto
```bash
npm run dev
```

### 4. Acessar no Navegador
Abra: http://localhost:3000

## ✨ Funcionalidades Implementadas

- ✅ **IA Conversacional Natural** - Juliana, consultora virtual
- ✅ **Busca Inteligente** - Recomenda imóveis baseado em critérios
- ✅ **Imagens Reais** - Fotos reais dos apartamentos
- ✅ **Não Repetição** - Nunca mostra o mesmo imóvel duas vezes
- ✅ **Respeito à Localização** - Foca na região específica solicitada
- ✅ **Apresentação Automática** - Se apresenta na primeira mensagem
- ✅ **Busca Proativa** - Busca automaticamente quando tem informações suficientes

## 🏠 Base de Dados

- **15 imóveis reais** com informações completas
- **6 imagens reais** dos apartamentos
- **Filtros inteligentes** por orçamento, quartos, região
- **Links para detalhes** completos

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

## 📁 Estrutura

```
bot ludvig/
├── src/
│   ├── app/api/chat/route.ts      # API do chatbot
│   ├── components/real-estate-chat.tsx  # Interface do chat
│   └── lib/
│       ├── properties-database.ts      # Base de dados
│       └── recommendation-engine.ts    # Lógica de busca
├── public/images/                 # Imagens reais
├── .env.local                    # API key configurada
└── INSTRUCOES_INSTALACAO.md      # Guia completo
```

## 🔧 Tecnologias

- **Next.js 14** + **TypeScript**
- **Anthropic Claude** (IA)
- **Tailwind CSS** + **shadcn/ui**
- **Vercel AI SDK**

## 📞 Status

✅ **Projeto 100% Funcional**
✅ **Testado e Validado**
✅ **Pronto para Produção**

---
**Desenvolvido para Ludvig Imóveis** 🏠✨