🕉️ Ganopoly Express
A fast, simplified Indian-themed board game inspired by Monopoly Express.

Ganopoly Express is a digital board game built with Angular 21, TailwindCSS, and FontAwesome, inspired by the concept of Monopoly Express but redesigned with an original Ganesha-inspired Indian theme.
The goal is to offer a light, fast, positive, and colorful experience.

🚀 Features

Built with Angular 21

Styled using TailwindCSS

Icons provided by FontAwesome

Fully custom simplified 12-space board

Dice-based gameplay

1 human + up to 3 AI opponents

Simple, fast game loop

Indian aesthetic inspired by Ganesha

📦 Tech Stack
Layer	Tool
Framework	Angular 21
Styling	TailwindCSS
Icons	FontAwesome
Language	TypeScript
Tooling	Angular CLI
🎮 Game Rules (Simplified Ganopoly Express)
Board Layout – 12 Spaces

Start (+200 €)

Property (cheap)

Property (medium)

Chance Card

Bonus (+100 €)

Property (high value)

Tax (–100 €)

Property (medium)

Prison (skip next turn)

Property (cheap)

Chance Card

Parking (+100 € reward)

Turn Sequence

Roll 2 dice

Move forward

Pass Start → +200 €

Resolve the landed space

End turn → next player or AI

Properties

Can be purchased if unowned

AI auto-buys if it can afford it

Rent must be paid to owners

Chance Cards

Examples:

+150 €

–100 €

Move to another space

Give 50 € to all players

Lose next turn

Gain a blessing (+100 €)

Prison

Skip one turn.

🔧 Development
1. Development server

Start a dev server with:

ng serve


Navigate to:
👉 http://localhost:4200/

Hot-reload is automatic.

🛠️ Code scaffolding

To generate a new component:

ng generate component component-name


For all schematics:

ng generate --help

🏗️ Building the application

Build for production:

ng build


Output goes to dist/, optimized and minified.

🧪 Running unit tests

Run tests with Karma:

ng test

🧭 Running end-to-end tests

Angular 21 no longer ships with an e2e framework.
You may choose Cypress, Playwright, or any preferred tool.

🎨 Styling (TailwindCSS)

Tailwind is configured in:

tailwind.config.js

global styles in styles.css or styles.scss

Utility classes are used throughout the templates.

⭐ FontAwesome

FontAwesome Free is included for icons.
Importations are managed through global styles or component-level usage depending on the project structure.
