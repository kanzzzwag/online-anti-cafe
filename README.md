# Online Anti-Cafe

A website for an online anti-cafe: instead of paying for food, visitors buy **time**.
One pass opens every minigame on the site and fills the account with cafe points,
which can be spent on virtual treats (coffee, pizza, cookies) that sit beside your
avatar or can be sent to a friend.

**Live site:** https://kanzzzwag.github.io/online-anti-cafe/

## Two versions of the site

| Version | Entry page | Built with |
|---|---|---|
| Custom CSS | [`index.html`](index.html) | HTML5, hand-written CSS, Flexbox and CSS Grid |
| Bootstrap | [`bootstrap/index.html`](bootstrap/index.html) | HTML5, Bootstrap 5.3 (grid, navbar, cards, forms, tables) and a small theme file |

Each version links to the other from its footer.

## Pages

| Page | Content |
|---|---|
| Home | What an anti-cafe is, how a pass works, popular games |
| Games | Catalogue of the minigames included in every pass |
| Events | Upcoming game nights, in a 1/2/3-column card grid |
| Cafe | Virtual treats and their price in cafe points |
| Prices | Pass plans in a scrollable price table |
| Rules | House rules for players |
| About | About the project and the author, with a photo gallery |
| Contact | Contact details and a feedback form |

The Bootstrap version contains Home, Games, Cafe, Prices, About and Contact.

## Responsiveness

Both versions use the same breakpoints, so they switch layout at the same widths:

- **Mobile** (below 768px): one column, centred navigation, full-width forms
- **Tablet** (768px and up): two cards per row, medium type
- **Desktop** (992px and up): three cards per row, large type

In the custom CSS version the base rules are written for phones first, and the
media queries at the end of [`css/style.css`](css/style.css) only change design
tokens (font sizes, column count). Wide tables scroll horizontally inside their
own box, so the page itself never scrolls sideways.

## Project structure

```
index.html, games.html, ...   custom CSS version
css/style.css                 styles for the custom CSS version
bootstrap/*.html              Bootstrap version
bootstrap/css/style.css       Bootstrap theme (cafe colours)
images/                       photos and favicon shared by both versions
```

## Running locally

No build step is needed. Open `index.html` in a browser, or serve the folder
with any static server.

## Author

Batyrkhan Kanapiya, Astana IT University, front-end course project, 2026.
