# Rhytmo Design System

The Rhytmo Design System is the creative backbone of the Gibson guitar brand's digital experience. It is designed to maintain consistency, scalability, and accessibility across all user interactions, ensuring a harmonious blend of form and function that reflects Gibson's legacy and innovation.

## 🎨 Styling

The design system uses styled-components for styling. This allows for modular and reusable component styles.

## 🌟 Design Tokens

Our design tokens are managed using Style Dictionary. To build the tokens, run:

```
npm run build:tokens
```

This will generate the necessary design tokens and TypeScript declarations based on the configuration.

All base colors are already defined. Use Figma or adjust JSON to add component specific tokens.

## 📦 Project Setup

### Prerequisites

Before you start, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (v14 or higher)
- [npm](https://www.npmjs.com/get-npm) (v6 or higher)

### Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/your-repo/gibson-design-system.git
cd gibson-design-system
npm install
```

## 🚀 Available Scripts

In the project directory, you can run the following scripts:

```
npm run dev
```

Runs the development server using Vite. Open http://localhost:3000 to view it in your browser.

```
npm run build
```

Compiles TypeScript and bundles the project using Vite for production.

```
npm run build:tokens
```

Builds the design tokens using Style Dictionary and generates TypeScript declarations.
Previews the production build locally.

```
npm run storybook
```

Starts Storybook for developing and testing UI components. Open http://localhost:6006 to view it in your browser.

npm run build-storybook
Builds the Storybook static site for deployment.

## 📚 Storybook

We use Storybook for developing and testing our UI components in isolation. To start Storybook, run:

```
npm run storybook
```

To build a static version of Storybook for deployment, run:

```
npm run build-storybook
```
