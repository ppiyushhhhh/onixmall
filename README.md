🏢 Onix Mall India
Production-Grade Full Stack DevOps Platform

A production-style application showcasing end-to-end DevOps practices: CI/CD automation, secure infrastructure, observability, and automated reporting.

👤 Author

Piyush Prasad
Cloud & DevOps Engineer (Aspiring)

📌 Executive Summary

Onix Mall India is a full stack web application deployed on AWS EC2 that demonstrates real-world DevOps workflows:

Automated CI/CD using GitHub Actions + Ansible
Secure infrastructure with Nginx, UFW, and SSL
Full observability via Prometheus, Node Exporter, Grafana
Automated PDF infrastructure reporting system
🌐 Live Services
Service	URL
🌍 Website	https://onixmall.run.place

🔌 API	https://onixmall.run.place/api/malls

📊 Grafana	https://grafana.onixmall.run.place
⚙️ Technology Stack
Layer	Technology
Frontend	React, Vite, TypeScript, Tailwind CSS
Backend	Node.js, Express.js
Database	MongoDB (EC2 Localhost)
Infrastructure	AWS EC2, Ubuntu, Nginx
Process Manager	PM2
CI/CD	GitHub Actions, Ansible
Monitoring	Prometheus, Node Exporter, Grafana
Reporting	Bash, Cron, wkhtmltopdf, Mutt, jq
🏗️ Architecture
GitHub → GitHub Actions → Ansible → EC2 → Nginx → Backend API → MongoDB
🖥️ Infrastructure
Instance	Purpose	Availability Zone	Public IP
Ansible Server	CI/CD Control Node	ap-south-1c	35.154.168.44
Application Server	Full App Hosting	ap-south-1a	65.0.158.227
🚀 Key Features
Full-stack production deployment
Automated CI/CD pipelines
Secure backend architecture
Real-time monitoring dashboards
Automated PDF reporting system
🔐 Security Implementation
HTTPS using Certbot SSL
Nginx reverse proxy
UFW firewall (restricted ports)
MongoDB bound to localhost
SSH key-based authentication
API rate limiting
GitHub security (Dependabot, CodeQL)
📊 Monitoring & Observability
Prometheus (metrics collection)
Node Exporter (system data)
Grafana (visual dashboards)
Metrics Tracked
CPU usage
Memory usage
Disk usage
Network traffic
Server uptime
🔄 CI/CD Pipeline
Auto deployment on push to main
Testing workflow using testing branch
Ansible-based deployment automation
📦 Project Structure
Folder	Description
src	Frontend
backend	API
dist	Production build
scripts	DevOps automation
.github/workflows	CI/CD
📄 Automated Reporting System

A corporate-style system that generates PDF reports and sends them via email automatically.

⏰ Schedule
Time	Report
08:00 AM	Morning Report
07:00 PM	Evening Report
📊 Report Includes
Server health (CPU, Memory, Disk)
Application status (Frontend & API)
Service health (Nginx, MongoDB, PM2)
SSL certificate expiry
Infrastructure details
Security logs
PM2 process monitoring
▶️ Manual Execution

bash scripts/daily-report.sh

🕒 Cron Setup
0 8,19 * * * /bin/bash /home/ubuntu/daily-report.sh >> /home/ubuntu/report.log 2>&1
🧠 Key Learnings
AWS EC2 deployment
Nginx reverse proxy
CI/CD automation
Monitoring setup
Security best practices
Automated reporting systems
🔮 Future Improvements
Authentication system
Admin dashboard
Payment integration
Docker & Kubernetes
Alerting system
📝 Conclusion

This project demonstrates a complete DevOps lifecycle:

Deploy → Secure → Monitor → Automate → Report

⭐ Support

If you find this project useful, consider giving it a star ⭐
