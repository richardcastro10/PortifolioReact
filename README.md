# Portfólio — Richard Rocha

Portfólio pessoal feito com **React + Vite**, **Tailwind CSS** e **Framer Motion**.
Visual em navy + azul, com animações de foco, seção de serviços (para freelance),
projetos com print + tecnologias, e CTAs diretos para WhatsApp, LinkedIn, GitHub e currículo.

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera a versão de produção em /dist
npm run preview  # serve a versão de produção
```

Precisa de Node 18+.

## Onde editar (tudo num lugar só)

```
src/data/profile.js
```

Ali você muda: nome, headline, textos do "Sobre", serviços, **projetos**
(nome, descrição, tecnologias, links de "ver ao vivo" e do GitHub), skills,
e os links de contato (WhatsApp, currículo, LinkedIn, GitHub).

## Imagens e vídeos

Ficam em `public/img/`:
- `richard.png` — sua foto (recorte com fundo transparente)
- `projetos/` — os **vídeos** dos projetos (`.mp4`) + um quadro de capa (`.jpg`)

Os cards de projeto tocam um vídeo curto do site rodando (autoplay, em loop, sem som).
Para trocar/adicionar: coloque o `.mp4` (e um `.jpg` de capa) em `public/img/projetos/`
e aponte os campos `video` e `poster` do projeto em `profile.js`.
Quando os sites estiverem publicados, é só preencher o campo `live` de cada projeto
para aparecer o botão "Ver ao vivo".

## Estrutura

```
src/
├─ App.jsx
├─ index.css
├─ data/profile.js          # ← TODO O CONTEÚDO
└─ components/
   ├─ Navbar.jsx
   ├─ Hero.jsx              # foto + animação de foco + CTAs + stats
   ├─ About.jsx
   ├─ Experience.jsx        # linha do tempo de experiência profissional
   ├─ Services.jsx          # "como posso ajudar" (atrai freelance)
   ├─ Projects.jsx          # cards com print, tecnologias e links
   ├─ Skills.jsx
   ├─ Contact.jsx           # CTA de fechamento
   └─ Footer.jsx
```

## Publicar na Vercel

1. Suba este projeto para um repositório no GitHub.
2. Em vercel.com → **Add New → Project** → importe o repositório.
3. A Vercel detecta **Vite** automaticamente:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Clique em **Deploy**. Pronto.

> Dica: você pode apontar o mesmo domínio do seu portfólio atual para este novo
> projeto, ou substituir o repositório que já está conectado na Vercel.

## Próximos passos sugeridos

- Trocar os prints por imagens em resolução maior / mais "limpas" quando tiver.
- Adicionar 1–2 projetos mais recentes (de preferência algo em React) para reforçar.
- Confirmar o horário de resposta e, se quiser, adicionar um e-mail de contato.
```
