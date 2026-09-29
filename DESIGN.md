---
name: Casa Elo
description: Joalheria de cuidado, continuidade e precisão artesanal.
colors:
  green: "#063e32"
  gold: "#c3a16a"
  ivory: "#f3efe5"
  black: "#171b19"
  line: "#d8d3c7"
  muted: "#5d655f"
  restoration-surface: "#e9e5da"
  craft-surface: "#101914"
  header-surface: "#09271f"
  gold-hover: "#ddbe89"
  button-ink: "#0a2c23"
  focus: "#af823b"
typography:
  display:
    fontFamily: "Italiana, Georgia, serif"
    fontSize: "clamp(56px, 6.4vw, 96px)"
    fontWeight: 400
    lineHeight: 1.07
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Italiana, Georgia, serif"
    fontSize: "clamp(40px, 4.25vw, 64px)"
    fontWeight: 400
    lineHeight: 1.07
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Italiana, Georgia, serif"
    fontSize: "clamp(32px, 3.2vw, 46px)"
    fontWeight: 400
    lineHeight: 1.07
    letterSpacing: "-0.025em"
  body:
    fontFamily: "DM Sans, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
  button:
    fontFamily: "DM Sans, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 500
  label:
    fontFamily: "DM Sans, Arial, sans-serif"
    fontSize: "12px"
    letterSpacing: "0.1em"
rounded:
  square: "0"
  circular: "50%"
spacing:
  page: "clamp(24px, 6vw, 100px)"
  section: "110px"
  section-mobile: "68px"
  page-mobile: "24px"
components:
  button-primary:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.button-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.square}"
    padding: "17px 23px"
  button-primary-hover:
    backgroundColor: "{colors.gold-hover}"
  comparison-handle:
    backgroundColor: "{colors.green}"
    textColor: "{colors.ivory}"
    rounded: "{rounded.circular}"
    width: "52px"
    height: "52px"
---

# Design System: Casa Elo

## Overview

**Creative North Star: "O ofício que continua"**

A direção existente associa a joia ao afeto e o trabalho artesanal à continuidade. Verde profundo, dourado contido e superfícies de marfim sustentam uma presença premium. Títulos serifados amplos dão espaço à história; texto funcional simples e separadores finos organizam uma composição de baixa densidade.

A metáfora sintetiza a direção já registrada, sem representar uma nova escolha de identidade. O compromisso factual é o ofício transmitido de pai para filho, com mais de 30 anos de experiência; não se atribui essa idade à empresa e não se menciona o avô na página.

**Key Characteristics:**
- Contraste entre seções escuras atmosféricas e áreas claras de leitura.
- Italiana nos títulos; DM Sans no conteúdo e nos controles.
- Macro ilustrativa e comparação com identificação explícita.
- Movimento concentrado na bancada 3D e em respostas discretas dos controles.

Evidência: extração de `dist/index.html`, `dist/styles.css`, `dist/assets/fonts.css`, `dist/app.js` e `dist/atelier.js` em 28/09/2026. O navegador IAB estava indisponível; não houve inspeção de screenshots ou aprovação visual renderizada. Este documento registra o código e não certifica a composição em dispositivos reais.

## Colors

A paleta combina verde de joalheria, metal quente e papel marfim. O frontmatter contém os valores normativos; variantes locais de iluminação permanecem no CSS.

### Primary
- **Verde esmeralda profundo (`green`)**: assinatura institucional, fechamento de contato, links e estados selecionados.
- **Dourado artesanal (`gold`)**: marca, botões e progresso; o hover clareia o metal.

### Neutral
- **Marfim (`ivory`)** e **preto suave (`black`)**: fundos claros e leitura, com marfim também nas superfícies escuras.
- **Pedra de restauração (`restoration-surface`)**: fundo da comparação.
- **Verde de bancada (`craft-surface`)** e **verde de cabeçalho (`header-surface`)**: profundidade das cenas escuras.
- **Linha mineral (`line`)** e **texto secundário (`muted`)**: separadores e explicações.
- **Ouro de foco (`focus`)**: orientação da navegação por teclado.

**The Material Rule.** Use dourado como detalhe de metal e sinal de ação; mantenha verde e marfim como grandes campos da composição.

## Typography

**Display Font:** Italiana, com Georgia e serif como alternativas.
**Body Font:** DM Sans, com Arial e sans-serif como alternativas.

Fontes locais em `dist/assets`, com `font-display: swap`. Italiana usa peso 400; DM Sans possui declarações para 400, 500 e 600. O contraste vem da escala e do espaço. Ênfases em títulos mudam de cor e permanecem sem itálico.

