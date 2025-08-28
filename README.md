🧑‍💻 AI Code Reviewer

An AI-powered tool that reviews your code and gives suggestions for improvements, best practices, and bug detection.
Built with MERN stack + Gemini API, this project helps developers get instant feedback on their code.

🚀 Features

✨ Live code editor with syntax highlighting (using PrismJS)

🤖 AI-powered code review (via Gemini/OpenAI API)

📜 Markdown formatted review output with syntax highlighting

🎨 Clean & modern UI with loader for better UX

🌍 Deployable for free (Frontend → Vercel / Backend → Render or Railway)

🛠️ Tech Stack

Frontend: React, Tailwind CSS, PrismJS, React Simple Code Editor, React Markdown
Backend: Node.js, Express.js
AI Service: Google Gemini / OpenAI API
Deployment: Vercel (frontend), Render/Railway (backend)

📂 Project Structure
AI-Code-Reviewer/
│
├── backend/
│ ├── server.js # Entry point
│ ├── app.js # Middleware & routes setup
│ ├── routes/ # API endpoints
│ ├── controllers/ # Request handling
│ └── services/ # AI integration logic
│
├── frontend/
│ ├── src/
│ │ ├── App.jsx # Main React app
│ │ ├── App.css # Styles
│ │ └── components/ # (optional) reusable UI parts
│ └── package.json
│
└── README.md

⚡ Getting Started
1️⃣ Clone the repo
git clone https://github.com/NoumanAhmed01/AI-Code-Reviewer.git
cd ai-code-reviewer

2️⃣ Setup Backend
cd backend
npm install

Create a .env file in /backend with:

PORT=3000
GEMINI_API_KEY=your_api_key_here

Start the backend:

npm start

3️⃣ Setup Frontend
cd ../frontend
npm install
npm run dev

By default it runs at: http://localhost:5173

Make sure backend is running at http://localhost:3000
.

🌍 Deployment

Frontend: Deploy /frontend folder on Vercel
or Netlify
.

Backend: Deploy /backend folder on Render
or Railway
.

⚠️ Don’t forget to update your frontend axios.post URL to the deployed backend endpoint.

🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to fork the repo and submit a PR.

📜 License

This project is open source under the MIT License.

✨ Built with ❤️ by Nouman Ahmed
