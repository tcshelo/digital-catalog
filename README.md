# Catálogo Digital — Vitrine Automotiva (White-Label Architecture)

Aplicação web multi-páginas desenvolvida como **template base orientado a dados (*Data-Driven*)** para catálogos digitais comerciais e showrooms de alto padrão. 

Projetado para ser facilmente adaptável a diferentes nichos de mercado (automotivo, imobiliário, mobiliário ou equipamentos) apenas através da alteração de arquivos de configuração e dicionários, sem necessidade de refatoração dos componentes visuais.

---

## Principais Funcionalidades

- **Navegação Multi-Páginas (`react-router-dom`):**
  - `/` **Início:** Hero cinematográfico, faixa de marcas parceiras, prévia do acervo e pilares de curadoria.
  - `/acervo` **Catálogo Completo:** Filtragem combinada por categoria e busca instantânea por modelo, marca ou código SKU.
  - `/item/:id` **Ficha Técnica Dedicada:** URL compartilhável individualmente, galeria interativa com miniaturas, especificações dinâmicas e botão de cotação.
  - `/consultoria` **Encomenda Sob Demanda:** Formulário integrado que monta mensagens estruturadas diretamente para o WhatsApp comercial.
- **Arquitetura White-Label:** Identidade da marca, contatos, estatísticas e atributos técnicos 100% desacoplados da camada de interface (`src/config/brandConfig.js` e `src/data/catalogData.js`).
- **Internacionalização (i18n):** Suporte nativo a **Português (PT-BR)** e **Inglês (EN-US)** via sistema de tokens numéricos com persistência no `localStorage`.

---

## Tecnologias Utilizadas

- **React 19** + **Vite**
- **Tailwind CSS v4**
- **React Router DOM**
- **Lucide React** (Ícones)

---

## Estrutura do Projeto

```text
src/
├── assets/               # Imagens locais e recursos estáticos
├── components/
│   ├── catalog/          # Cards de produto e barra de filtros
│   ├── layout/           # Navbar responsiva, Footer e controle de scroll
│   └── sections/         # Seções institucionais (Hero, Marcas, Diferenciais, Banner)
├── config/
│   └── brandConfig.js    # Configurações centrais da marca e parâmetros de contato
├── data/
│   └── catalogData.js    # Base de dados estruturada dos itens e categorias
├── pages/                # Páginas principais vinculadas às rotas
└── utils/
    ├── i18n.js           # Motor de tradução e persistência de idioma
    ├── whatsappHelper.js # Gerador dinâmico de links de cotação
    └── languages/        # Dicionários de tokens (PT-BR / EN-US)