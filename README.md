# 🗓️ Activity Booking API (MERN Stack)

This is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) project that provides an activity booking system. Users can register and log in, view a list of available activities, book an activity, and view their booked activities.

---

## 📌 Features

- ✅ User registration and login with JWT authentication  
- ✅ Secure API access using tokens  
- ✅ List public activities (cricket, movies, football, etc.)  
- ✅ Authenticated activity booking  
- ✅ View personal booking history  
- ✅ MongoDB relationships with `.populate()` for user and activity data

---

## 🛠 Tech Stack

- **Frontend:** React.js  
- **Backend:** Node.js + Express.js  
- **Database:** MongoDB + Mongoose  
- **Authentication:** JWT (JSON Web Token)  
- **HTTP Testing:** Postman

---

## 📂 Folder Structure (Backend)

server/
│
├── connect/
│ └── connectDb.js
│
│
├── controllers/
│ └── authController.js
│ └── activityController.js
│ └── bookingController.js
│
├── models/
│ └── userModel.js
│ └── activityModel.js
│ └── bookingModel.js
│
├── routes/
│ └── authRoutes.js
│ └── activityRoutes.js
│ └── bookingRoutes.js
│
├── middleware/
│ └── authMiddleware.js
│ └── validate.js
│
├── utils/
│ └── generateAccessToken.js
│ └── generateRefreshToken.js
│
│
├── validation/
│ └── authValidation.js
│
│
├── .env
├── server.js
└── package.json


---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/RiturajPaull/MeetX_Assignment.git
cd MeetX_Assignment/server

```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure .env File

```bash
PORT=3000
MONGO_URI=your_mongodb_connection_string
SECRET_KEY_REFRESH_TOKEN=your_refresh_token_secret
SECRET_KEY_REFRESH_TOKEN=your_access_token_secret
```

### 4. Start the server 

```bash
nodemon ./server.js
```

---

# 🧑‍💻 About the Assignment

This assignment simulates a real-world booking system using clean and modular backend design. It focuses on:

- ✅ User registration and login with JWT authentication  
- ✅ Secure API access using tokens  
- ✅ List public activities (cricket, movies, football, etc.)
- ✅ Signup Validation using Zod  
- ✅ Authenticated activity booking  
- ✅ View personal booking history  
- ✅ MongoDB relationships with `.populate()` for user and activity data

---



