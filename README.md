# 🏗️ Onix Mall India – Full Stack DevOps Project

## 👤 Author  
**Piyush Prasad**  
Aspiring Cloud & DevOps Engineer  

---

## 📌 Project Overview

Onix Mall India is a production-style full-stack web application that simulates a real-world mall ecosystem.

This project demonstrates real-world DevOps practices including:
- CI/CD automation
- Infrastructure deployment
- Monitoring & observability
- Security implementation

---

## 🌐 Live Links

| Service | URL |
|--------|-----|
| 🌍 Live Website | https://onixmall.run.place |
| 🔗 API Endpoint | https://onixmall.run.place/api/malls |
| 📊 Grafana Dashboard | https://grafana.onixmall.run.place |

🔐 Grafana is protected with authentication & HTTPS

---

## ⚙️ Tech Stack

### 🎨 Frontend
- React (Vite)
- TypeScript
- Tailwind CSS

### ⚙️ Backend
- Node.js
- Express.js

### 🗄️ Database
- MongoDB (hosted on EC2)

### ☁️ DevOps & Infrastructure
- AWS EC2 (Ubuntu)
- Nginx (Reverse Proxy + HTTPS)
- PM2 (Process Manager)

### 🔁 CI/CD
- GitHub Actions
- Ansible (Automated Deployment)
- Backup Direct Deployment Pipeline

### 📊 Monitoring
- Prometheus
- Node Exporter
- Grafana

---

## 🏗️ Architecture


GitHub → GitHub Actions → Ansible Server → EC2 → Nginx → Backend → MongoDB
↓
Frontend (React Build)


---

## 🚀 Features

- Full-stack mall directory system  
- API-based dynamic data fetching  
- Secure backend integration  
- Production-ready deployment  
- Real-time monitoring dashboards  
- CI/CD automation pipelines  

---

## 🔐 Security Implementation

- HTTPS enabled via Certbot (SSL)  
- Nginx Reverse Proxy  
- UFW Firewall (only 22, 80, 443 allowed)  
- MongoDB restricted to localhost  
- SSH key-based authentication  
- API Rate Limiting (Express middleware)  
- GitHub Security enabled:
  - Dependabot alerts
  - Secret scanning
  - CodeQL analysis  

---

## 📊 Monitoring & Observability

- Prometheus collects metrics  
- Node Exporter exposes system data  
- Grafana visualizes metrics  

### Metrics Monitored:
- CPU usage  
- Memory usage  
- Disk usage  
- Network traffic  
- Server uptime  

---

## 🔗 API Example

### GET /api/malls

```json
[
  {
    "_id": "69eb4d26d90bf9c0373632df",
    "name": "Onix Mall Mumbai",
    "city": "Mumbai"
  }
]
🌐 DNS Configuration (Cloudflare)
📌 DNS Records
Type	Name	Value	Proxy	Purpose
A	@	EC2_PUBLIC_IP	Yes	Main domain
A	www	EC2_PUBLIC_IP	Yes	Website
A	grafana	EC2_PUBLIC_IP	Yes	Monitoring dashboard
CNAME	api	onixmall.run.place	Yes	API (optional)
⚙️ Explanation
@ → Root domain → EC2
www → Redirect access
grafana → Monitoring subdomain
Cloudflare proxy provides:
SSL
Security (WAF)
CDN
🔐 SSL Setup
Cloudflare SSL: Full (Strict)
Nginx: Certbot SSL installed
🛠️ Setup Guide
1. Clone Repository
git clone https://github.com/your-username/onixmall.git
cd onixmall
2. Frontend Setup
npm install
npm run dev
3. Backend Setup
cd backend
npm install
node server.js
4. Production Build
npm run build
🔁 CI/CD Pipeline
🔹 Ansible Pipeline
Trigger: Push to main branch
Fully automated deployment
🔹 Backup Pipeline
Manual trigger
Direct EC2 deployment
⚡ Deployment Flow
Push code to GitHub
GitHub Actions triggers pipeline
Ansible connects to EC2
Build + deploy app
Restart services
Nginx serves updated version
📁 Project Structure
onixmall/
├── src/
├── backend/
│   ├── server.js
│   └── package.json
├── dist/
├── .github/workflows/
🧠 Key Learnings
AWS EC2 deployment
Nginx reverse proxy
CI/CD automation
Monitoring setup
Debugging real-world issues
DevOps security practices
🔮 Future Improvements
JWT Authentication
Admin panel
Payment integration
Docker
Kubernetes
Alerting system
🏁 Conclusion

This project demonstrates a real-world DevOps architecture combining:

Automation
Monitoring
Security
Scalability
⭐ Support

If you like this project, give it a star ⭐
