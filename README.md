Onix Mall India – Full Stack DevOps Project
Author

Piyush Prasad
Aspiring Cloud & DevOps Engineer

Overview

Onix Mall India is a production-style full-stack web application deployed on AWS EC2.

It demonstrates real-world DevOps practices across:

CI/CD automation
Infrastructure deployment
Monitoring and observability
Security implementation
Automated reporting
Live Services
Service	URL
Website	https://onixmall.run.place

API	https://onixmall.run.place/api/malls

Grafana	https://grafana.onixmall.run.place
Tech Stack
Layer	Technology
Frontend	React (Vite), TypeScript, Tailwind
Backend	Node.js, Express
Database	MongoDB (Localhost on EC2)
Infrastructure	AWS EC2, Nginx
CI/CD	GitHub Actions, Ansible
Monitoring	Prometheus, Grafana
Reporting	Bash, Cron, wkhtmltopdf
Architecture

GitHub → GitHub Actions → Ansible → EC2 → Nginx → Backend → MongoDB

Infrastructure
Component	Purpose	AZ	Public IP
Ansible Server	CI/CD control node	ap-south-1c	35.154.168.44
Application Server	Full app hosting	ap-south-1a	65.0.158.227
Features
Full-stack deployment on AWS
Automated CI/CD pipeline
Secure backend architecture
Monitoring dashboards (Grafana)
Automated PDF reporting system
Security
HTTPS with Certbot
Nginx reverse proxy
UFW firewall (22, 80, 443)
MongoDB restricted to localhost
SSH key-based access
API rate limiting
Monitoring

Prometheus + Node Exporter + Grafana

Metrics tracked:

CPU
Memory
Disk
Network
Uptime
CI/CD
Stage	Description
Build	GitHub Actions
Deploy	Ansible → EC2
Restart	PM2
Serve	Nginx
Project Structure
Path	Description
src/	Frontend
backend/	API
dist/	Production build
scripts/	DevOps scripts
.github/workflows/	CI/CD
Automated Reporting

A cron-based system generates and emails PDF infrastructure reports.

Schedule
Time	Report
08:00 AM	Morning report
07:00 PM	Evening report
Includes
Server health (CPU, Memory, Disk)
Application status
Service status (Nginx, MongoDB, PM2)
SSL expiry
Security logs
Run Manually

bash scripts/daily-report.sh

Key Learnings
AWS EC2 deployment
Nginx reverse proxy
CI/CD automation
Monitoring setup
Security best practices
Automation using cron
Future Work
Authentication system
Admin dashboard
Docker & Kubernetes
Alerting system
Conclusion

This project demonstrates a complete DevOps workflow from deployment to monitoring and automation.

Support

If you found this useful, consider giving it a ⭐
