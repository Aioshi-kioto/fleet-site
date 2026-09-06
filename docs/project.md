# Fleet Site — бриф проекта

Рекламный сайт-каталог автопарка. Сайт продаёт машины и host-а; бронирование, оплата, календарь и условия аренды остаются на Turo.

---

## К чему пришли

Сайт — **витрина**, не продукт проката.

- Пользователь смотрит флот, открывает карточку машины, нажимает CTA и уходит на оригинальный listing в Turo.
- На сайте **нет** дат, календаря, цен, форм заявок, логина, платежей и своей админки.
- CTA ведёт напрямую на Turo: `Check availability on Turo`.
- Данные машин живут в коде (`data/cars.ts`), фото — в `public/cars/`. После `git push` сайт обновляется на Vercel.
- **Supabase и любая база не нужны** — нет админки, тексты и картинки не заливаются в облако.
- Дизайн — отдельный premium-бренд (Apple × premium car rental × Airbnb), а не копия Turo.
- Приоритет №1 — **mobile**, потому что Instagram / Facebook Ads дадут большую долю мобильного трафика.
- Для рекламы обязательны аналитика и прямые посадочные на конкретные машины / категории.

Funnel:

```
Instagram / Facebook / Google Ads
              ↓
     Landing / страница машины
              ↓
        Фото + social proof
              ↓
   Check availability on Turo
              ↓
              Turo
```

---

## Цель

Быстрый, красивый, мобильный marketing-сайт для рекламы автопарка в Seattle и направления трафика на реальные Turo listings.

Turo остаётся transaction layer. Этот сайт должен продавать конкретные машины и host-а лучше, чем страница профиля на Turo.

Social proof host-а (ориентир с профиля):

| Метрика        | Значение        |
| -------------- | --------------- |
| Rating         | 5.0             |
| Reviews        | 208             |
| Completed trips| 240+            |
| Status         | All-Star Host   |
| Fleet          | 14 cars         |
| Location       | Seattle / Federal Way, WA |

---

## Что делаем и чего не делаем

### Делаем

- Каталог машин с фото, маркой, моделью, годом, коротким описанием и характеристиками
- Детальная страница каждой машины
- CTA на оригинальный Turo listing
- SEO, Open Graph, structured data, sitemap
- GA4 / GTM, Google Ads conversion, Meta Pixel
- Отдельные посадочные под рекламные запросы

### Не делаем

- Booking, календарь, price calculator, формы заявок
- Платежи, логин, аккаунты
- Supabase, база данных, CMS, API, админка
- Копирование визуала Turo
- Готовые «car rental» шаблоны с фильтрами дат и booking engine

---

## Стек

| Слой            | Выбор                                      | Зачем                                      |
| --------------- | ------------------------------------------ | ------------------------------------------ |
| Framework       | Next.js App Router + TypeScript            | Статика, скорость, SEO                     |
| UI              | Tailwind CSS + shadcn/ui + Lucide          | Чистый минимализм без лишнего UI-кита      |
| Motion          | Motion / Framer Motion — совсем немного    | Лёгкий polish, не цирк                     |
| Картинки        | `next/image` + WebP в `public/cars/`       | Качество фото = половина конверсии         |
| Хостинг         | Vercel, свой домен, HTTPS                  | Push → автодеплой                          |
| Данные          | `data/cars.ts` + `public/cars/`            | Файл в репо. Без Supabase, CMS и API       |
| Analytics       | GTM / GA4, Google Ads, Meta Pixel          | Видно, какие машины конвертят в Turo       |

Старт: `npx create-next-app@latest` + shadcn. Автомобильный template не покупать — обычно это «RentCarPro» с ненужным booking engine.

---

## Структура проекта

```
app/
  page.tsx                 # главная
  cars/
    page.tsx               # каталог, фильтр ?type=suv
    [slug]/
      page.tsx             # детальная страница машины
  about/
  faq/
  privacy/
  terms/

components/
  header.tsx
  hero.tsx
  trust-bar.tsx
  car-card.tsx
  car-grid.tsx
  vehicle-gallery.tsx
  vehicle-specs.tsx
  faq.tsx
  footer.tsx

data/
  cars.ts

public/
  cars/
```

Главное правило: все карточки, `/cars`, `/cars/[slug]`, SEO metadata, Open Graph, structured data и sitemap строятся из одного `cars.ts`.

