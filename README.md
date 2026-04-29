Onix Mall India – Full Stack DevOps Project
Author

Piyush Prasad
Aspiring Cloud & DevOps Engineer

Project Overview

Onix Mall India is a production-style full-stack web application that simulates a real-world mall ecosystem.

This project demonstrates real-world DevOps practices including:

CI/CD automation
Infrastructure deployment
Monitoring and observability
Security implementation
Automated reporting system
Live Links
Service	URL
Website	https://onixmall.run.place

API Endpoint	https://onixmall.run.place/api/malls

Grafana Dashboard	https://grafana.onixmall.run.place
Tech Stack
Layer	Technology
Frontend	React (Vite), TypeScript, Tailwind CSS
Backend	Node.js, Express.js
Database	MongoDB (EC2 - Localhost)
Infrastructure	AWS EC2 (Ubuntu), Nginx
Process Manager	PM2
CI/CD	GitHub Actions, Ansible
Monitoring	Prometheus, Node Exporter, Grafana
Reporting	Bash, Cron, wkhtmltopdf, Mutt, jq
Architecture

GitHub → GitHub Actions → Ansible Server → EC2 → Nginx → Backend API → MongoDB

Infrastructure (AWS EC2 Instances)
Instance Name	Purpose	Instance ID	Availability Zone	Public IP
Ansible Server	CI/CD control node	i-05a68dac6f2725b20	ap-south-1c	35.154.168.44
Application Server	Hosts frontend, backend, MongoDB	i-0b10756dbcbbc795c	ap-south-1a	65.0.158.227
Features
Full-stack mall directory system
API-based dynamic data fetching
Production-ready deployment
Real-time monitoring dashboards
Automated CI/CD pipelines
Infrastructure security implementation
Automated PDF reporting system
Security Implementation
Area	Implementation
HTTPS	Certbot SSL
Reverse Proxy	Nginx
Firewall	UFW (22, 80, 443 only)
Database Security	MongoDB restricted to localhost
Authentication	SSH key-based
API Protection	Rate limiting
GitHub Security	Dependabot, Secret scanning, CodeQL
Monitoring and Observability

Prometheus collects system metrics, Node Exporter exposes them, and Grafana visualizes the data.

Metrics Monitored
Metric	Description
CPU	Server usage
Memory	RAM usage
Disk	Storage usage
Network	Traffic flow
Uptime	Server availability
Database Configuration
Component	Configuration
Host	127.0.0.1
Port	27017
Database Name	onixmall
Access	Backend only
API Example

Endpoint: /api/malls
Returns mall data such as name and city.

DNS Configuration
Type	Name	Value	Purpose
A	@	EC2 Public IP	Main domain
A	www	EC2 Public IP	Website
A	grafana	EC2 Public IP	Monitoring
CNAME	api	onixmall.run.place	API

SSL Mode: Full (Strict)

CI/CD Pipeline
Pipeline	Description
Main Pipeline	Auto deploy on push using Ansible
Backup Pipeline	Manual deployment to EC2
Branching Strategy
Branch	Purpose
main	Production deployment
testing	Safe testing
Deployment Flow
Code pushed to GitHub
GitHub Actions triggered
Ansible connects to EC2
Application deployed
Backend restarted using PM2
Nginx serves updated version
Project Structure
Folder	Description
src	Frontend source code
backend	API server
dist	Production build
scripts	DevOps automation scripts
.github/workflows	CI/CD pipelines
Automated Reporting System

A corporate-style system that generates PDF reports and sends them via email automatically.

Schedule
Time	Report
8:00 AM	Morning Report
7:00 PM	Evening Report
Report Includes
Server health (CPU, Memory, Disk)
Application status (Frontend & API)
Service health (Nginx, MongoDB, PM2)
SSL certificate expiry
Infrastructure overview
Security logs
PM2 process monitoring
Manual Execution

bash scripts/daily-report.sh

Cron Job

0 8,19 * * * /bin/bash /home/ubuntu/daily-report.sh >> /home/ubuntu/report.log 2>&1

Key Learnings
AWS EC2 deployment
Nginx reverse proxy configuration
CI/CD automation
Monitoring and observability setup
Production debugging
Security best practices
Automated reporting system
Future Improvements
Authentication system
Admin panel
Payment integration
Docker
Kubernetes
Alerting system
Conclusion

This project demonstrates a complete DevOps workflow including deployment, automation, monitoring, security, and reporting in a real-world environment.

Support

If you find this project useful, consider giving it a star ⭐
