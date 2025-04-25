# 📋 Taskify - Task Management Application

Taskify is a full-stack task management system built with **Angular 19** on the frontend and **Node.js + Express** with **MongoDB** on the backend. It allows users to create, update, filter, and delete tasks with priorities, due dates, and statuses.

---

## 🧱 Tech Stack

| Layer        | Technology                    |
|--------------|-------------------------------|
| Frontend     | Angular 19, RxJS, SCSS        |
| Backend      | Node.js, Express              |
| Database     | MongoDB (Mongoose ODM)        |
| API Protocol | REST                          |
| UI Framework | Bootstrap & Angular Material  |

---

## 📦 Project Structure

taskify/
├── backend/
└── frontend/

- **/backend** - Node.js Express REST API with MongoDB
- **/frontend** - Angular 19 SPA for UI/UX

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


## 📸 Screenshots

![Swagger](https://github.com/user-attachments/assets/83cd5979-b839-405d-9fd6-c08803a9b876)
![Create Task](https://github.com/user-attachments/assets/4d79a7b6-dc0f-4ab8-aa73-a35e2f6a63c3)
![Edit Task](https://github.com/user-attachments/assets/596d66b5-2e4a-4f50-b092-2443c71cf234)
![Delete Task](https://github.com/user-attachments/assets/2de31f66-3743-4800-a6b3-baf90d5d9a23)
![Pageination](https://github.com/user-attachments/assets/f385cb5e-b53e-4478-93d8-9f5dff175854)
![filter](https://github.com/user-attachments/assets/1944bb54-9d97-46e0-a3bf-d28a91f3ef47)








---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

---

## ✍️ Author

**Mukund Kumar**  
📧 mukund720@gmail.com  
🔗 LinkedIn: [Mukund](https://www.linkedin.com/in/mukundsinghonline/)
