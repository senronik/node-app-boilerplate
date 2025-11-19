# 🚀 create-node-app-starter  
A simple and powerful CLI tool to generate a **Node.js starter template** with Express, MongoDB, dotenv, and clean project structure.  
Perfect for quick project setup without repeating boilerplate code!

---

## ⭐ Features
- ⚡ Instant Node.js project setup  
- 📦 Preconfigured Express server  
- 🗄 MongoDB connection using Mongoose  
- 🔐 dotenv environment setup  
- 📁 Clean folder structure  
- 🧪 Sample routes  
- 🔥 Server starts **only after MongoDB connects**

---

## 📥 Installation & Usage

You don't need to install the package globally.  
Just run:

```sh
npx create-node-app-starter my-app
```

Then:

```sh
cd my-app
```

## 🔐 Environment Setup (.env)

Create a `.env` file in the root of the generated project (e.g. `my-app/.env`):

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/test
```

- `PORT` → the port your Express server will run on (default 5000)
- `MONGO_URI` → your MongoDB connection string

Finally, start the server:

```sh
npm start
```