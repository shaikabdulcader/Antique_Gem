# Antique Gem - Luxury Gemstone E-commerce

Antique Gem is a premium e-commerce landing page designed for selling high-quality, natural gemstones. Built with modern web technologies, it offers a luxurious and seamless user experience for collectors, investors, and jewelry enthusiasts.

## 💎 Features

-   **Modern Design**: A sophisticated, responsive UI with a focus on luxury aesthetics using a custom color palette (Maroon, Gold, Sand).
-   **Animated Interactions**: Smooth entry animations and hover effects powered by Framer Motion.
-   **Responsive Layout**: Fully responsive design that works perfectly on desktops, tablets, and mobile devices.
-   **Glassmorphism Effects**: Styled with glassmorphism in the navigation and other interactive elements.
-   **Google Maps Integration**: Embedded Google Map in the footer for easy location finding.
-   **Multi-page Routing**: Dedicated Home, About, and Contact pages with consistent branding.

## 🛠️ Technology Stack

-   **Framework**: [Next.js 15](https://nextjs.org/) (App Directory)
-   **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Font**: [Google Fonts](https://fonts.google.com/) (Inter, Outfit, Montserrat)

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

-   Node.js 18.17 or later
-   npm, yarn, or pnpm

### Installation

1.  **Clone the repository**

    ```bash
    git clone https://github.com/yourusername/antique-gem.git
    cd antique-gem
    ```

2.  **Install dependencies**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Run the development server**

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

4.  **Open in Browser**

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

```
├── app/                  # Next.js App Router directories
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   ├── globals.css       # Global styles and Tailwind directives
│   ├── layout.tsx        # Root layout with fonts and metadata
│   └── page.tsx          # Home page
├── components/           # Reusable UI components
│   ├── Navbar.tsx        # Responsive navigation bar
│   ├── Footer.tsx        # Site footer
│   ├── Hero.tsx          # Landing page hero section
│   ├── ProductGrid.tsx   # Product display grid
│   └── ...
└── public/               # Static assets (images, icons)
```

## 📄 License

This project is licensed under the [MIT License](LICENSE).
