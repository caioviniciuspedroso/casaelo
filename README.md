# Casa Elo — página de joias e serviços

Página estática com fotos e fontes locais. Execute node serve.mjs e abra http://127.0.0.1:4173. A publicação utiliza dist.

## Revisão visual — 29/09/2026

- Vitrine fotográfica de alianças, formatura e presentes, com orçamento contextual pelo WhatsApp.
- Quatro abas de serviços com fotos grandes.
- Comparador antes/depois mantido, com imagens geradas identificadas como ilustração.
- Vídeo aprovado pelo usuário integrado como fundo cinematográfico. O roteiro original está em ROTEIRO-FLOW.md como histórico.
- História de pai para filho e mais de 30 anos de ofício, sem atribuir essa idade à nova empresa.
- Atendimento em Caldas Novas e envio de peças para todo o Brasil; WhatsApp +55 64 99285-1597.

## Arquivos

dist/index.html: conteúdo e fotos. dist/styles.css: identidade e responsividade. dist/app.js: menu, abas e comparador. dist/film.js: integração opcional do vídeo, sem requisição a arquivo inexistente. CREDITOS-FOTOS.md: fontes das imagens de demonstração.

O vídeo de 8 segundos em Full HD é carregado próximo da seção, reproduzido sem som em loop quando visível e pausado fora da tela ou com a aba oculta. Botão manual de pausa/reprodução. Movimento reduzido usa um frame estático, com reprodução opcional. O MP4 preserva o vídeo original H.264, removendo apenas o áudio e habilitando faststart.

## Verificação

Verificados: arquivos locais, âncoras, número do WhatsApp, quatro abas e navegação por teclado, comparador nos limites e menu com Escape. Revisão visual da página em desktop e viewport móvel de 390 px. Navegação por teclado confirmada no navegador; o controle de cliques da ferramenta teve comportamento inconsistente, portanto a checagem automatizada não comprova gestos de toque em dispositivo físico. O poster é um quadro do próprio filme e serve como alternativa em erro de mídia.

As fotografias são referências temporárias, não um portfólio da Casa Elo. A imagem de abertura e o antes/depois são ilustrativos e gerados por IA. Fontes Italiana e DM Sans com licenças incluídas. O cliente pode enviar imagens próprias para as próximas revisões.
