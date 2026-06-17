# Design System — Sena Premium Detailing & Tint (MASTER)

> Fonte de verdade do design. Gerado via ui-ux-pro-max (automotive / luxury dark)
> e ajustado pelas regras inegociáveis da agência + identidade da marca SENA.
> Overrides por página vão em `design-system/pages/`.

## Marca
- **Negócio:** Sena Premium Detailing & Tint
- **Posicionamento:** Mobile car detailing & window tint de luxo — "we come to you".
- **Região:** Prosper / Frisco / Plano / McKinney / Dallas, TX (DFW).
- **Personalidade:** premium, confiável, masculino-elegante, automotivo, exclusivo.

## Estilo base
- **Dark Mode (OLED)** — fundo quase preto, alto contraste, brilho dourado sutil.
- Estética: gold-on-black metálico, fotografia automotiva grande, respiro generoso,
  acabamento "showroom de luxo". Nada de poluição visual.
- Performance acima de enfeite (Core Web Vitals). Efeitos só onde agregam.

## Paleta (tokens)
| Role | Token | Hex | Uso |
|------|-------|-----|-----|
| Background base | `--bg` | `#0A0A0A` | fundo principal |
| Surface | `--surface` | `#141414` | cards, seções alternadas |
| Surface raised | `--surface-2` | `#1C1C1C` | cards elevados, inputs |
| Gold | `--gold` | `#D4AF37` | acento principal |
| Gold light | `--gold-light` | `#F4D77E` | brilho/realce do gradiente |
| Gold deep | `--gold-deep` | `#B8860B` | sombra do gradiente metálico |
| Text | `--text` | `#F5F5F5` | texto principal |
| Text muted | `--text-muted` | `#A3A3A3` | texto secundário (≥4.5:1 no fundo) |
| Border | `--border` | `rgba(212,175,55,0.18)` | bordas douradas sutis |
| Hairline | `--hairline` | `rgba(255,255,255,0.08)` | divisórias neutras |

- **Gradiente metálico gold (CTAs, headings de destaque):**
  `linear-gradient(135deg, #B8860B 0%, #D4AF37 35%, #F4D77E 50%, #D4AF37 65%, #B8860B 100%)`
- **CTA:** botão com fundo gradiente gold, texto `#0A0A0A`. (NÃO usar vermelho.)
- WhatsApp mantém verde de marca `#25D366` apenas no ícone/botão flutuante.

## Tipografia (máx. 2 famílias)
- **Display / Headings:** `Playfair Display` (serif de luxo, encorpada — peso 700–900).
- **Body / UI / botões:** `Sora` (sans geométrica nítida, altíssima legibilidade).
- Racional: mistura clássica de luxo — serif elegante nos títulos + sans nítida
  no resto. Charme da serif sem perder a nitidez (Playfair em peso alto evita o
  ar "fino demais" da Bodoni).
- Import:
  `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;0,800;0,900;1,600&family=Sora:wght@400;500;600;700&display=swap');`
- Escala headings: hero clamp(2.75rem, 6vw, 5.5rem); h2 clamp(2rem, 4vw, 3.25rem).
- Body 16px+ no mobile, line-height 1.6, line-length 65–75ch.
- Eyebrows/labels: Jost 600, uppercase, letter-spacing 0.18em, cor gold.

## Layout
- Container `max-w-7xl`, padding lateral generoso (px-6 / md:px-10).
- Seções com bastante respiro vertical (py-20 / md:py-28).
- Navbar flutuante com respiro do topo; conteúdo nunca encosta nas bordas.
- Escala z-index: 10 (sticky), 20 (dropdown), 30 (floating WA), 50 (modal/menu).

## Padrão de seções (home)
1. Hero (vídeo/imagem do carro, headline + "$89 Basic Detail", CTA Book + WhatsApp)
2. Trust strip (cidades atendidas · mobile · insured · satisfaction)
3. Services (tiers de detailing: Basic $89 / Premium / Ultimate)
4. Window Tint
5. How it works (3 passos — mobile service)
6. Gallery / Before & After
7. Why Sena (diferenciais, garantias)
8. Reviews
9. Booking (form online + WhatsApp)
10. Footer (NAP, schema, áreas atendidas)

## Efeitos / microinterações
- Scroll reveal sutil (fade + translateY), staggered nos cards.
- Hover: transição de cor/brilho dourado e shadow — SEM scale que desloque layout.
- Brilho dourado sutil em headings de destaque (text-shadow leve).
- `transition` 150–300ms. Respeitar `prefers-reduced-motion`.

## Ícones
- SVG (Lucide/Heroicons), viewBox 24×24, traço fino. NUNCA emoji como ícone.

## Acessibilidade (inegociável)
- Contraste ≥ 4.5:1 (texto sobre preto OK; checar muted sobre surface).
- Focus rings visíveis (anel dourado).
- Labels em todos os inputs; aria-label em botões só-ícone.
- Touch targets ≥ 44px. Alt text descritivo em todas as imagens.

## Anti-patterns a evitar
- Páginas de produto estáticas/sem vida — usar reveal e fotografia forte.
- Vermelho como CTA (quebra a marca gold/black).
- Mais de 2 famílias tipográficas.
- Emoji como ícone. CSS inline. Conteúdo colado nas bordas.

## Locale (EUA)
- Tudo em inglês americano nativo. Telefone (214) 656-0656; moeda $; estado TX.
- Conformidade TCPA no form (consentimento de contato). Schema em inglês.
