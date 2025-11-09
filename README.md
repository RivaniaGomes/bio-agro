# Bio Agro - Landing Page

Landing page moderna e responsiva para a empresa Bio Agro, focada em captação de leads para serviços de coleta e transformação de resíduos agrícolas em adubo orgânico.

## 🌱 Sobre o Projeto

A Bio Agro é uma empresa especializada em coletar resíduos agrícolas e transformá-los em adubo orgânico de alta qualidade para a região serrana do Rio de Janeiro. Esta landing page foi desenvolvida para:

- Gerar leads qualificados de produtores rurais da região serrana
- Apresentar a proposta de coleta econômica de resíduos
- Facilitar o contato através de formulário integrado com WhatsApp
- Demonstrar o processo simples e os benefícios do serviço

## 🎨 Design e Paleta de Cores

A paleta de cores foi especialmente desenvolvida para remeter ao agronegócio:

- **Verde Principal (#547c26)** - fern-frond: Títulos principais, botões de CTA
- **Verde Claro (#d8e5bf)** - beryl-green: Fundos de seções, hover dos botões
- **Bege/Creme (#f7f8f0)** - spring-wood: Cor de fundo principal
- **Marrom (#755e44)** - tobacco-brown: Textos secundários e bordas
- **Dourado (#a69765)** - barley-corn: Destaques, ícones, texto dos botões
- **Verde Escuro (#587236)** - chalet-green: Hover dos links, títulos secundários

## 📱 Funcionalidades

### Seções da Landing Page:
1. **Hero Section** - Apresentação principal com call-to-action e navegação
2. **Como Funciona** - Processo em 3 passos simples
3. **Formulário de Pré-Cadastro** - Captação de leads com validação
4. **Footer** - Informações de contato e localização
5. **Botão Flutuante WhatsApp** - Acesso rápido ao contato

### Recursos Técnicos:
- ✅ Design responsivo (mobile-first)
- ✅ Formulário com validação em tempo real
- ✅ Máscara automática para telefone brasileiro
- ✅ Integração completa com WhatsApp
- ✅ Animações suaves de entrada (Intersection Observer)
- ✅ Modal de sucesso e erro personalizados
- ✅ Botão flutuante do WhatsApp sempre visível
- ✅ Smooth scrolling entre seções
- ✅ Schema Markup (JSON-LD) para SEO
- ✅ Meta tags Open Graph e Twitter Cards
- ✅ Acessibilidade (WCAG) com skip links
- ✅ Tracking de eventos preparado para Analytics

## 🚀 Como Usar

1. **Abrir o arquivo principal:**
   ```
   index.html
   ```

2. **Personalizar informações:**
   - O número atual do WhatsApp é: `(21) 96552-5991`
   - Para alterar, edite os arquivos `js/main.js` e `index.html`
   - Modifique textos e informações conforme necessário
   - Substitua as imagens na pasta `images/` por fotos reais

3. **Configurar integrações:**
   - Configure EmailJS seguindo as instruções em `emailjs-config.js`
   - Adicione Google Analytics se necessário
   - Integre com seu CRM preferido na função `submitToEmailJS()`

## 📁 Estrutura de Arquivos

```
bio-agro/
├── index.html           # Página principal
├── css/
│   └── style.css        # Estilos principais
├── js/
│   └── main.js          # JavaScript interativo
├── images/
│   ├── hero-background.jpg  # Imagem de fundo do hero
│   ├── logo.jpg             # Logo principal
│   └── logo - Copia.jpg     # Logo alternativo
├── emailjs-config.js    # Configuração do EmailJS
└── README.md            # Documentação
```

## 🛠 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica com Schema Markup
- **CSS3** - Estilos modernos com Grid, Flexbox e variáveis CSS
- **JavaScript (ES6+)** - Interatividade, validações e integração WhatsApp
- **Font Awesome 6.4.0** - Ícones vetoriais
- **Google Fonts** - Tipografia (Open Sans)

## 📊 Otimizações Implementadas

### Performance:
- Lazy loading de imagens
- CSS otimizado com variáveis
- JavaScript modular e eficiente
- Animações com CSS e Intersection Observer

### SEO:
- Meta tags otimizadas (title, description, keywords)
- Open Graph e Twitter Cards
- Schema markup JSON-LD para negócio local
- Estrutura semântica HTML5
- Skip links para acessibilidade

### Acessibilidade:
- Contraste adequado de cores
- Foco visível em elementos interativos
- Labels apropriadas nos formulários
- Navegação por teclado

## 📱 Responsividade

A landing page foi desenvolvida com abordagem mobile-first e breakpoints:

- **Mobile**: < 480px
- **Tablet**: 481px - 768px
- **Desktop**: > 768px

## 🔗 Integrações

### WhatsApp:
- Botão flutuante sempre visível no canto inferior direito
- Mensagem pré-formatada com dados do formulário após submissão
- Mensagem padrão para contato direto
- Links de telefone redirecionam para WhatsApp
- Número atual: (21) 96552-5991

### Formulário:
- Validação em tempo real com feedback visual
- Máscara automática para telefone brasileiro
- Campos obrigatórios: Nome, telefone, município, tipo de resíduo
- Campo opcional: Volume mensal estimado
- Modal de sucesso com botão direto para WhatsApp
- Modal de erro com opções de contato alternativo
- Integração com EmailJS configurável

## 🎯 Conversão e Analytics

O código inclui funções preparadas para:
- Google Analytics (gtag)
- Tracking de eventos (cliques, submissões, scroll)
- Métricas de engajamento

## 📞 Suporte e Personalização

Para personalizar esta landing page:

1. **Textos e Conteúdo**: Edite diretamente no `index.html`
2. **Cores e Visual**: Modifique as variáveis CSS em `:root`
3. **Funcionalidades**: Adicione/modifique no `main.js`

## 📞 Contato Atual

- **Telefone/WhatsApp:** (21) 96552-5991
- **Região de Atendimento:** Região Serrana do Rio de Janeiro
- **Horário:** Segunda a Sexta, 08:00 às 18:00

## 🔧 Configuração do EmailJS

Para configurar o envio de emails:

1. Acesse o arquivo `emailjs-config.js`
2. Cadastre-se em https://www.emailjs.com/
3. Substitua as configurações:
   - `SERVICE_ID`: ID do seu serviço de email
   - `TEMPLATE_ID`: ID do template criado
   - `PUBLIC_KEY`: Sua chave pública

## 🌟 Próximas Melhorias

- [ ] Integração completa com EmailJS/CRM
- [ ] Área administrativa para gerenciar leads
- [ ] Sistema de agendamento de coletas
- [ ] Blog com dicas de sustentabilidade
- [ ] Calculadora de volume de resíduos
- [ ] Mapa de cobertura interativo

---

**Bio Agro** - Transformando resíduos em recursos 🌱

*Desenvolvido com foco em conversão e experiência do usuário*
