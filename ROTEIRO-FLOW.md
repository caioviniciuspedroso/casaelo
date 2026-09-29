# Casa Elo — da chama à forma

Um filme de 8 segundos, com aparência de filmagem real, para substituir a foto provisória na seção “De pai para filho”. O vídeo ainda não foi gerado. A cena é ilustrativa; não deve ser apresentada como filmagem da família ou da oficina da Casa Elo.

## Como gerar no Google Flow

Crie um projeto, escolha geração de vídeo a partir de texto, selecione paisagem (16:9) e use o prompt abaixo. Prefira a maior qualidade disponível na sua conta. O Flow também aceita imagens como ingredientes ou quadros de referência; as opções variam conforme o modelo. [Guia oficial do Flow](https://support.google.com/flow/answer/16353334?hl=en).

## Prompt para copiar

```text
Create an 8-second photorealistic live-action macro film for a premium Brazilian family jewelry atelier. One continuous locked-off shot, no cuts. A skilled adult goldsmith's hands at an authentic, well-used wooden jeweler's workbench. A plain gold wedding band with NO gemstones rests on a ceramic soldering block. A professional small jeweler's torch enters from the upper right. The ring, torch tip and working hands must remain within the central 55 percent of the frame so the scene can be cropped for mobile.

Timeline: 0–2 seconds: the torch is unlit, hands calmly position the tool. 2–3 seconds: the torch ignites with a small, physically credible blue flame. 3–6 seconds: a steady precise flame approaches the seam of the plain band, with subtle warm reflected light on the metal. 6–8 seconds: hold the same composition and the steady flame. The ring keeps exactly the same shape throughout. No melting, no sparks shower, no explosion.

Natural skin texture, believable fingers and tools, real scratches on the soldering block, physically accurate gold reflections. Understated warm side lighting, dark forest-green and charcoal out-of-focus workshop background, subtle film grain, shallow depth of field but the torch tip and ring stay sharp. Quiet, intimate, premium documentary cinematography. No camera orbit, no zoom, no slow-motion spectacle. No faces. No logo, text, captions, music or voice-over. Real filmed material, never a 3D render, CGI, cartoon or glossy synthetic animation.
```

## O que conferir antes de escolher o resultado

- A aliança permanece igual do início ao fim, sem se deformar.
- A chama nasce na ponta do maçarico; dedos e ferramentas mantêm formas naturais.
- A ação continua visível no recorte central de celular.
- Não surgem pedras sendo aquecidas, textos ou marcas inventadas.

Se a geração errar a sequência, gere uma nova tentativa com o mesmo enquadramento. O prompt descreve a intenção; não garante que o modelo respeite todos os tempos.

## Entrega e aplicação na página

Baixe o MP4 e envie aqui. Nome sugerido: `atelier-casa-elo.mp4`. Na integração, priorizar H.264, 1080p e arquivo leve. A seção já aceita vídeo com controles, inicia uma vez ao entrar na tela e respeita a preferência de movimento reduzido. O início da chama estará dentro do próprio filme, após os primeiros dois segundos.

Para integrar manualmente: coloque o arquivo em `dist/assets/atelier-casa-elo.mp4` e preencha `atelierVideoSource` em `dist/film.js` com `assets/atelier-casa-elo.mp4`. Ajuste o crédito para “Filme ilustrativo gerado por IA”. Verifique o vídeo e publique a nova versão. Até isso acontecer, a página exibe uma fotografia e não mostra botão de reprodução falso.

Remotion pode ser usado para montar e finalizar os clipes depois de prontos. Para criar esta filmagem a partir do prompt, o roteiro está preparado para o Flow.

## Atualização — vídeo recebido
Em 29/09/2026 o usuário aprovou e enviou Fire_plume_over_gold_ring_20260929062122.mp4. O filme já está integrado como fundo na seção de ofício. As instruções anteriores ficam como histórico do roteiro inicial.
