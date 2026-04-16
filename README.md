# 🚀 Onix Mall India – Full Stack Application & DevOps Monitoring

## 👤 Author

**Piyush Prasad**
IT Office Assistant | Aspiring Cloud & DevOps Engineer

---

## 🏗️ Project Overview

Onix Mall India is a **full-stack web application** simulating a real-world mall ecosystem, combined with a **production-grade monitoring and security setup** deployed on AWS EC2.

---

## ⚙️ Tech Stack

### 🎨 Frontend

* React.js (Vite) + TypeScript
* Tailwind CSS

### ⚙️ Backend

* Node.js
* Express.js

### 🗄️ Database (Planned)

* MongoDB

### ☁️ DevOps & Infra

* AWS EC2 (Ubuntu)
* Nginx (Reverse Proxy)
* PM2

### 📊 Monitoring

* Prometheus
* Node Exporter
* Grafana

---

## 🏗️ Architecture

Frontend → Backend API → Database (Planned)

Monitoring Flow:
Node Exporter → Prometheus → Grafana → User (HTTPS)

---

## 📂 Project Structure

onixmall/
├── src/
├── backend/
│   ├── server.js
│   └── package.json

---

## 🔗 API Endpoint

GET /api/malls

Example:
[
{
"id": "1",
"name": "Onix Mall Mumbai",
"city": "Mumbai"
}
]

---

## 🚀 Setup

### Clone Repo

git clone https://github.com/your-username/onixmall.git
cd onixmall

### Frontend

npm install
npm run dev

### Backend

cd backend
npm install
node server.js

---

## 🌐 Live Monitoring (Grafana)

🔐 Protected with authentication & HTTPS

👉 Main URL:
https://grafana.onixmall.run.place/

👉 Dashboard:
https://grafana.onixmall.run.place/d/rYdddlPWk/node-exporter-full

---

## 🔐 Security

* HTTPS (SSL via Certbot)
* Nginx Reverse Proxy
* Basic Authentication
* Firewall (UFW)

---

## 📊 Features

* Full-stack mall directory
* API-based data fetching
* Admin UI (frontend level)
* Real-time server monitoring
* Secure dashboard access

---

## 📈 Monitoring

* CPU, RAM, Disk usage
* Network traffic
* System uptime
* Server health

---

## 🧠 Key Learnings

* Full Stack Development
* AWS Deployment
* Monitoring with Prometheus & Grafana
* Nginx Reverse Proxy
* Server Security

---

## 🔮 Future Improvements

* MongoDB integration
* JWT Authentication
* Payment Gateway
* Alerting System
* Docker & Kubernetes

---

## 🏁 Conclusion

This project demonstrates **real-world Full Stack + DevOps skills**, including deployment, monitoring, and security in a cloud environment.

---
