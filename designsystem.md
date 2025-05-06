## 1. Design Tokens

**1.1 Colors**

* `--color-primary`: #01761B
* `--color-primary-dark`: #025014
* `--color-bg`: #FFFFFF
* `--color-light-bg`: #FAFAFA
* `--color-border`: #E3E3E3
* `--color-text`: #22282B
* `--color-text-light`: rgba(34, 40, 43, 0.8)

**1.2 Typography**

* `--fs-xxl`: 3rem   (≈49px)
* `--fs-xl`: 2.25rem (≈36px)
* `--fs-lg`: 1.75rem (≈28px)
* `--fs-md`: 1rem    (≈16px)
* `--fs-sm`: 0.875rem(≈14px)
* `--fs-xs`: 0.75rem (≈12px)

**1.3 Spacing**

* `--sp-xxl`: 4rem
* `--sp-xl`: 2rem
* `--sp-lg`: 1.5rem
* `--sp-md`: 1rem
* `--sp-sm`: 0.5rem
* `--sp-xs`: 0.25rem

**1.4 Breakpoints**

* `--bp-sm`: 480px
* `--bp-md`: 768px
* `--bp-lg`: 1024px

---

## 2. Core Components

### 2.1 Navbar

```html
<header class="navbar">
  <div class="navbar__wrapper">
    <a href="/" class="navbar__logo">
      <img src="/assets/logo.svg" alt="Logo">
    </a>

    <nav class="navbar__center navbar__menu">
      <a href="/topics">Topics</a>
      <a href="/blog">Blog</a>
      <a href="/resources">Resources</a>
    </nav>

    <div class="navbar__auth">
      <a href="/login">Login</a>
      <a href="/signup" class="btn btn--primary navbar__signup">Sign Up</a>
    </div>

    <div class="navbar__burger">☰</div>
  </div>
</header>
```

### 2.2 Buttons

* Base class: `.btn`
* Primary modifier: `.btn--primary` (uses `--color-primary`)

### 2.3 Cards

* Structure: `<div class="card [topic-card|team-card|blog-card]">…</div>`
* Uses `.card` styles + specialized width modifiers

### 2.4 Hero & Section Titles

* Titles: `.hero__title` (h1 equivalent), `.section__title` (h2 equivalent)
* Descriptions: `.hero__desc`

### 2.5 Grids

* Base: `.grid` (flex container + gap)
* Cards layout: `.grid--cards`

### 2.6 Footer (stub)

```html
<footer class="site-footer layout-wrapper">
  <!-- Add site links, copyright -->
</footer>
```

---

## 3. Utilities & Layout

* `.layout-wrapper` → centers content, max-width 982px, horizontal padding 1rem
* Text utilities: reusable `.text-center`, margin helpers as needed
* Responsive toggle: `.navbar__burger`, `.navbar__menu.show`

---

*Next: use this design system to build a base HTML template (`base.html`) that every page will extend.*
