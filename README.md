# Course Subscription Platform (MERN Stack)

A full-stack MERN application that allows users to sign up, log in, browse courses, subscribe to free or paid courses, and view their subscribed courses along with subscription date.

---

## 🌐 Live Demo

- **Frontend (Vercel):** https://your-frontend-url.vercel.app
- **Backend (Render):** https://your-backend-url.onrender.com

---

## ✨ Features

- User Signup & Login
- JWT Authentication
- Browse available courses
- Subscribe to free & paid courses
- Promo code support
- View subscribed courses:
  - Course title
  - Price paid
  - Subscription date
- Protected routes
- Toast notifications
- Modern UI with Tailwind CSS

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Axios
- React Router DOM
- React Toastify

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- bcryptjs

---

---

## ⚙️ Local Development Setup

### Clone Repository

```bash
git clone https://github.com/your-username/course-subscription-mern.git
cd course-subscription-mern

## 🔧 Backend Setup (Local)

Navigate to the backend directory and install dependencies:

```bash
cd backend
npm install

### Create .env file inside backend/
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key

Start Backend Server
npm start

Backend will run at:
http://localhost:5000

Test Backend API
http://localhost:5000/courses

Frontend Setup (Local)
Navigate to the frontend directory and install dependencies:
cd ../frontend
npm install

Update API Base URL
frontend/src/api/axios.js

For local development, set:
baseURL: "http://localhost:5000"

Start Frontend Server
npm run dev

Frontend will run at:
http://localhost:5173



