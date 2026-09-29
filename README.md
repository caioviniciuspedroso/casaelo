# Casa Elo — Landing page de serviços

Página estática com fontes e imagens locais. Sem dependência de um servidor de aplicação.

## Conteúdo

- Restauração e conserto de joias.
- Fabricação de alianças e anéis de formatura.
- Ajustes, gravação e cravação apresentados como possibilidades para consulta técnica.
- Amolação de alicates.
- História: de pai para filho, mais de 30 anos de ofício. A página não menciona o avô e não atribui essa idade à empresa recém-criada.
- WhatsApp: +55 64 99285-1597. Caldas Novas, GO; envio de peças para todo o Brasil.

## Interações

Abas acessíveis por teclado. Comparador de imagens com controle de faixa. Cena WebGL em Three.js 0.185.1: maçarico modelado em 3D, chama azul com shader, luz dinâmica e joia sobre bancada. A rolagem controla a intensidade. A cena pausa fora da tela e com a página oculta; movimento reduzido recebe composição estática. O comparador usa imagens geradas e identificadas como demonstração ilustrativa.

Remotion foi avaliado como opção sugerida. Foi escolhido Three.js porque a experiência depende de interação contínua com a rolagem, sem exportação de um vídeo.

## Arquivos

- `dist/index.html`: textos, seções, links e contatos.
- `dist/styles.css`: identidade e responsividade.
- `dist/app.js`: abas, menu e comparador.
- `dist/atelier.js`: cena 3D e comportamento com a rolagem.
- `dist/assets/`: imagens, logos, fontes e Three.js locais.
- `asset-prompts.json`: origem das imagens ilustrativas geradas para a página.

Para abrir localmente, rode `node serve.mjs` e acesse `http://127.0.0.1:4173`. Abrir o HTML por `file://` não carrega os módulos da cena 3D. A publicação utiliza a pasta `dist`.

Os logos vieram da identidade Casa Elo criada nesta conversa. As imagens ilustrativas foram geradas com ImageGen. Não são fotos de resultados reais. Fontes: Italiana e DM Sans, distribuídas pelo Google Fonts; os arquivos de licença acompanham os assets. Three.js: licença MIT incluída.

## Verificação

Verificação de sintaxe JS, referências locais, links internos, destino do WhatsApp e interações DOM. O navegador integrado ficou indisponível durante esta execução: a renderização WebGL e a conferência visual em desktop/mobile não foram confirmadas. O detector de design rodou em modo degradado sem os parsers completos; não equivale a auditoria visual aprovada.
