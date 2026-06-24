# Portfólio — Richard Rocha

![React](https://img.shields.io/badge/React-18-0E63E6?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38BDF8?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11-0055FF?logo=framer&logoColor=white)

Portfólio pessoal de **Richard Rocha** — Desenvolvedor Full Stack.
Visual em navy + azul, com animações de foco, linha do tempo de experiência,
projetos reais de cliente com vídeo, e contato direto via WhatsApp.

🔗 **Ao vivo:** _adicione aqui a URL da Vercel depois do deploy_

## ✨ Destaques

- Hero com foto e animação "desfoque → foco"
- **Linha do tempo de experiência** (Konia, Plano Santa Saúde, Verion, iPORT)
- Seção de serviços (web, mobile cross-platform, back-end & APIs)
- **Projetos reais** (Ótica Menezes e RGM Personalizações) com prévia em vídeo
- Skills agrupadas e seção de contato com WhatsApp, LinkedIn, GitHub e currículo
- Totalmente responsivo e com acessibilidade (foco visível, `prefers-reduced-motion`)

## 🛠️ Tecnologias

React · Vite · Tailwind CSS · Framer Motion · Lucide Icons

## 🚀 Rodar localmente

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera a versão de produção em /dist
npm run preview  # serve a versão de produção
```

Requer Node 18+.

## ✏️ Editar o conteúdo

Tudo que aparece no site fica em **um único arquivo**:

```
src/data/profile.js
```

Ali você muda nome, textos, **experiência**, **projetos** (descrição, tecnologias,
vídeo e links), skills e contatos. Quando os sites dos projetos forem publicados,
basta preencher o campo `live` de cada um para aparecer o botão "Ver ao vivo".

Imagens e vídeos ficam em `public/img/`.

## 📁 Estrutura

```
src/
├─ App.jsx
├─ index.css
├─ data/profile.js          # ← TODO O CONTEÚDO
└─ components/
   ├─ Navbar.jsx
   ├─ Hero.jsx
   ├─ About.jsx
   ├─ Experience.jsx        # linha do tempo profissional
   ├─ Services.jsx
   ├─ Projects.jsx          # projetos com vídeo
   ├─ Skills.jsx
   ├─ Contact.jsx
   └─ Footer.jsx
```

## ☁️ Deploy na Vercel

1. Suba este projeto para um repositório no GitHub.
2. Em [vercel.com](https://vercel.com) → **Add New → Project** → importe o repositório.
3. A Vercel detecta **Vite** automaticamente:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. **Deploy**. Pronto. 🎉

---

© Richard Rocha — feito com React, Tailwind e Framer Motion.
