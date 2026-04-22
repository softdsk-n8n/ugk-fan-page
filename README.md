# UGK — Подземные Короли Южного Хип-Хопа

Fan-страница, посвящённая UGK (Underground Kingz) — легендарному хип-хоп дуэту из Порт-Артура, Техас.

## Стек

- **Astro 5** — статический генератор
- **Tailwind CSS v4** — стилизация
- **GSAP** — анимации (ScrollTrigger, 3D tilt, parallax)
- **motion-one** — микро-взаимодействия

## Запуск

```bash
npm install
npm run dev      # → http://localhost:4321
npm run build    # → dist/
npm run preview  # preview built site
```

## Структура

```
src/
├── components/     9 секций + Nav
├── layouts/        BaseLayout (meta, OG, schema.org)
├── pages/          index.astro
├── scripts/        gsap-init.ts (ScrollTrigger, tilt, parallax, timeline draw)
└── styles/         global.css (Tailwind v4 @theme, glitch, marquee, scanlines, noise)
public/
└── images/
    ├── members/    4 пользовательских фото
    └── albums/     6 обложек (placeholder → заменить на реальные)
```

## Секции

1. Hero — split-screen, glitch-заголовок
2. Intro — кто такие UGK
3. Members — Bun B + Pimp C
4. Discography — 6 альбомов, horizontal scroll-snap, 3D tilt
5. Essential Tracks — 8 треков с YouTube iframe
6. Timeline — 10 событий, SVG line draw
7. Legacy — влияние + quotes + marquee
8. Gallery — masonry grid, hover glitch
9. Footer — disclaimer, credits, links, marquee

## Перед деплоем

- [ ] Заменить placeholder-обложки на реальные (fair-use)
- [ ] Создать og-image.png (1200x630)
- [ ] Проверить YouTube iframe ID на корректность
- [ ] Обновить `site` в `astro.config.mjs` на реальный домен
 