### Hierarchy
- **Display:** abertura em três linhas; no mobile, `clamp(53px, 12vw, 76px)` com entrelinha 1.05.
- **Headline:** títulos das seções; bancada usa `clamp(44px, 4.7vw, 70px)`. Bancada e contato usam 42px no mobile.
- **Title:** chamada de painel de serviço; 36px no mobile.
- **Body:** limite global de 65ch, com larguras menores por contexto. Apoio do hero usa entrelinha 1.8.
- **Label:** legendas compactas, com caixa alta e espaçamento de letras no comparador e nos dados de atendimento.

**The Reading Rule.** Preserve DM Sans nos controles e orientações; reserve Italiana à narrativa e aos títulos.

## Layout

Largura fluida e margem lateral compartilhada, sem contêiner global de largura fixa. Seções padrão têm 110px de respiro vertical, com ajustes locais. Cabeçalho de 100px, não fixo. O hero ocupa a altura disponível da tela, entre 720px e 1040px no desktop, com imagem de fundo e degradês de contraste.

Serviços usam dois campos equivalentes e quatro abas. Restauração divide texto/imagem em 0.8/1.2. Bancada usa 42%/58%; contato usa 1.4/0.6. Divisores finos e grandes intervalos organizam os blocos sem uma grade de cartões.

Abaixo de 1000px, intervalos e proporções se ajustam. Até 700px, as seções passam a uma coluna, com 24px laterais e 68px verticais. As abas têm rolagem horizontal e o menu vira lista expansível. O hero reorganiza imagem e texto, com altura mínima de 860px. A bancada coloca a cena abaixo do texto. Acima de 1700px, o recorte do hero e seu texto de apoio recebem ajustes.

## Elevation & Depth

Estrutura predominantemente plana. Profundidade vem da alternância tonal, de degradês e da iluminação 3D. Sombras de interface são locais, sem elevação recorrente em cartões.

### Shadow Vocabulary
- **Pegador do comparador:** `0 4px 16px #0003`.
- **Menu mobile:** `0 14px 20px #0002`.

## Shapes

Botões, painéis e imagens mantêm cantos retos. O círculo fica reservado ao pegador do comparador: 52px no desktop e 46px no mobile. Ícones usam traço fino arredondado, normalmente em 22px. Divisores têm 1px; aba ativa e linha do comparador têm 2px. A marca usa os elos dourados fornecidos, preservando suas proporções.

## Components

### Buttons

Retângulo dourado com texto verde escuro e seta, altura mínima de 56px e intervalo interno de 28px. Hover clareia o fundo e sobe 2px em 0.2s. Foco usa contorno de 3px afastado 6px. No hero mobile, padding e fonte diminuem. Links secundários usam sublinhado fino e seta, sem bloco preenchido.

### Navigation

Marca à esquerda, links centrais e contato à direita. Links de 14px recebem linha dourada no hover. No mobile, botão de duas linhas controla a lista com `aria-expanded` e fechamento por Escape. O link de pular conteúdo aparece ao receber foco.

### Service tabs

Abas textuais sobre linha contínua. Seleção em verde, peso 600 e sublinhado de 2px. Apenas um painel fica visível; setas, Home e End movem seleção e foco. A lista usa divisores, títulos de 19px e explicações de 14px.

### Before/after comparison

Imagem 4:3 com sobreposição recortada pelo range e etiquetas marfim. Input range invisível ocupa a imagem e mantém operação por teclado; o contêiner ganha contorno em foco. O pegador circular é decorativo. A legenda identifica demonstração ilustrativa e condiciona o resultado ao material e estado da peça.

### Scroll-driven atelier

Cena Three.js com chama ligada à rolagem. Trecho de 210vh no desktop e 185svh no mobile, com área interna sticky. Progresso altera legenda e chama. Renderização limitada a aproximadamente 30fps, suspensa fora da área observada ou com página oculta. Movimento reduzido usa cena estática e remove o trecho prolongado; ausência ou perda de WebGL usa texto substituto e seção compacta. Textos permanecem visíveis sem depender de animação.

### Contact closing

Campo verde, chamada serifada, botão dourado de WhatsApp e coluna de dados com divisor. No mobile, o divisor passa ao topo. Não há formulário; o atendimento começa pelo link de WhatsApp.

## Do's and Don'ts

### Do:
- **Do** preserve verde, dourado, marfim e preto suave como base da identidade.
- **Do** mantenha textos visíveis independentemente das animações.
- **Do** conserve foco visível, abas por teclado e alternativa à cena 3D.
- **Do** identifique comparações geradas como demonstrações ilustrativas.
- **Do** atribua os mais de 30 anos ao ofício transmitido de pai para filho.

### Don't:
- **Don't** apresente imagens ilustrativas como trabalhos reais ou fotografias da família.
- **Don't** acrescente depoimentos, prazos, garantias ou endereço não confirmados.
- **Don't** atribua 30 anos de existência à nova empresa ou mencione o avô na página.
- **Don't** trate documentação extraída do código como aprovação visual renderizada.