---

## Данные: `cars.ts`

Один объект машины — источник правды для карточки, detail page, SEO и аналитики.

```ts
export const cars = [
  {
    slug: "volkswagen-tiguan-2019",
    make: "Volkswagen",
    model: "Tiguan",
    trim: "SEL",
    year: 2019,
    category: "SUV",

    rating: 5.0,
    trips: 11,

    seats: 5,
    fuel: "Gas",
    mpg: 25,
    transmission: "Automatic",
    drivetrain: "AWD",

    description:
      "Comfortable midsize SUV with plenty of space for Seattle trips.",

    features: [
      "Apple CarPlay",
      "Bluetooth",
      "Backup camera",
      "Heated seats",
    ],

    images: [
      "/cars/tiguan/1.webp",
      "/cars/tiguan/2.webp",
      "/cars/tiguan/3.webp",
    ],

    turoUrl: "https://turo.com/us/en/suv-rental/...",
  },
];
```

Цены в данные не кладём: они динамические на Turo.

Обновление флота: правка файла → `git push` → Vercel деплоит сайт.

---

## Навигация и страницы

Навигация минимальная:

```
[ Logo ]     Fleet     Why us     FAQ          [ View cars ]
```

### Главная — секции по порядку

| #  | Блок                         | Задача                                      |
| -- | ---------------------------- | ------------------------------------------- |
| 01 | Hero                         | Premium cars. Simple booking.               |
| 02 | Trust bar                    | 5.0 / 240+ trips / All-Star Host            |
| 03 | Fleet                        | Карточки машин, фильтры категорий           |
| 04 | Why rent with us             | Почему этот host, а не случайный listing    |
| 05 | How booking works            | Сайт → Turo. Без своей брони                |
| 06 | Reviews                      | Social proof                                |
| 07 | FAQ                          | Pickup, страховка, что решается на Turo     |
| 08 | CTA                          | Browse the fleet / Check availability       |
| 09 | Footer                       | Privacy, terms, контакты                    |

Hero (desktop):

```
Premium cars.
Simple booking.

Reliable car rentals in Seattle
backed by 240+ completed trips.

[ Browse the fleet ]   [ ★ 5.0 · 208 reviews ]

          большая фотография автомобиля
```

Фильтры флота: `SUV` · `Sedan` · `Luxury` · `Economy`. Не таблица, не сложный поиск.

### Каталог `/cars`

Сетка карточек. На большом экране чаще **3 колонки**, не 4: фото выглядит дороже.

Фильтр категории через query: `/cars?type=suv`.

### Детальная страница `/cars/[slug]`

Удобство как у Turo, визуально чище. Booking-панель Turo заменена одной сильной CTA-карточкой.

Состав:

1. Большая gallery сверху
2. Название, год, trim
3. Rating · trips · All-Star Host
4. Specs chips: seats, fuel, MPG, transmission
5. About this vehicle
6. Features
7. Pickup / location — точный адрес выдаётся через Turo
8. Why rent this car
9. CTA-карточка (desktop sticky справа, mobile sticky снизу)

Цены, даты и бронь **не показываем**. Вместо этого: `Check price & availability on Turo →`.

---

## Карточка машины

Фото занимает **65–70%** внимания карточки. На карточке только то, что помогает выбрать машину, не спецификация целиком.

```
┌─────────────────────────────┐
│                             │
│         PHOTO               │
│                             │
├─────────────────────────────┤
│ BMW X5                      │
│ 2017 · Premium SUV          │
│                             │
│ AWD    Auto    5 seats      │
│                             │
│ View vehicle             →  │
└─────────────────────────────┘
```

На карточке **не** вываливать: 4 doors, gasoline, bluetooth, A/C, USB и прочий мусор. Это живёт на listing page.

Клик по карточке ведёт на `/cars/[slug]`, не сразу на Turo.

---

## CTA и механика бронирования

Booking на этом сайте не нужен. Одна внешняя ссылка:

```tsx
<a
  href={car.turoUrl}
  target="_blank"
  rel="noopener noreferrer"
>
  Check availability on Turo
</a>
```

### Desktop

Sticky-карточка справа при скролле:

