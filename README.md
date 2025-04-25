# 📋 Taskify - Task Management Application

Taskify is a full-stack task management system built with **Angular 18** on the frontend and **Node.js + Express** with **MongoDB** on the backend. It allows users to create, update, filter, and delete tasks with priorities, due dates, and statuses.

---

## 🧱 Tech Stack

| Layer        | Technology                    |
|--------------|-------------------------------|
| Frontend     | Angular 18, RxJS, SCSS        |
| Backend      | Node.js, Express              |
| Database     | MongoDB (Mongoose ODM)        |
| API Protocol | REST                          |
| UI Framework | Bootstrap / Angular Material (optional) |

---

## 📦 Project Structure

taskify/
├── backend/
└── frontend/

- **/backend** - Node.js Express REST API with MongoDB
- **/frontend** - Angular 18 SPA for UI/UX

---

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js (v20+)
- Angular CLI (`npm install -g @angular/cli`)
- MongoDB (local or Atlas)
- Git

---

## 📂 Backend Setup

cd backend
npm install

### 🧪 Run Backend

# Development
npm run dev

# or

# Production
npm start

> The server will run on http://localhost:5000

🧩 Environment Variables  
Create a `.env` file in backend/:

PORT=5000  
MONGO_URI=mongodb://localhost:27017/taskify

---

## 💻 Frontend Setup

cd frontend
npm install

### 🔥 Run Angular App

ng serve

> App will run at http://localhost:4200

---

## 🧪 API Endpoints

| Method | Endpoint           | Description         |
|--------|--------------------|---------------------|
| GET    | /api/tasks         | Get all tasks       |
| GET    | /api/tasks/:id     | Get single task     |
| POST   | /api/tasks         | Create a task       |
| PUT    | /api/tasks/:id     | Update a task       |
| DELETE | /api/tasks/:id     | Delete a task       |

---

## ✨ Features

- Add, edit, delete tasks
- Filter by status & priority
- Set due dates
- Mobile responsive design
- Clean modular code (MVC + Angular architecture)

---

## 🛠️ Future Improvements

- User authentication (JWT)
- Drag and drop tasks
- Notifications/reminders
- Role-based access
- Cloud deployment (Docker, CI/CD)

---

## 📸 Screenshots

> Coming soon…

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

MIT

---

## ✍️ Author

**Mukund Kumar**  
📧 mukund720@gmail.com  
🔗 LinkedIn: [https://www.linkedin.com/in/saranrajendran/](https://www.linkedin.com/in/mukundsinghonline/)
