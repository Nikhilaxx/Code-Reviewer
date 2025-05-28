# 🔍 AI Code Reviewer

An interactive web application that leverages **Google Gemini 2.0 Flash** to review source code across multiple programming languages. Simply paste your code, click **Review**, and receive intelligent, constructive feedback powered by AI.

## ✨ Features

- ✅ Beautiful, user-friendly interface
- 🧠 Uses Google Gemini 2.0 Flash for fast and high-quality code reviews
- 🧾 Supports multiple languages (JS, Python, C++, etc.)
- 🔐 Secure environment with API key management
- 💬 Real-time code syntax highlighting
- 📋 Side-by-side input and review output

## 🧩 Tech Stack

### Frontend

- React
- PrismJS (syntax highlighting)
- React Markdown + Highlight.js (for rendering review output)
- CSS3 (Custom UI Styling)

### Backend

- Node.js (Express)
- Google Generative AI SDK (Gemini 2.0 Flash)

## 🚀 Getting Started

### 🔧 Prerequisites

- Node.js & npm
- Google Generative AI API Key

### 1️⃣ Clone the Repo

```bash
git clone https://github.com/your-username/ai-code-reviewer.git
cd ai-code-reviewer
```

### 2️⃣ Install Dependencies

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### 3️⃣ Set Environment Variable

In the `backend/` directory, create a `.env` file:

```
GOOGLE_GEMINI_KEY=your-google-api-key
```

### 4️⃣ Start Development

```bash
# In one terminal (backend)
cd server
npm start

# In another terminal (frontend)
cd client
npm run dev
```

## 📁 Folder Structure

```
ai-code-reviewer/
├── frontend/       # React frontend
│   ├── App.jsx
│   ├── App.css
│   └── ...
├── backend/       # Express backend
│   ├── ai.service.js
│   ├── routes/
│   ├── app.js
│   └── ...
└── README.md
```

## 🧠 How It Works

- You paste code into the editor.
- On clicking **Review**, your code is sent to the backend.
- The backend calls Google Gemini with a code reviewer system prompt.
- Gemini returns a detailed analysis, which is rendered beautifully on the right pane.

🔗 Powered by [Google Generative AI](https://ai.google.dev/)

```

```