```
┌─────────────────────────────┐
│ Volkswagen Tiguan           │
│ 2019 SEL                    │
│                             │
│ ★ 5.0 · All-Star Host       │
│                             │
│ Pricing, dates and booking  │
│ are handled securely on     │
│ Turo.                       │
│                             │
│ [ Check availability       ]│
│ [      on Turo  ↗          ]│
│                             │
│ You’ll be redirected to     │
│ Turo to complete booking.   │
└─────────────────────────────┘
```

### Mobile

Большую booking-карточку не держать. Sticky / fixed bar снизу экрана:

```
Volkswagen Tiguan · 2019
[ Check availability on Turo ↗ ]
```

Это главный конверсионный элемент для рекламного трафика.

Пользовательский путь:

```
Homepage / Fleet
    ↓
клик по карточке
    ↓
/cars/volkswagen-tiguan-2019
    ↓
[ Check availability on Turo ]
    ↓
оригинальный listing Turo
```

---

## Дизайн

Отдельный premium rental brand. Turo — только checkout-слой.

Ощущение: **Apple × premium car rental × Airbnb**, не обычный прокат.

### Цвет

Выбран **вариант A — premium light**. Dark automotive выглядит эффектно на BMW, но landing из Google Ads вызывает больше доверия на светлом фоне.

| Токен      | Значение                         |
| ---------- | -------------------------------- |
| Background | `#FAFAFA` / white                |
| Text       | almost black                     |
| Cards      | white                            |
| Borders    | light gray                       |
| Accent     | deep green **или** electric blue |

Дизайн делают большие фотографии и типографика, не декоративные эффекты.

Пример тона:

```
PREMIUM CAR RENTALS

BMW X5
Built for the Pacific Northwest.

View vehicle →
```

### Адаптив

Сначала ~390px, потом desktop. Instagram / Facebook Ads = mobile-first.

| Диапазон     | Экран          |
| ------------ | -------------- |
| 0–639px      | mobile         |
| 640–1023px   | tablet         |
| 1024–1439px  | desktop        |
| 1440px+      | large desktop  |

В Tailwind:

```
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
```

На mobile:

- никаких таблиц
- никаких 4-колоночных сеток
- карточки почти на всю ширину
- sticky CTA внизу detail page

---

## Реклама и аналитика

База не нужна. Analytics — обязательны.

### Воронка события

```
Google Ads click
        ↓
landing page
        ↓
car selected
        ↓
View car
        ↓
Check availability
        ↓
Turo
```

События:

| Событие              | Когда                          | Параметры                         |
| -------------------- | ------------------------------ | --------------------------------- |
| `view_vehicle`       | Открыта страница машины        | vehicle, year                     |
| `select_vehicle`     | Клик по карточке во флоте      | vehicle, year, source             |
| `click_turo`         | Клик CTA на Turo               | vehicle, year, source             |

`source` например: `vehicle_page`, `homepage_card`, `sticky_bar`.

Пример: `click_turo` с `vehicle = volkswagen_tiguan`, `year = 2019`, `source = vehicle_page`.

Так видно не только «реклама → сайт», но и какие машины реально отправляют людей в Turo. Слабо конвертящие объявления можно отключать.

### Посадочные под Ads

Весь трафик на homepage не гонять. Кампания ведёт сразу на релевантную страницу.

| Запрос рекламы              | Куда вести              |
| --------------------------- | ----------------------- |
| BMW X5 Rental Seattle       | `/cars/bmw-x5-2017`     |
| Cheap car rental Seattle    | `/cars/nissan-sentra`   |
| SUV rental Seattle          | `/cars?type=suv`        |

---

## SEO

Из `cars.ts` автоматически:

- title / description каждой машины
- Open Graph (фото машины в превью Ads / Messenger)
- structured data
- sitemap

---

## Оценка объёма

Автомобильный template не брать. Собрать ~8 компонентов.

| Этап                | Оценка     |
| ------------------- | ---------- |
| Setup               | 30 min     |
| Homepage            | 2–3 h      |
| Cars catalog        | 1–2 h      |
| Vehicle page        | 2–3 h      |
| Responsive          | 1–2 h      |
| Animations          | 30 min     |
| SEO                 | 1 h        |
| Analytics / pixels  | 1 h        |
| Polish              | 2–3 h      |

MVP — за один день. Polished рекламный сайт — за 2–3 дня.

Для этого проекта важнее дизайн, фотографии, скорость и mobile UX, чем сложная архитектура.
