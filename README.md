# Sena Premium Detailing & Tint — Site

Site de luxo (gold/black) para mobile car detailing & window tint no DFW (Prosper/Frisco/Plano/McKinney/Dallas, TX).
Astro 5 + Tailwind 4, SSR (Node), com **booking online + banco local (SQLite nativo do Node)** e **WhatsApp**.

## Rodar localmente
```bash
npm install
npm run dev        # http://localhost:4321
```

## Build de produção
```bash
npm run build
node ./dist/server/entry.mjs   # sobe o servidor SSR (porta padrão 4321)
```

## Variáveis de ambiente
Copie `.env.example` para `.env` e preencha:
- `ADMIN_PASSWORD` — senha do painel `/admin` (login: usuário qualquer, senha = este valor).
- `PUBLIC_WHATSAPP` — número no formato internacional (já = `12146560656`).
- `RESEND_API_KEY`, `BOOKING_NOTIFY_EMAIL`, `BOOKING_FROM_EMAIL` — **opcionais**.
  Se preenchidos, cada agendamento é enviado por e-mail ao dono (via Resend).
  Se vazios, o site funciona normal (WhatsApp + painel admin).

## Como funciona o booking
- O cliente preenche o formulário → grava em `data/bookings.db` (SQLite local) → redireciona para `/thank-you`.
- O dono vê todos os pedidos em **`/admin`** (protegido por senha) e pode mudar o status (new → contacted → booked → done).
- Há também o botão flutuante de **WhatsApp** e CTAs de telefone em todo o site.

> ⚠️ **Importante sobre o banco local:** o SQLite grava num arquivo no servidor.
> Funciona 100% rodando local ou num **servidor Node persistente** (VPS, Render, Railway, etc).
> Em hospedagem **serverless (ex: Vercel)** o arquivo é apagado entre requisições —
> nesse caso, ative o e-mail (Resend) e/ou conte com o WhatsApp para receber os pedidos.
> Para o painel `/admin` reter o histórico, hospede num servidor Node dedicado.

## O que falta CONFIRMAR com o dono antes de publicar
1. **Preços** — só o `Essential Detail $89` é confirmado. `Premium $199`, `Ultimate $349`,
   `Carbon Tint from $299`, `Ceramic Tint from $449` são baseados no mercado DFW (pesquisa) — confirmar.
   Editar em `src/lib/site.ts`.
2. **Fotos reais** — as imagens em `public/images/` são geradas por IA (placeholder premium).
   Troque pelos trabalhos reais dele (mesmos nomes de arquivo) e rode `node scripts/optimize-images.mjs`.
3. **Reviews** — `src/components/Reviews.astro` tem depoimentos de EXEMPLO marcados como placeholder.
   **Substitua por reviews REAIS do Google antes de publicar** (publicar reviews falsas viola regras da FTC).
4. **Endereço/e-mail/horário** — confirmar em `src/lib/site.ts` (hoje: Prosper, TX 75078; horário Mon–Sat 8–7).
5. **Domínio** — ajustar `site` em `astro.config.mjs` e `src/lib/site.ts` para o domínio final.

## Estrutura
- `src/pages/index.astro` — home (one-pager)
- `src/pages/[city].astro` — páginas de SEO local (Prosper/Frisco/Plano/McKinney/Dallas)
- `src/pages/api/book.ts` — endpoint do booking
- `src/pages/admin/` — painel de agendamentos
- `src/lib/site.ts` — **dados do negócio (NAP, serviços, preços)** — edite aqui
- `src/lib/db.ts` — banco local SQLite
- `design-system/MASTER.md` — fonte de verdade do design
