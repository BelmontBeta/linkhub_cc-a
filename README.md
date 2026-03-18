# 📚 Linkhub C-B · CESAR School

> Hub de informações centralizado para a turma de **Ciência da Computação — Turma B 2026.1** da CESAR School. Um site estático com zero dependências, instalável como app e pensado para funcionar offline.

---

## ✨ Funcionalidades

- **Grade semanal** com destaque automático no dia atual e badge "🛋️ em casa" nas sextas (aulas online)
- **Calendário de provas** agrupado por disciplina, ordenado por data e com destaque nas próximas
- **Monitorias** agrupadas por disciplina, com distinção entre presencial, online e "a definir"
- **Contador regressivo** para a próxima prova — com emoji de urgência progressivo (📅 → 📖 → 😰 → 🚨)
- **Links do Google Classroom** por disciplina, embutidos nos headers de Provas e Monitorias
- **Links institucionais** com distinção visual entre URLs e PDFs (badge PDF)
- **Share bar** com: cópia de link, gerador de QR Code via QuickChart API (com download em `.png`) e atalho direto pro WhatsApp da turma
- **Modo escuro/claro** com toggle animado, respeita `prefers-color-scheme` do sistema e persiste via `localStorage`
- **Botão voltar ao topo** com animação spring, aparece após 300px de scroll
- **Logo clicável** que recarrega a página
- **Tutorial de instalação PWA** em modal, com abas separadas para Android e iPhone
- **Loading state** com spinner para evitar flash de conteúdo não estilizado

---

## ⚙️ Diferenciais Técnicos

### 🗂️ Configuração centralizada
Todo o conteúdo do site — turma, links, grade, provas, monitorias e links do Classroom — vive em um único arquivo `config.js`. Atualizar informações não requer tocar no HTML.

```js
// Exemplo: adicionar nova prova
{ data: "2026-06-10", disciplina: "Sistemas Digitais", tipo: "AV2 · 2ª Unidade", horario: "08:15", sala: "Sala 05 · Apolo" }
```

### 📱 PWA (Progressive Web App)
O site é instalável na tela inicial de qualquer celular, sem passar por loja de aplicativos. Implementado com:
- `manifest.json` com metadados do app e ícone
- `sw.js` com estratégia **Network First + fallback para cache**, garantindo funcionamento offline após a primeira visita

### 🎨 Design System com CSS Variables
Todo o sistema visual é controlado por variáveis CSS no `:root`, incluindo tema escuro via `[data-theme="dark"]`. A transição entre temas é fluida com `transition` no `body`.

### 📐 Layout totalmente responsivo
A grade semanal usa `CSS Grid` com breakpoints para 5 colunas (desktop), 3 (tablet landscape), 2 (tablet portrait) e 1 (mobile). Provas e monitorias também adaptam para grid de 2 colunas em telas maiores.

| Tela | Grade | Provas/Monitorias |
|---|---|---|
| ≥ 900px | 5 colunas | 2 colunas |
| 620–899px | 3 colunas | 1 coluna |
| 420–619px | 2 colunas | 1 coluna |
| ≤ 419px | 1 coluna | 1 coluna |

### 🔤 Tipografia
- **Display:** [Bricolage Grotesque](https://fonts.google.com/specimen/Bricolage+Grotesque) — títulos e labels
- **Corpo:** [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) — texto geral

---

## 🗃️ Estrutura de Arquivos

```
linkhub/
├── index.html                          # Aplicação principal (HTML + CSS + JS)
├── config.js                           # ⚙️ Configuração centralizada — edite aqui
├── manifest.json                       # Metadados PWA
├── sw.js                               # Service Worker (cache offline)
├── logo-cesar-school-branca.png        # Logo da CESAR School
├── school_laranja.png                  # Favicon
├── Manual-do-Estudante-2026.1-CESAR-School.pdf
└── Calendário Acadêmico 2026.1 (...).pdf
```

---

## 🚀 Deploy

Hospedado na **Vercel** com deploy automático a cada push na branch `main`.

```bash
# Atualizar conteúdo (ex: novas provas, links do Classroom)
git add config.js
git commit -m "update: datas AV2"
git push
```

A Vercel faz o redeploy em menos de 1 minuto.

---

## 🛠️ Como adicionar links do Classroom

No `config.js`, preencha o campo `classroom` de cada disciplina:

```js
disciplinas: [
  { nome: "Matemática para Computação", classroom: "https://classroom.google.com/c/SEU_ID" },
  { nome: "Sistemas Digitais",          classroom: "https://classroom.google.com/c/SEU_ID" },
  // ...
]
```

Os botões aparecem automaticamente nos headers de Provas e Monitorias assim que o campo for preenchido.

---

## 📦 Tecnologias

| Tecnologia | Uso |
|---|---|
| HTML5 + CSS3 + JS vanilla | Base do projeto — zero frameworks, zero build |
| CSS Grid + Custom Properties | Layout responsivo e sistema de temas |
| Service Worker API | Cache offline e PWA |
| Web App Manifest | Instalação como app nativo |
| QuickChart API | Geração dinâmica de QR Code |
| Google Fonts | Bricolage Grotesque + Plus Jakarta Sans |

---

## 👨‍💻 Autor

Feito por **Thony Barreto** — Representante de sala, CC Turma B 2026.1 · CESAR School.

> Vamos juntos! 🚀
