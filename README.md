# SmartMail AI

SmartMail AI is a React-based application that integrates with the OpenRouter API (ChatGPT-compatible) to enhance, translate, and rewrite email messages.

> This project shows how to use AI features with a basic and minimal user interface.

## Features

- Email input with real-time character counter
- Multiple AI modes:
  - Improve
  - Shorten
  - Expand
  - Make Formal
  - Make Informal
  - Translate
- Enforced character limit with warning
- AI-powered text generation via OpenRouter
- Copy to clipboard, clear input, insert sample email
- Error handling and loading indicator

## Tech Stack

- React + Vite
- Tailwind CSS
- OpenRouter API
- Component-based architecture with lifted state management

## Live Demo

Project is live on Vercel:  
[https://smartmail.vercel.app](https://smartmail-m83v0c9yz-artems-projects-de46412b.vercel.app)

## Local Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/smartmail-ai.git
cd smartmail-ai
```
### 2. Install Dependencies

Run one of the following commands, depending on your package manager:

```bash
pnpm install
```

or

```bash
npm install
```

### 3. Create a `.env` File

Create a file named `.env` in the root of the project and add your OpenRouter API key:

```env
VITE_OPENROUTER_API_KEY=your_openrouter_api_key
```

> This key is only required for local development.  
> The deployed version is configured via the Vercel dashboard.

### 4. Start the Development Server

Use one of the following commands to start the local dev server:

```bash
pnpm run dev
```

or

```bash
npm run dev
```

---

## Deployment

This project is deployed on [Vercel](https://vercel.com) using GitHub integration.  
Environment variables are managed via the Vercel project dashboard.

---

## Getting Your OpenRouter API Key

1. Go to [https://openrouter.ai](https://openrouter.ai)  
2. Sign up and navigate to **API Keys**  
3. Copy your key and paste it into your `.env` file:

```env
VITE_OPENROUTER_API_KEY=your_key_here
```

---

## Purpose

This is a demo project focused on:

- Practical AI integration using ChatGPT-compatible APIs  
- State management patterns in React  
- Real-time form handling and validation  
- Error messaging and user experience logic

> The UI is intentionally minimal — the focus is on functional AI interaction and backend communication.


