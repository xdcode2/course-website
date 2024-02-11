# Responsive Landing Page Course Website

Build a Responsive Landing Page Course Website using React JS & TailwindCSS

## [View Demo](https://coursat-xdcode.netlify.app/ "coursat website")

![Course Website](./public/Course%20Website.png)

## 🛠️ Tools

-   React JS
-   TailwindCSS
-   Framer Motion
-   Swiper JS

## 🚀 Getting Started

To get started follow these steps:

#### Cloning the Repository

Using CLI

```bash
git clone https://github.com/xdcode2/course-website.git
```

**\*\*_Ensure you have installed [Git](https://git-scm.com) on your machine._**

or using GitHub:

-   Go to the project [repository](https://github.com/xdcode2/course-website) on my GitHub page
-   Click on the green button on the top 👆
-   Click Download ZIP

#### Installation

Install the project dependencies using npm:

```bash
npm install
```

**\*\*_Ensure you have installed [NodeJS](https://nodejs.org/en) on your machine._**

#### Running the Project

```bash
npm run dev
```

**\*\*_This project uses [Vite](https://vitejs.dev)._**

## 💻 Code Snippets

`tailwindcss.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            sm: "640px",
            md: "768px",
            lg: "992px",
            xl: "1200px",
        },
        container: {
            center: true,
            padding: "1rem",
        },
        fontFamily: {
            lato: ["Lato", "sans-serif"],
        },
        extend: {
            fontSize: {
                h1: [
                    "clamp(2.25rem, 4vw, 3.375rem)",
                    {
                        lineHeight: "normal",
                        fontWeight: "700",
                    },
                ],
                h2: [
                    "clamp(2rem, 4vw, 2.75rem)",
                    {
                        lineHeight: "normal",
                        fontWeight: "700",
                    },
                ],
                h3: [
                    "clamp(1.75rem, 4vw, 2.25rem)",
                    {
                        lineHeight: "normal",
                        fontWeight: "700",
                    },
                ],
            },
            colors: {
                primary: {
                    10: "#535c11",
                    20: "#75811f",
                    30: "#98a72c",
                    40: "#bacc3a",
                    50: "#ddf247",
                    60: "#e4f56c",
                    70: "#ebf791",
                    80: "#f1fab5",
                    90: "#f8fcda",
                },
                gray: {
                    10: "#292c32",
                    20: "#393e45",
                    30: "#4a4f59",
                    40: "#5a616c",
                    50: "#6a7280",
                    60: "#7d8491",
                    70: "#9096a1",
                    80: "#a4a9b2",
                    90: "#b7bbc2",
                },
            },
            borderRadius: {
                "4xl": "32px",
            },
        },
    },
    plugins: [],
};
```

`src/index.css`:

```css
@font-face {
    font-family: "Lato";
    src: url("../font/Lato-Regular.ttf"), format("truetype");
    font-weight: 400;
}

@font-face {
    font-family: "Lato";
    src: url("../font/Lato-Medium.ttf"), format("truetype");
    font-weight: 500;
}

@font-face {
    font-family: "Lato";
    src: url("../font/Lato-Semibold.ttf"), format("truetype");
    font-weight: 600;
}

@font-face {
    font-family: "Lato";
    src: url("../font/Lato-Bold.ttf"), format("truetype");
    font-weight: 700;
}

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
    * {
        @apply p-0 m-0 box-border scroll-smooth;
    }
    section {
        @apply relative min-h-screen py-[70px] overflow-hidden;
    }

    img {
        @apply w-full h-full object-cover select-none;
    }
}

@layer components {
    .link {
        @apply outline-none font-medium text-lg text-gray-10 cursor-pointer transition-colors hover:text-primary-40;
    }

    .btn {
        @apply px-6 rounded-full w-fit h-14 font-medium text-lg transition-colors duration-300;
    }

    .btn-primary {
        @apply rounded-full bg-primary-50 text-gray-10 hover:bg-primary-60 active:bg-primary-70;
    }

    .btn-outline {
        @apply bg-transparent border border-solid border-gray-10 text-gray-10 hover:bg-gray-10 hover:text-white;
    }

    .section-title-before {
        @apply before:content-[url("./assets/heading-left.svg")] before:absolute before:-translate-x-full before:-translate-y-2/4;
    }

    .section-title-after {
        @apply after:content-[url("./assets/heading-right.svg")] after:absolute after:-translate-y-1/4;
    }

    .footer-col {
        @apply flex flex-col gap-y-4 basis-[250px];
    }

    .social-icon {
        @apply p-1.5 bg-gray-30 rounded-full text-white;
    }

    .footer-heading {
        @apply text-xl font-semibold text-white;
    }

    .footer-link {
        @apply w-fit text-lg !leading-[normal] text-gray-80 hover:text-primary-50;
    }
}

::-webkit-scrollbar {
    width: 10px;
    height: 8px;
}

::-webkit-scrollbar-thumb {
    background-color: theme(colors.gray.40);
    border-radius: 100vmax;
    border: 2px solid transparent;
    background-clip: content-box;
}

.header__menu-icon span {
    display: block;
    position: absolute;
    width: 20px;
    height: 2px;
    background-color: #292c32;
    transition: all 200ms ease;
}

.header__menu-icon span:nth-child(1) {
    top: 0;
    left: 0;
    transform: translate(0);
}

.header__menu-icon span:nth-child(2) {
    top: 7px;
    left: 0;
    transform: translate(8px);
}

.header__menu-icon span:nth-child(3) {
    top: 14px;
    left: 0;
    transform: translate(4px);
}

.header__menu-icon:hover:not(.active) span:nth-child(1) {
    transform: translate(4px);
}

.header__menu-icon:hover:not(.active) span:nth-child(2) {
    transform: translate(0);
}

.header__menu-icon:hover:not(.active) span:nth-child(3) {
    transform: translate(8px);
}

.header__menu-icon.active span:nth-child(1) {
    top: 7px;
    transform: translate(0) rotate(225deg);
}

.header__menu-icon.active span:nth-child(2) {
    top: 7px;
    transform: translate(20px);
}

.header__menu-icon.active span:nth-child(3) {
    top: 7px;
    transform: translate(0) rotate(135deg);
}

[data-difficulty="beginner"] {
    --bg: #049905;
    --bg-alpha-35: rgba(4, 154, 4, 0.35);
}

[data-difficulty="intermediate"] {
    --bg: #f89e00;
    --bg-alpha-35: rgba(250, 158, 0, 0.35);
}

[data-difficulty="advanced"] {
    --bg: #f3381d;
    --bg-alpha-35: rgba(242, 57, 28, 0.35);
}
```

`.eslintrc.cjs`:

```js
module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: ["plugin:react/jsx-runtime", "plugin:react-hooks/recommended"],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    settings: { react: { version: "18.2" } },
    plugins: ["react-refresh"],
    rules: {
        "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    },
};
```

---

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/J3J1NMYT7)

Hey bro please don't forget to subscribe to [my channel](https://www.youtube.com/@_xdcode_ "XD Code") 😊😊.
