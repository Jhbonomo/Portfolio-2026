# Portfolio 2026 V2

Portfolio pessoal de Juliana - Product Designer

## 📁 Estrutura do Projeto

```
Portfolio-2026-V2/
├── index.html          # Página principal
├── images/             # Assets de imagens e vídeos dos projetos
├── scripts/
│   └── main.js         # JavaScript principal (vanilla JS)
├── styles/
│   ├── global.css      # Estilos globais e componentes
│   └── tokens.css      # Design tokens (cores, fontes, espaçamentos)
└── README.md
```

## 🎨 Tecnologias

- **HTML5** - Markup semântico
- **CSS3** - Estilização com custom properties (CSS variables)
- **Vanilla JavaScript** - Interações e animações
- **Intersection Observer API** - Detecção de scroll e lazy loading

## 🚀 Funcionalidades

### Navegação
- Smooth scroll entre seções
- Active state baseado em scroll
- Reposicionamento do menu ao scrollar

### Speech Bubble
- Efeito parallax
- Posicionamento dinâmico da seta

### Project Cards
- **Desktop**: Hover para trocar imagem/vídeo
- **Mobile**: Scroll-based com Intersection Observer
- Animações de entrada escalonadas
- Suporte para imagens e vídeos

### Responsividade
- **Breakpoint**: 912px
- Desktop: Layout horizontal com grid 2 colunas
- Mobile: Layout vertical com imagem sticky

## 📐 Design System

### Tokens (ver `styles/tokens.css`)
- Cores (beige, white, backgrounds)
- Tipografia (Merriweather + Merriweather Sans)
- Espaçamentos (spacing scale)
- Border radius
- Transições

### Componentes
- Navigation
- Speech Bubble
- Project Cards (major/minor)
- Image Container

## 🎯 Estrutura CSS

```css
/* Global Styles */
/* Navigation */
/* Layout */
/* Cases Section */
/* Project Cards */
/* Typography */
/* Contact */
/* Responsive Design - Mobile (≤912px) */
```

## 🎭 Estrutura JavaScript

```javascript
/* Utility Functions */
  - positionTriangle()

/* Main Application Initialization */
  - Smooth Scroll Functionality
  - Navigation - Click Handlers & Active States
  - Speech Bubble - Parallax Effect
  - Project Cards - Hover & Scroll Interactions
  - Desktop: Card Hover Behavior
  - Mobile: Card Scroll Behavior
  - Card Entrance Animations
```

## 📱 Uso dos Data Attributes

Cards devem incluir os seguintes data attributes:

```html
<div class="card" 
     data-image="images/project.jpg"
     data-video="images/project.mp4"
     data-media-type="image|video"
     data-bgcolor="#8B5CF6"
     data-aspect-ratio="landscape|portrait">
    <!-- conteúdo do card -->
</div>
```

## 🔧 Desenvolvimento Local

1. Clone o repositório
2. Abra `index.html` em um browser moderno
3. Ou use um servidor local:
   ```bash
   # Python
   python -m http.server 8000
   
   # Node.js
   npx serve
   ```

## 🌐 Browsers Suportados

- Chrome/Edge (últimas 2 versões)
- Firefox (últimas 2 versões)
- Safari (últimas 2 versões)

**APIs Requeridas:**
- Intersection Observer API
- CSS Custom Properties
- ES6 (const, let, arrow functions)

## 📝 Notas de Implementação

- **Sem frameworks**: Projeto usa vanilla JavaScript para máxima performance
- **Mobile-first**: Estilos base para desktop, overrides para mobile
- **Performance**: Intersection Observer para animações e lazy loading
- **Acessibilidade**: Links semânticos, ARIA labels onde necessário

## 🎨 Customização

### Adicionar novo projeto

1. Adicione a imagem/vídeo em `/images/`
2. Crie um novo card em `index.html` com data attributes
3. O JavaScript detectará automaticamente

### Alterar cores/fontes

Edite as variáveis em `styles/tokens.css`:

```css
:root {
    --color-beige: #F5E6D3;
    --font-family-base: 'Merriweather Sans', sans-serif;
    /* ... */
}
```

## 📄 Licença

© 2026 Juliana - Todos os direitos reservados
