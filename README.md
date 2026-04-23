# 🛒 Onix Mall India – Full Stack Application with DevOps, Monitoring & CI/CD

👤 **Author:** Piyush Prasad  
🎯 Aspiring Cloud & DevOps Engineer  

---

## 🚀 Project Overview

Onix Mall India is a full-stack web application simulating a real-world mall ecosystem, combined with a **production-grade DevOps setup** including CI/CD, monitoring, and security on AWS.

---

## 🏗️ Architecture

### 🔹 Application Flow


Frontend (React)
↓
Backend API (Node.js)
↓
Database (MongoDB - Planned)


---

### 🔹 CI/CD Pipeline


GitHub
↓
GitHub Actions
↓
Ansible Server (EC2)
↓
Onixmall Server (EC2)
↓
Nginx → Serves React App


---

### 🔹 Monitoring Flow


Node Exporter
↓
Prometheus
↓
Grafana
↓
User Dashboard (HTTPS)


---

## ⚙️ Tech Stack

### 🎨 Frontend
- React.js (Vite)
- TypeScript
- Tailwind CSS

### ⚙️ Backend
- Node.js
- Express.js

### 🗄️ Database (Planned)
- MongoDB

### ☁️ DevOps & Infrastructure
- AWS EC2 (Ubuntu)
- Nginx (Reverse Proxy)
- PM2
- GitHub Actions
- Ansible

### 📊 Monitoring
- Prometheus
- Node Exporter
- Grafana

---

## 📂 Project Structure


onixmall/
├── src/
├── backend/
│ ├── server.js
│ └── package.json
├── .github/workflows/


---

## 🔗 API Endpoint


GET /api/malls


### Example Response

```json
[
  {
    "id": "1",
    "name": "Onix Mall Mumbai",
    "city": "Mumbai"
  }
]
🚀 Setup
Clone Repository
git clone https://github.com/piyushhhhh/onixmall.git
cd onixmall
Frontend
npm install
npm run dev
Backend
cd backend
npm install
node server.js
⚙️ CI/CD Pipelines
🔹 Main Pipeline (Ansible Based)
Trigger: Push to main
Uses GitHub Actions + Ansible
SSH → Ansible Server → Deploy to EC2
🔹 Backup Pipeline (Direct EC2)
Trigger: Manual (workflow_dispatch)
Direct SSH deployment from GitHub to EC2
Used as fallback deployment
🔐 Security
HTTPS (SSL via Certbot)
Nginx Reverse Proxy
Basic Authentication
UFW Firewall configuration
SSH Key-based Authentication
📊 Monitoring & Observability

🔐 Protected with authentication & HTTPS

👉 Main URL:
https://grafana.onixmall.run.place/

👉 Dashboard (Node Exporter Full):
https://grafana.onixmall.run.place/d/rYdddlPWk/node-exporter-full

⚠️ Access is restricted via authentication for security purposes.

📈 Metrics Monitored
CPU Usage
Memory Usage
Disk Usage
Network Traffic
Server Uptime
System Health
🔄 Monitoring Flow
Node Exporter → Prometheus → Grafana → Secure Dashboard
🧠 Challenges Solved
SSH Permission Issues (public key authentication)
Ansible Dependency Errors & Python conflicts
Broken Node.js package installations
Inventory configuration & private IP networking
CI/CD pipeline conflicts and workflow control
📈 Outcome

✔ Fully automated CI/CD pipeline
✔ Multi-server production architecture
✔ Real-time monitoring with Grafana
✔ Secure and scalable deployment setup
✔ Industry-level DevOps workflow implementation

🔮 Future Improvements
MongoDB Integration
JWT Authentication
Payment Gateway Integration
Alerting System (Prometheus Alerts)
Docker & Kubernetes (EKS)
🏁 Conclusion

This project demonstrates a complete DevOps lifecycle, combining:

Full Stack Development
AWS Cloud Deployment
CI/CD Automation
Monitoring & Observability
Security Best Practices
