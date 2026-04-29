# 🏢 Onix Mall India  
### Full Stack DevOps Infrastructure Project  

> A production-grade full stack application demonstrating real-world DevOps practices including CI/CD, monitoring, security, and automated reporting.

---

## 👨‍💻 Author
**Piyush Prasad**  
Aspiring Cloud & DevOps Engineer  

---

## 📌 Overview

Onix Mall India is a **production-style full stack web application** designed to simulate a real-world mall ecosystem.

This project focuses on implementing **end-to-end DevOps practices**, covering:

- Infrastructure provisioning  
- CI/CD automation  
- Monitoring and observability  
- Security hardening  
- Automated reporting  

---

## 🌐 Live Services

| Service | URL |
|--------|-----|
| 🌍 Website | https://onixmall.run.place |
| 🔌 API | https://onixmall.run.place/api/malls |
| 📊 Monitoring (Grafana) | https://grafana.onixmall.run.place |

> Grafana is secured with authentication and HTTPS.

---

## ⚙️ Technology Stack

| Layer | Technology |
|------|-----------|
| Frontend | React (Vite), TypeScript, Tailwind CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB (Localhost on EC2) |
| Infrastructure | AWS EC2 (Ubuntu), Nginx |
| Process Manager | PM2 |
| CI/CD | GitHub Actions, Ansible |
| Monitoring | Prometheus, Node Exporter, Grafana |

---

## 🏗️ Architecture


GitHub → GitHub Actions → Ansible → EC2 → Nginx → Backend API → MongoDB


- Frontend served via **Nginx**
- Backend managed using **PM2**
- MongoDB runs locally for enhanced security

---

## 🖥️ Infrastructure Setup

| Instance | Purpose | Instance ID | Availability Zone | Public IP |
|---------|--------|------------|------------------|----------|
| Ansible Server | CI/CD Control Node | i-05a68dac6f2725b20 | ap-south-1c | 35.154.168.44 |
| Application Server | Full Application Hosting | i-0b10756dbcbbc795c | ap-south-1a | 65.0.158.227 |

---

## 🚀 Key Features

- Full-stack application deployment  
- Automated CI/CD pipelines  
- Secure backend architecture  
- Real-time monitoring dashboards  
- Infrastructure-level security  
- Automated reporting system  

---

## 🔐 Security Implementation

| Area | Implementation |
|-----|--------------|
| HTTPS | Certbot SSL |
| Reverse Proxy | Nginx |
| Firewall | UFW (Ports 22, 80, 443) |
| Database | MongoDB restricted to localhost |
| Authentication | SSH key-based |
| API Protection | Rate limiting |
| Code Security | Dependabot, CodeQL, Secret scanning |

---

## 📊 Monitoring & Observability

- **Prometheus** → Metrics collection  
- **Node Exporter** → System-level data  
- **Grafana** → Visualization dashboards  

### Metrics Tracked
- CPU usage  
- Memory usage  
- Disk usage  
- Network traffic  
- Server uptime  

---

## 🔄 CI/CD Pipeline

| Pipeline | Description |
|---------|------------|
| Main Pipeline | Automated deployment on push |
| Backup Pipeline | Manual fallback deployment |

### Workflow

1. Code pushed to `testing` branch  
2. Changes validated  
3. Merged into `main`  
4. Deployment triggered automatically  

---

## 📦 Project Structure

| Folder | Description |
|-------|------------|
| `src/` | Frontend source code |
| `backend/` | API server |
| `dist/` | Production build |
| `scripts/` | DevOps automation scripts |
| `.github/workflows/` | CI/CD pipelines |

---

# 🔄 Automated Reporting System

A **corporate-style infrastructure reporting system** that generates PDF reports and sends them via email automatically.

---

## 📊 Capabilities

- Automated PDF report generation  
- Email delivery with multiple recipients  
- Scheduled execution using cron  
- Real-time infrastructure insights  
- Professional corporate layout  

---

## ⏰ Scheduling

| Time | Report |
|------|--------|
| 08:00 AM | Morning Infrastructure Report |
| 07:00 PM | Evening Infrastructure Report |

---

## 📄 Report Includes

- Server health (CPU, Memory, Disk)  
- Application status (Frontend & API)  
- Service health (Nginx, MongoDB, PM2)  
- SSL certificate expiry  
- Infrastructure overview  
- Security logs  
- Process monitoring  

---

## 🛠️ Tools Used

| Tool | Purpose |
|------|--------|
| Bash | Automation scripting |
| wkhtmltopdf | HTML → PDF conversion |
| Mutt | Email delivery |
| Cron | Scheduling |
| jq | JSON parsing (PM2 formatting) |

---

## ▶️ Manual Execution

```bash
bash scripts/daily-report.sh
📬 Output
PDF report as email attachment
Clean, structured format
Separate email threads (timestamp-based)
Multi-recipient support
📚 Key Learnings
AWS EC2 infrastructure deployment
Reverse proxy configuration (Nginx)
CI/CD automation pipelines
Monitoring and observability setup
Production debugging techniques
Security best practices
Automated reporting systems
🔮 Future Enhancements
Authentication system
Admin dashboard
Payment integration
Containerization (Docker)
Orchestration (Kubernetes)
Alerting system
📝 Conclusion

This project demonstrates a complete DevOps lifecycle, combining:

Deployment
Automation
Monitoring
Security
Reporting
⭐ Support

If you find this project useful, consider giving it a star ⭐
