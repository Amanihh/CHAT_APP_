# 💬 Realtime Chat App

> A modern chat application with real-time messaging, file sharing, and friend management built using the MERN stack and Socket.IO.

**Realtime Chat App** is a full-stack application that allows users to communicate instantly through text and file messages. It features secure authentication, dynamic friend systems, cloud-based file storage, and a responsive UI.

---

## 🚀 Features

- 🔐 User authentication with JWT and bcrypt  
- 🧑‍🤝‍🧑 Friend request system (send/accept/delete)  
- 💬 Real-time messaging using Socket.IO  
- 📁 Image and file sharing via Cloudinary  
- 📦 Group chat support (future scope)  
- 🔎 Search and filter contacts  
- 🌐 Presence indicator (online/offline)  
- ⚙️ Modern responsive UI with Tailwind CSS  

---

## 🧰 Tech Stack

| Layer       | Tech Used                                         |
|-------------|--------------------------------------------------|
| Frontend    | React.js, Axios, Tailwind CSS, Zustand           |
| Backend     | Node.js, Express.js, MongoDB, Socket.IO          |
| Auth        | JWT, bcrypt                                       |
| Storage     | Cloudinary                                        |
| State Mgmt  | Zustand                                           |
| Misc.       | Toastify, Lucide-react (for icons), React Router |

---

## 🧑‍💻 Getting Started

### 📁 Clone the repository

```bash
git clone https://github.com/HirdeshPal888527/Realtime-Chat-app.git
cd Realtime-Chat-app
```

🔧 Backend Setup
1. Navigate to the backend folder and install dependencies:
```bash
cd backend
npm install
```

2. Create a .env file inside /backend with the following:
```env
PORT=3001
JWT_KEY=your_jwt_secret
MONGO_URL=your_mongodb_url
```

# Cloudinary Credentials
```env
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
```

3. Start the backend server:
```bash
npm run dev
```


💻 Frontend Setup
1. Navigate to the frontend folder and install dependencies:
```bash
cd frontend
npm install
```

2. Create a .env file inside /frontend with the following:
```env
VITE_SERVER_URL=http://localhost:3001
```
3. Start the frontend development server:
```bash
npm run dev
```
```env
Visit http://localhost:3000 in your browser.
```

💾 File Upload – Cloudinary Setup
All file uploads (e.g., profile pictures, chat media) are handled using Cloudinary.

Make sure the following environment variables are correctly set in your backend .env file:
```env
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
```
The backend uses the Cloudinary Node SDK for secure uploads:
cloudinary.uploader.upload(filePath, options)

✅ After completing these steps, your app should be fully functional in local development mode.


