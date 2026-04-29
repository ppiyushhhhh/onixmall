# 🏢 Onix Mall India  
### Production-Grade Full Stack DevOps Platform

> A production-style application showcasing end-to-end DevOps practices: CI/CD automation, secure infrastructure, observability, and automated reporting.

---

## 👤 Author
**Piyush Prasad**  
Cloud & DevOps Engineer (Aspiring)

---

## 📌 Executive Summary

Onix Mall India is a **full stack web application deployed on AWS EC2** that demonstrates **real-world DevOps workflows**:

- Automated CI/CD using GitHub Actions + Ansible  
- Hardened infrastructure with Nginx, UFW, and SSL  
- Full observability via Prometheus, Node Exporter, Grafana  
- **Automated, corporate-style PDF reporting via cron + email**  

---

## 🌐 Live Endpoints

| Service | URL |
|---|---|
| Website | https://onixmall.run.place |
| API | https://onixmall.run.place/api/malls |
| Grafana | https://grafana.onixmall.run.place |

> Grafana is secured with authentication and HTTPS.

---

## 🧰 Technology Stack

| Layer | Tools / Frameworks |
|---|---|
| Frontend | React (Vite), TypeScript, Tailwind CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB (localhost on EC2) |
| Web Server | Nginx (reverse proxy + static hosting) |
| Process Manager | PM2 |
| CI/CD | GitHub Actions, Ansible |
| Monitoring | Prometheus, Node Exporter, Grafana |
| Reporting | Bash, Cron, wkhtmltopdf, Mutt, jq |

---

## 🏗️ System Architecture

```text
GitHub
  ↓
GitHub Actions (CI/CD)
  ↓
Ansible (Control Node)
  ↓
Application Server (EC2)
  ├─ Nginx (Reverse Proxy)
  ├─ React Frontend
  ├─ Node.js Backend (PM2)
  └─ MongoDB (Localhost)
🖥️ Infrastructure
Component	Purpose	Instance ID	AZ	Public IP
Ansible Server	CI/CD control node	i-05a68dac6f2725b20	ap-south-1c	35.154.168.44
Application Server	Hosts full stack app	i-0b10756dbcbbc795c	ap-south-1a	65.0.158.227
🚀 Core Capabilities
End-to-end CI/CD automation
Production-grade Nginx reverse proxy
Secure backend with PM2 + MongoDB (localhost only)
Real-time monitoring dashboards (Grafana)
Automated PDF reporting with email delivery
Structured branching strategy (testing → main)
🔐 Security Posture
Domain	Controls
Transport	HTTPS via Certbot
Network	UFW (22, 80, 443 only)
Database	MongoDB bound to 127.0.0.1
Access	SSH key-based
API	Rate limiting
Code	Dependabot, Secret Scanning, CodeQL
📊 Observability

Prometheus → Node Exporter → Grafana

Metrics Covered

CPU utilization
Memory usage
Disk consumption
Network throughput
System uptime
🔄 CI/CD
Pipeline	Behavior
Main	Auto-deploy on push to main
Backup	Manual fallback deploy

Flow

Push to testing
Validate changes
Merge to main
GitHub Actions triggers Ansible
Deploy → Restart (PM2) → Serve (Nginx)
📦 Repository Structure
Path	Description
src/	Frontend source
backend/	Express API
dist/	Production build
scripts/	DevOps automation
.github/workflows/	CI/CD pipelines
📄 Automated Reporting System

A corporate-grade reporting pipeline that generates and emails PDF infrastructure reports.

✨ Highlights
PDF reports with structured sections
Multiple recipients
Timestamped subjects (no email threading)
Runs via cron (no manual intervention)
⏰ Schedule
Time	Report
08:00 AM	Morning Health Report
07:00 PM	Evening Health Report
📑 Report Contents
Section	Details
Communication	From, To, Subject
Executive Summary	App/API/Nginx/Mongo status
Infrastructure	App + Ansible server
Server Health	CPU, Memory, Disk, Uptime
URLs	Website, API, Grafana
SSL	Certificate expiry
PM2	Process metrics (CPU, RAM, restarts)
Security	Failed SSH attempts
▶️ Manual Execution
bash scripts/daily-report.sh
🕒 Cron Configuration
0 8,19 * * * /bin/bash /home/ubuntu/daily-report.sh >> /home/ubuntu/report.log 2>&1
🗄️ Database
Field	Value
Host	127.0.0.1
Port	27017
DB	onixmall
Access	Backend only
🔌 API Example
GET /api/malls
🌍 DNS
Type	Name	Purpose
A	@	Main domain
A	www	Website
A	grafana	Monitoring
CNAME	api	Optional API route

SSL Mode: Full (Strict)

🧠 Key Learnings
Production EC2 deployments
Nginx reverse proxy patterns
CI/CD with GitHub Actions + Ansible
PM2 process lifecycle management
Monitoring stack implementation
Cron-based automation
PDF report generation pipelines
Secure system design
🔮 Roadmap
Auth system
Admin dashboard
Payments integration
Docker & Kubernetes
Alerting (Slack/Email)
Report archival (S3)
📝 Conclusion

This project represents a complete DevOps lifecycle:

Build → Deploy → Secure → Monitor → Report
