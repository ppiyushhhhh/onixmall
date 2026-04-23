# 🛒 Onix Mall India

🚀 Full Stack Application with DevOps, Monitoring & CI/CD  

👤 **Piyush Prasad**  
Aspiring Cloud & DevOps Engineer  

---

## 📌 Project Overview

Onix Mall India is a full-stack web application that simulates a real-world mall system, combined with a **production-ready DevOps setup**.

This project demonstrates how modern applications are:

- Built (Frontend + Backend)
- Deployed (AWS EC2)
- Automated (CI/CD)
- Monitored (Prometheus + Grafana)
- Secured (HTTPS + Authentication)

---

## 🏗️ Architecture

### Application Flow

Frontend (React)  
↓  
Backend API (Node.js)  
↓  
Database (MongoDB – Planned)  

---

### CI/CD Flow

GitHub  
↓  
GitHub Actions  
↓  
Ansible Server (EC2)  
↓  
Application Server (EC2)  
↓  
Nginx  

---

### Monitoring Flow

Node Exporter  
↓  
Prometheus  
↓  
Grafana  
↓  
Secure Dashboard  

---

## ⚙️ Tech Stack

**Frontend**
- React (Vite)
- TypeScript
- Tailwind CSS

**Backend**
- Node.js
- Express.js

**DevOps & Infrastructure**
- AWS EC2 (Ubuntu)
- Nginx (Reverse Proxy)
- PM2
- GitHub Actions
- Ansible

**Monitoring**
- Prometheus
- Node Exporter
- Grafana

---

## 🚀 CI/CD Pipelines

### 🔹 Main Pipeline (Automated)

- Trigger: Push to `main`
- GitHub Actions → Ansible → EC2 deployment
- Fully automated deployment system

---

### 🔹 Backup Pipeline (Manual)

- Trigger: Manual (`workflow_dispatch`)
- Direct deployment from GitHub to EC2
- Used as fallback

---

## 🔐 Security

- HTTPS (SSL via Certbot)
- Nginx Reverse Proxy
- Basic Authentication
- UFW Firewall
- SSH Key Authentication

---

## 📊 Monitoring & Observability

🔐 Protected with authentication & HTTPS  

**Grafana Dashboard:**  
👉 https://grafana.onixmall.run.place/  

**Node Exporter Dashboard:**  
👉 https://grafana.onixmall.run.place/d/rYdddlPWk/node-exporter-full  

---

### Metrics Monitored

- CPU Usage  
- Memory Usage  
- Disk Usage  
- Network Traffic  
- Server Uptime  

---

## 🧠 Challenges Solved

- SSH authentication issues  
- Ansible dependency errors  
- Broken Node.js packages  
- CI/CD pipeline conflicts  
- Server-to-server communication  

---

## 📈 Outcome

- Fully automated CI/CD pipeline  
- Multi-server production architecture  
- Real-time monitoring system  
- Secure deployment setup  
- Production-level DevOps workflow  

---

## 🔮 Future Improvements

- MongoDB integration  
- JWT authentication  
- Payment gateway  
- Alerting system  
- Docker & Kubernetes  

---

## 🏁 Conclusion

This project is a complete **Full Stack + DevOps implementation**, combining:

- Application development  
- Cloud deployment  
- Automation  
- Monitoring  
- Security  

---

⭐ If you like this project, give it a star!
